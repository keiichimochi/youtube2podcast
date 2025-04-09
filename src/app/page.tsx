'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Loader2, AlertCircle, Download, Coins, BrainCircuit } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

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

export default function Home() {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [urlHistory, setUrlHistory] = useState<string[]>([]);
  const [progressMessages, setProgressMessages] = useState<ProgressMessage[]>([]);
  const eventSourceRef = useRef<EventSource | null>(null);
  const [ttsService, setTtsService] = useState<string>('openai');
  const [aivisSpeakerId, setAivisSpeakerId] = useState<string>('488039072');
  const [openaiVoice, setOpenaiVoice] = useState<string>('alloy');
  const openaiVoices = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];
  const [geminiModel, setGeminiModel] = useState('gemini-2.0-flash');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return;
    
    eventSourceRef.current?.close();
    
    setLoading(true);
    setError(null);
    setResult(null);
    setProgressMessages([]);

    let apiUrl = `http://localhost:8000/api/v1/convert_stream?url=${encodeURIComponent(url)}&tts=${ttsService}&gemini_model=${encodeURIComponent(geminiModel)}`;
    if (ttsService === 'aivis' && aivisSpeakerId) {
        apiUrl += `&speaker=${encodeURIComponent(aivisSpeakerId)}`;
    } else if (ttsService === 'openai' && openaiVoice) {
        apiUrl += `&speaker=${encodeURIComponent(openaiVoice)}`;
    }

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
          updateHistory(url);
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
    if (!result || !result.audio) return;

    try {
      const byteCharacters = atob(result.audio);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      
      const blob = new Blob([byteArray], { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = audioUrl;
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      link.download = `podcast_${timestamp}.mp3`; 
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(audioUrl);
    } catch (e) {
      console.error("Failed to initiate audio download:", e);
      setError("音声ファイルのダウンロードに失敗しました。");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">YouTube to Podcast Converter</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="url" className="text-sm font-medium">
                YouTube Video URL
              </label>
              <Input
                id="url"
                type="url"
                list="url-history"
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                required
                className="text-sm"
              />
              <datalist id="url-history">
                {urlHistory.map((item, index) => (
                  <option key={index} value={item} />
                ))}
              </datalist>
            </div>
            
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

            {ttsService === 'openai' && (
                 <div className="space-y-2">
                    <Label className="text-sm font-medium">OpenAI 話者選択</Label>
                    <RadioGroup 
                        defaultValue="alloy" 
                        value={openaiVoice} 
                        onValueChange={setOpenaiVoice} 
                        className="grid grid-cols-3 gap-2 md:grid-cols-6"
                    >
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
                    <Label htmlFor="aivis-speaker" className="text-sm font-medium">
                        Aivis 話者ID (例: 488039072 = コロ助)
                    </Label>
                    <Input
                        id="aivis-speaker"
                        type="number"
                        placeholder="話者IDを入力 (例: 488039072)"
                        value={aivisSpeakerId}
                        onChange={(e) => setAivisSpeakerId(e.target.value)}
                        className="text-sm"
                    />
                    <p className="text-xs text-muted-foreground">
                        利用可能なIDは <a href="https://github.com/your-repo/youtube2podcast/blob/main/backend/aivis.md#利用可能な話者id-speaker-ids" target="_blank" rel="noopener noreferrer" className="underline">aivis.md</a> を参照してください。
                    </p>
                </div>
            )}
            
            <Button type="submit" className="w-full" disabled={loading || !url}>
              {loading ? '変換中...' : 'Podcastに変換'}
            </Button>
          </form>

          {loading && (
            <div className="mt-4 space-y-2">
              <div className="flex justify-center items-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
              <Card className="p-4 bg-muted/40">
                <ul className="space-y-2">
                  {progressMessages.map((msg) => (
                    <li key={msg.id} className="flex items-center text-sm">
                      <span className="mr-2 text-lg">{msg.icon}</span>
                      <span>{msg.message}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}

          {error && !loading && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>エラー</AlertTitle>
              <AlertDescription>
                {error} 
              </AlertDescription>
            </Alert>
          )}

          {result && (
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Podcast原稿 (日本語)</h3>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-sm whitespace-pre-wrap h-60 overflow-y-auto">
                  {result.text}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">生成された音声</h3>
                  <Button onClick={handleDownload} variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    ダウンロード
                  </Button>
                </div>
                <AudioPlayer audioData={result.audio} />
              </div>

              <Separator />

              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">利用状況 (概算)</h4>
                {result.gemini_usage && (
                  <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <div className="flex items-center space-x-2">
                      <BrainCircuit className="h-5 w-5 text-blue-500" />
                      <span>Gemini ({result.gemini_usage.model.includes('1.5-pro') ? '1.5 Pro' : result.gemini_usage.model}):</span> 
                    </div>
                    <div className="text-right">
                      <div>Tokens: {result.gemini_usage.input_tokens} (入力) + {result.gemini_usage.output_tokens} (出力)</div>
                      <div>費用: {formatCost(result.gemini_usage.cost_usd)}</div>
                    </div>
                  </div>
                )}
                {result.tts_usage && (
                  <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <div className="flex items-center space-x-2">
                      <Coins className="h-5 w-5 text-green-500" />
                      <span>TTS ({result.tts_usage.model}):</span> 
                    </div>
                    <div className="text-right">
                      <div>文字数: {result.tts_usage.characters.toLocaleString()}</div>
                      <div>費用: {formatCost(result.tts_usage.cost_usd)}</div>
                    </div>
                  </div>
                )}
                {(result.gemini_usage || result.tts_usage) && (
                  <div className="flex items-center justify-between p-2 font-semibold border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                    <span>合計費用 (USD):</span>
                    <span>{formatCost((result.gemini_usage?.cost_usd ?? 0) + (result.tts_usage?.cost_usd ?? 0))}</span>
                  </div>
                )}
                <p className="text-xs text-center text-gray-500">※表示されている費用は概算であり、実際の請求額とは異なる場合があります。</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
