'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Loader2, AlertCircle, Download, Coins, BrainCircuit, Youtube, Upload, Link as LinkIcon, Text, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MAX_HISTORY_LENGTH = 10;
const HISTORY_STORAGE_KEY = 'youtube2podcast_url_history';

interface GeminiUsageInfo {
  input_tokens: number;
  output_tokens: number;
  cost_usd: number;
  model: string;
}

interface TTSUsageInfo {
  characters: number;
  processed_characters: number;
  cost_usd: number;
  model: string;
}

interface ProgressMessage {
  id: number;
  step: string;
  message: string;
  icon: string;
}

interface ConversionResult {
  text: string;
  audio: string; // Base64 encoded audio
  gemini_usage?: GeminiUsageInfo;
  tts_usage?: TTSUsageInfo;
}

function formatCost(cost: number | undefined): string {
  if (cost === undefined || cost === null) return 'N/A';
  return cost < 0.0001 && cost > 0 ? `$${cost.toExponential(2)}` : `$${cost.toFixed(4)}`;
}

// --- Define Aivis Speakers --- 
const aivisSpeakers = [
  { id: '488039072', name: 'korosuke' },
  { id: '888753760', name: 'Anneli (ノーマル)' },
  { id: '1763602272', name: 'kiyoshi' },
  { id: '269244800', name: 'sakuragi' },
  { id: '1342155808', name: 'yamaoka' },
];

export default function Home() {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [urlHistory, setUrlHistory] = useState<string[]>([]);
  const [progressMessages, setProgressMessages] = useState<ProgressMessage[]>([]);
  const eventSourceRef = useRef<EventSource | null>(null);
  const [ttsService, setTtsService] = useState<string>('openai');
  const [aivisSpeakerId, setAivisSpeakerId] = useState<string>(aivisSpeakers[0].id);
  const [openaiVoice, setOpenaiVoice] = useState<string>('alloy');
  const openaiVoices = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];
  const [geminiModel, setGeminiModel] = useState('gemini-2.0-flash');

  const [inputType, setInputType] = useState<'youtube' | 'pdfUpload' | 'pdfUrl' | 'textInput'>('youtube');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');
  const [pdfUploadText, setPdfUploadText] = useState<string>('');
  const [isUploadingPdf, setIsUploadingPdf] = useState<boolean>(false);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (storedHistory) {
        setUrlHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error("Failed to load URL history from localStorage:", e);
      localStorage.removeItem(HISTORY_STORAGE_KEY);
    }
    return () => {
      eventSourceRef.current?.close();
    };
  }, []);

  const updateHistory = (newUrl: string) => {
    setUrlHistory(prevHistory => {
      const filteredHistory = prevHistory.filter(item => item !== newUrl);
      const updated = [newUrl, ...filteredHistory];
      const finalHistory = updated.slice(0, MAX_HISTORY_LENGTH);
      
      try {
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(finalHistory));
      } catch (e) {
        console.error("Failed to save URL history to localStorage:", e);
      }
      return finalHistory;
    });
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setPdfFile(null);
    setPdfUploadText('');
    setError(null);

    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setIsUploadingPdf(true);
      setError(null);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:8000/api/v1/upload_pdf', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || `PDFアップロードエラー: ${response.statusText}`);
        }

        const resultData = await response.json();
        setPdfUploadText(resultData.extracted_text);
        console.log(`Successfully extracted text from ${resultData.filename} (${resultData.num_pages} pages)`);
        setError(null);

      } catch (err: any) {
        console.error("PDF Upload/Extraction failed:", err);
        setError(err.message || 'PDFのアップロードまたはテキスト抽出に失敗しました。');
        setPdfFile(null);
      } finally {
        setIsUploadingPdf(false);
      }

    } else if (file) {
        setError('無効なファイルタイプです。PDFファイルを選択してください。');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let sourceParam = '';
    let sourceValue = '';
    let isValid = false;

    if (inputType === 'youtube') {
      if (!url) { setError('YouTube URLを入力してください。'); return; }
      sourceParam = 'url';
      sourceValue = url;
      isValid = true;
    } else if (inputType === 'pdfUrl') {
      if (!pdfUrl) { setError('PDFのURLを入力してください。'); return; }
      try { new URL(pdfUrl); } catch (_) { setError('有効なPDF URLを入力してください。'); return; }
      sourceParam = 'pdf_url';
      sourceValue = pdfUrl;
      isValid = true;
    } else if (inputType === 'pdfUpload') {
      if (!pdfFile) { setError('PDFファイルをアップロードしてください。'); return; }
      if (isUploadingPdf) { setError('PDFテキスト抽出中です。しばらくお待ちください。'); return; }
      if (!pdfUploadText) { setError('PDFからのテキスト抽出に失敗しました。別のファイルで試すか、他の入力方法を選択してください。'); return; }
      sourceParam = 'text_input';
      sourceValue = pdfUploadText;
      isValid = true;
    } else if (inputType === 'textInput') {
      if (!textInput) { setError('テキストを入力してください。'); return; }
      sourceParam = 'text_input';
      sourceValue = textInput;
      isValid = true;
    }

    if (!isValid) return;

    eventSourceRef.current?.close();
    setLoading(true);
    setError(null);
    setResult(null);
    setProgressMessages([]);

    const baseUrl = `http://localhost:8000/api/v1/convert_stream`;
    const queryParams = new URLSearchParams({
        [sourceParam]: sourceValue,
        tts: ttsService,
        gemini_model: geminiModel,
    });

    if (ttsService === 'aivis' && aivisSpeakerId) {
        queryParams.set('speaker', aivisSpeakerId);
    } else if (ttsService === 'openai' && openaiVoice) {
        queryParams.set('speaker', openaiVoice);
    }

    const apiUrl = `${baseUrl}?${queryParams.toString()}`;
    console.log("Calling API:", apiUrl);

    const es = new EventSource(apiUrl, { withCredentials: false });
    eventSourceRef.current = es;

    let messageIdCounter = 0;

    es.onopen = () => {
      console.log("SSE connection opened");
    };

    es.onmessage = (event) => {
      try {
        const parsedEvent = JSON.parse(event.data);
        console.log("SSE message received:", parsedEvent);

        if (parsedEvent.event === 'status') {
          const data = parsedEvent.data;
          setProgressMessages((prev) => [...prev, { ...data, id: messageIdCounter++ }]);
        } else if (parsedEvent.event === 'complete') {
          const data: ConversionResult = parsedEvent.data;
          setResult(data);
          if (inputType === 'youtube') {
              updateHistory(url);
          }
          setLoading(false);
          es.close();
          eventSourceRef.current = null;
        } else if (parsedEvent.event === 'error') {
          const data = parsedEvent.data;
          setError(`エラー (${data.step}): ${data.message}`);
          setLoading(false);
          es.close();
          eventSourceRef.current = null;
        }
      } catch (err) {
        console.error("Failed to parse SSE event or handle message:", event.data, err);
        setError('サーバーからの情報の処理中にエラーが発生しました。');
        setLoading(false);
        es.close();
        eventSourceRef.current = null;
      }
    };

    es.onerror = (err) => {
      console.error("SSE error:", err);
      setError('サーバーとの接続エラーが発生しました。再試行してください。');
      setLoading(false);
      es.close();
      eventSourceRef.current = null;
    };
  };

  const handleDownload = () => {
    if (!result || !result.audio || !result.tts_usage) return;

    try {
      const byteCharacters = atob(result.audio);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      
      let mimeType = 'audio/mpeg';
      let fileExtension = 'mp3';
      
      if (result.tts_usage.model?.toLowerCase().includes('aivis')) {
          mimeType = 'audio/wav';
          fileExtension = 'wav';
      }
      
      console.log(`Creating Blob with type: ${mimeType}`);
      const blob = new Blob([byteArray], { type: mimeType });
      const audioUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = audioUrl;
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      link.download = `podcast_${timestamp}.${fileExtension}`;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(audioUrl);
      console.log(`Download initiated as ${link.download}`);

    } catch (e) {
      console.error("Failed to initiate audio download:", e);
      setError("音声ファイルのダウンロードに失敗しました。");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Content to Podcast Converter</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">入力ソースを選択</Label>
              <RadioGroup defaultValue="youtube" value={inputType} onValueChange={(value) => setInputType(value as any)} className="grid grid-cols-2 gap-2 md:grid-cols-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="youtube" id="type-youtube" />
                  <Label htmlFor="type-youtube" className="flex items-center gap-1"><Youtube size={16} /> YouTube URL</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pdfUrl" id="type-pdfurl" />
                  <Label htmlFor="type-pdfurl" className="flex items-center gap-1"><LinkIcon size={16} /> PDF URL</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pdfUpload" id="type-pdfupload" />
                  <Label htmlFor="type-pdfupload" className="flex items-center gap-1"><Upload size={16} /> PDF Upload</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="textInput" id="type-text" />
                  <Label htmlFor="type-text" className="flex items-center gap-1"><Text size={16} /> Text Input</Label>
                </div>
              </RadioGroup>
            </div>

            {inputType === 'youtube' && (
              <div className="space-y-1">
                <Label htmlFor="youtube-url" className="text-sm font-medium">
                  YouTube Video URL
                </Label>
                <Input
                  id="youtube-url"
                  type="url"
                  list="url-history"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="text-sm"
                />
                <datalist id="url-history">
                  {urlHistory.map((item, index) => (
                    <option key={index} value={item} />
                  ))}
                </datalist>
              </div>
            )}

            {inputType === 'pdfUrl' && (
              <div className="space-y-1">
                <Label htmlFor="pdf-url" className="text-sm font-medium">
                  PDF URL
                </Label>
                <Input
                  id="pdf-url"
                  type="url"
                  placeholder="https://example.com/document.pdf"
                  value={pdfUrl}
                  onChange={(e) => setPdfUrl(e.target.value)}
                  className="text-sm"
                />
              </div>
            )}

            {inputType === 'pdfUpload' && (
              <div className="space-y-1">
                <Label htmlFor="pdf-file" className="text-sm font-medium">
                  PDF ファイルを選択
                </Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="pdf-file"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    disabled={isUploadingPdf}
                    className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 flex-grow"
                  />
                  {isUploadingPdf && <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />} 
                </div>
                 {pdfFile && !isUploadingPdf && pdfUploadText && (
                    <p className="text-xs text-green-600 flex items-center gap-1">
                        <FileText size={12} /> {pdfFile.name} のテキスト抽出完了！
                    </p>
                 )} 
                 {pdfFile && !isUploadingPdf && !pdfUploadText && error && (
                     <p className="text-xs text-red-600">
                          テキスト抽出失敗。
                      </p>
                 )} 
              </div>
            )}

            {inputType === 'textInput' && (
              <div className="space-y-1">
                <Label htmlFor="text-input" className="text-sm font-medium">
                  テキスト入力
                </Label>
                <Textarea
                  id="text-input"
                  placeholder="ここにテキストを入力..."
                  value={textInput}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextInput(e.target.value)}
                  className="text-sm min-h-[100px]"
                />
              </div>
            )}

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                  <Label className="text-sm font-medium">Geminiモデル選択</Label>
                  <RadioGroup defaultValue="gemini-2.0-flash" value={geminiModel} onValueChange={setGeminiModel} className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                          <RadioGroupItem value="gemini-2.0-flash" id="gemini-flash" />
                          <Label htmlFor="gemini-flash">Gemini 2.0 Flash (高速)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                          <RadioGroupItem value="gemini-2.5-pro-preview-03-25" id="gemini-pro" />
                          <Label htmlFor="gemini-pro">Gemini 2.5 Pro (高品質)</Label>
                      </div>
                  </RadioGroup>
              </div>

              <div className="space-y-2">
                  <Label className="text-sm font-medium">TTSサービス選択</Label>
                  <RadioGroup defaultValue="openai" value={ttsService} onValueChange={setTtsService} className="flex space-x-4">
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="openai" id="openai" />
                        <Label htmlFor="openai">OpenAI TTS (クラウド)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="aivis" id="aivis" />
                        <Label htmlFor="aivis">Aivis Speech (ローカル)</Label>
                    </div>
                  </RadioGroup>
              </div>
            </div>

            {(ttsService === 'openai' || ttsService === 'aivis') && <Separator />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ttsService === 'openai' && (
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">OpenAI 話者選択</Label>
                        <RadioGroup defaultValue="alloy" value={openaiVoice} onValueChange={setOpenaiVoice} className="grid grid-cols-3 gap-2 md:grid-cols-6">
                            {openaiVoices.map((voice) => (
                                <div key={voice} className="flex items-center space-x-2">
                                    <RadioGroupItem value={voice} id={`openai-${voice}`} />
                                    <Label htmlFor={`openai-${voice}`} className="capitalize">{voice}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                )}

                {ttsService === 'aivis' && (
                    <div className="space-y-1">
                        <Label htmlFor="aivis-speaker-select" className="text-sm font-medium">Aivis 話者選択</Label>
                        <Select value={aivisSpeakerId} onValueChange={setAivisSpeakerId}>
                          <SelectTrigger id="aivis-speaker-select" className="text-sm">
                            <SelectValue placeholder="話者を選択..." />
                          </SelectTrigger>
                          <SelectContent>
                            {aivisSpeakers.map((speaker) => (
                              <SelectItem key={speaker.id} value={speaker.id} className="text-sm">
                                {speaker.name} ({speaker.id})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                    </div>
                )}
            </div>

            <Separator />
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading || isUploadingPdf || 
                  (inputType === 'pdfUpload' && !pdfUploadText) ||
                  (inputType === 'youtube' && !url) ||
                  (inputType === 'pdfUrl' && !pdfUrl) ||
                  (inputType === 'textInput' && !textInput)
              }
            >
              {loading ? '変換中...' : 'Podcastに変換'}
            </Button>
          </form>

          {loading && (
            <div className="mt-4 space-y-2">
              <div className="flex justify-center items-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
              <div className="space-y-1 text-sm text-center text-muted-foreground">
                {progressMessages.map((msg) => (
                    <p key={msg.id}>{msg.icon} {msg.message}</p>
                ))}
              </div>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>変換結果</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                    <Label className="text-sm font-medium">生成された音声</Label>
                    <AudioPlayer audioData={result.audio} />
                </div>
                <Separator />
                <div>
                    <Label className="text-sm font-medium">最適化されたテキスト</Label>
                    <Textarea value={result.text} readOnly className="mt-1 w-full h-32 text-xs bg-muted" />
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {result.gemini_usage && (
                         <div className="space-y-1 p-3 bg-muted rounded-md">
                            <p className="font-medium flex items-center gap-1"><BrainCircuit size={14}/> Gemini Usage ({result.gemini_usage.model})</p>
                            <p>Input Tokens: {result.gemini_usage.input_tokens}</p>
                            <p>Output Tokens: {result.gemini_usage.output_tokens}</p>
                            <p>Estimated Cost: {formatCost(result.gemini_usage.cost_usd)}</p>
                        </div>
                    )}
                    {result.tts_usage && (
                        <div className="space-y-1 p-3 bg-muted rounded-md">
                            <p className="font-medium flex items-center gap-1"><Coins size={14}/> TTS Usage ({result.tts_usage.model})</p>
                            <p>Characters Processed: {result.tts_usage.processed_characters} / {result.tts_usage.characters}</p>
                            <p>Estimated Cost: {formatCost(result.tts_usage.cost_usd)}</p>
                        </div>
                    )}
                </div>
                 {result.gemini_usage && result.tts_usage && (
                     <div className="text-right font-semibold text-sm">
                         Total Estimated Cost: {formatCost((result.gemini_usage?.cost_usd ?? 0) + (result.tts_usage?.cost_usd ?? 0))}
                     </div>
                 )}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleDownload} variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download MP3
                </Button>
              </CardFooter>
            </Card>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
