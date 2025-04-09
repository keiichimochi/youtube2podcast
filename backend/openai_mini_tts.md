size:
  tokens: 44147
  totalTokens: 44152
  characters: 220760
  lines: 4911
tree:
  .gitignore: null
  README.md: null
  eslint.config.js: null
  index.html: null
  package-lock.json: null
  package.json: null
  public:
    vite.svg: null
  src:
    App.css: null
    App.jsx: null
    assets:
      react.svg: null
    audioPlayer.css: null
    codeWindow.css: null
    index.css: null
    main.jsx: null
  tailwind.config.js: null
  vite.config.js: null
files:
  /.gitignore:
    type: content
    content: |
      # Logs
      logs
      *.log
      npm-debug.log*
      yarn-debug.log*
      yarn-error.log*
      pnpm-debug.log*
      lerna-debug.log*

      node_modules
      dist
      dist-ssr
      *.local

      # Editor directories and files
      .vscode/*
      !.vscode/extensions.json
      .idea
      .DS_Store
      *.suo
      *.ntvs*
      *.njsproj
      *.sln
      *.sw?
    hash: fe718e7babb14f3cbad2d97f08889b9ce5215ed3fe0e43b2b8cfbfb3b9b844e8
    size: 253
  /README.md:
    type: content
    content: >+
      # lagna360 - GPT-4o-mini-tts Demo


      A mobile-friendly, dark-themed web application to showcase OpenAI's
      GPT-4o-mini-tts API. This app allows users to test various text-to-speech
      features with a modern, gaming-inspired UI.


      ## Features


      - 鹿 Choose from all 11 OpenAI TTS voices (alloy, ash, ballad, coral,
      echo, fable, onyx, nova, sage, shimmer, verse)

      - 式 Modern, gaming-inspired dark UI with responsive design

      - 寺�� Adjust speech speed from 0.25x to 4.0x

      - 統 Input custom text (up to 4096 characters) with character count
      tracking

      - 識 Add custom voice instructions to personalize the output

      - 耳 10 preset "personalities" with example scripts and instructions

      - 白 Securely use your own OpenAI API key (stored only in browser's
      localStorage)

      - 踏 Download and share functionality for generated audio

      - 捗 Source code display with JavaScript, Python, and cURL examples

      - 投 Complete API request and response visualization


      ## Getting Started


      ### Prerequisites


      - Node.js (v16 or higher)

      - npm or yarn

      - An OpenAI API key with access to the GPT-4o-mini-tts model


      ### Installation


      1. Clone this repository
         ```bash
         git clone https://github.com/lagna360/gpt-4o-mini-tts.git
         cd gpt-4o-mini-tts
         ```

      2. Install dependencies
         ```bash
         npm install
         # or
         yarn
         ```

      3. Start the development server
         ```bash
         npm run dev
         # or
         yarn dev
         ```

      4. Open your browser and navigate to `http://localhost:5173`


      ## Usage


      1. Enter your OpenAI API key (it will be stored only in your browser's
      local storage)

      2. Select a voice from the available options

      3. Choose a pre-built vibe or customize your own

      4. Enter text in the script area

      5. Add custom instructions if desired

      6. Adjust the speech speed

      7. Click "Generate Speech" to create the audio

      8. Listen, download, or share the generated audio


      ## API Reference


      This application uses the OpenAI API's text-to-speech endpoint:


      ```

      POST https://api.openai.com/v1/audio/speech

      ```


      For more information, visit the [OpenAI API
      documentation](https://platform.openai.com/docs/api-reference).


      ## Technologies Used


      - React

      - Vite

      - Tailwind CSS

      - OpenAI API


      ## License


      MIT

    hash: b6c7c39d0d9e4a7f145cf8a0e60e320b5d78e0ca1be7a615dafcd5b586b27f3b
    size: 2170
  /eslint.config.js:
    type: content
    content: |
      import js from '@eslint/js'
      import globals from 'globals'
      import reactHooks from 'eslint-plugin-react-hooks'
      import reactRefresh from 'eslint-plugin-react-refresh'

      export default [
        { ignores: ['dist'] },
        {
          files: ['**/*.{js,jsx}'],
          languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
              ecmaVersion: 'latest',
              ecmaFeatures: { jsx: true },
              sourceType: 'module',
            },
          },
          plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
          },
          rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'react-refresh/only-export-components': [
              'warn',
              { allowConstantExport: true },
            ],
          },
        },
      ]
    hash: 6ea89b7f008172a670aaa8540b110fe2b83ae0b951ac0a748358f2e909867ec6
    size: 844
  /index.html:
    type: content
    content: >
      <!doctype html>

      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a855f7'%3E%3Cpath d='M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z'/%3E%3Cpath d='M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z'/%3E%3C/svg%3E" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="lagna360 - Test the gpt-40-mini-tts API with different voices and customizations" />
          <meta name="theme-color" content="#0f172a" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <title>lagna360 | gpt-40-mini-tts TTS Demo</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>
    hash: 0c39eda94a82c25abef8dae54b167c15c8a9940d5e6e60e7d025d624e4d9eeb4
    size: 1397
  /package-lock.json:
    type: content
    content: >
      {
        "name": "gpt-4o-mini-tts",
        "version": "0.0.0",
        "lockfileVersion": 3,
        "requires": true,
        "packages": {
          "": {
            "name": "gpt-4o-mini-tts",
            "version": "0.0.0",
            "dependencies": {
              "@tailwindcss/vite": "^4.0.15",
              "react": "^19.0.0",
              "react-dom": "^19.0.0",
              "react-syntax-highlighter": "^15.6.1",
              "tailwindcss": "^4.0.15"
            },
            "devDependencies": {
              "@eslint/js": "^9.21.0",
              "@types/react": "^19.0.10",
              "@types/react-dom": "^19.0.4",
              "@vitejs/plugin-react": "^4.3.4",
              "eslint": "^9.21.0",
              "eslint-plugin-react-hooks": "^5.1.0",
              "eslint-plugin-react-refresh": "^0.4.19",
              "globals": "^15.15.0",
              "vite": "^6.2.0"
            }
          },
          "node_modules/@ampproject/remapping": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
            "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
            "dev": true,
            "license": "Apache-2.0",
            "dependencies": {
              "@jridgewell/gen-mapping": "^0.3.5",
              "@jridgewell/trace-mapping": "^0.3.24"
            },
            "engines": {
              "node": ">=6.0.0"
            }
          },
          "node_modules/@babel/code-frame": {
            "version": "7.26.2",
            "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
            "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/helper-validator-identifier": "^7.25.9",
              "js-tokens": "^4.0.0",
              "picocolors": "^1.0.0"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/compat-data": {
            "version": "7.26.8",
            "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.8.tgz",
            "integrity": "sha512-oH5UPLMWR3L2wEFLnFJ1TZXqHufiTKAiLfqw5zkhS4dKXLJ10yVztfil/twG8EDTA4F/tvVNw9nOl4ZMslB8rQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/core": {
            "version": "7.26.10",
            "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.10.tgz",
            "integrity": "sha512-vMqyb7XCDMPvJFFOaT9kxtiRh42GwlZEg1/uIgtZshS5a/8OaduUfCi7kynKgc3Tw/6Uo2D+db9qBttghhmxwQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@ampproject/remapping": "^2.2.0",
              "@babel/code-frame": "^7.26.2",
              "@babel/generator": "^7.26.10",
              "@babel/helper-compilation-targets": "^7.26.5",
              "@babel/helper-module-transforms": "^7.26.0",
              "@babel/helpers": "^7.26.10",
              "@babel/parser": "^7.26.10",
              "@babel/template": "^7.26.9",
              "@babel/traverse": "^7.26.10",
              "@babel/types": "^7.26.10",
              "convert-source-map": "^2.0.0",
              "debug": "^4.1.0",
              "gensync": "^1.0.0-beta.2",
              "json5": "^2.2.3",
              "semver": "^6.3.1"
            },
            "engines": {
              "node": ">=6.9.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/babel"
            }
          },
          "node_modules/@babel/generator": {
            "version": "7.26.10",
            "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.10.tgz",
            "integrity": "sha512-rRHT8siFIXQrAYOYqZQVsAr8vJ+cBNqcVAY6m5V8/4QqzaPl+zDBe6cLEPRDuNOUf3ww8RfJVlOyQMoSI+5Ang==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/parser": "^7.26.10",
              "@babel/types": "^7.26.10",
              "@jridgewell/gen-mapping": "^0.3.5",
              "@jridgewell/trace-mapping": "^0.3.25",
              "jsesc": "^3.0.2"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/helper-compilation-targets": {
            "version": "7.26.5",
            "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.26.5.tgz",
            "integrity": "sha512-IXuyn5EkouFJscIDuFF5EsiSolseme1s0CZB+QxVugqJLYmKdxI1VfIBOst0SUu4rnk2Z7kqTwmoO1lp3HIfnA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/compat-data": "^7.26.5",
              "@babel/helper-validator-option": "^7.25.9",
              "browserslist": "^4.24.0",
              "lru-cache": "^5.1.1",
              "semver": "^6.3.1"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/helper-module-imports": {
            "version": "7.25.9",
            "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
            "integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/traverse": "^7.25.9",
              "@babel/types": "^7.25.9"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/helper-module-transforms": {
            "version": "7.26.0",
            "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",
            "integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/helper-module-imports": "^7.25.9",
              "@babel/helper-validator-identifier": "^7.25.9",
              "@babel/traverse": "^7.25.9"
            },
            "engines": {
              "node": ">=6.9.0"
            },
            "peerDependencies": {
              "@babel/core": "^7.0.0"
            }
          },
          "node_modules/@babel/helper-plugin-utils": {
            "version": "7.26.5",
            "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz",
            "integrity": "sha512-RS+jZcRdZdRFzMyr+wcsaqOmld1/EqTghfaBGQQd/WnRdzdlvSZ//kF7U8VQTxf1ynZ4cjUcYgjVGx13ewNPMg==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/helper-string-parser": {
            "version": "7.25.9",
            "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
            "integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/helper-validator-identifier": {
            "version": "7.25.9",
            "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
            "integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/helper-validator-option": {
            "version": "7.25.9",
            "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",
            "integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/helpers": {
            "version": "7.26.10",
            "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.10.tgz",
            "integrity": "sha512-UPYc3SauzZ3JGgj87GgZ89JVdC5dj0AoetR5Bw6wj4niittNyFh6+eOGonYvJ1ao6B8lEa3Q3klS7ADZ53bc5g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/template": "^7.26.9",
              "@babel/types": "^7.26.10"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/parser": {
            "version": "7.26.10",
            "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.10.tgz",
            "integrity": "sha512-6aQR2zGE/QFi8JpDLjUZEPYOs7+mhKXm86VaKFiLP35JQwQb6bwUE+XbvkH0EptsYhbNBSUGaUBLKqxH1xSgsA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/types": "^7.26.10"
            },
            "bin": {
              "parser": "bin/babel-parser.js"
            },
            "engines": {
              "node": ">=6.0.0"
            }
          },
          "node_modules/@babel/plugin-transform-react-jsx-self": {
            "version": "7.25.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.9.tgz",
            "integrity": "sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/helper-plugin-utils": "^7.25.9"
            },
            "engines": {
              "node": ">=6.9.0"
            },
            "peerDependencies": {
              "@babel/core": "^7.0.0-0"
            }
          },
          "node_modules/@babel/plugin-transform-react-jsx-source": {
            "version": "7.25.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.9.tgz",
            "integrity": "sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/helper-plugin-utils": "^7.25.9"
            },
            "engines": {
              "node": ">=6.9.0"
            },
            "peerDependencies": {
              "@babel/core": "^7.0.0-0"
            }
          },
          "node_modules/@babel/runtime": {
            "version": "7.26.10",
            "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.26.10.tgz",
            "integrity": "sha512-2WJMeRQPHKSPemqk/awGrAiuFfzBmOIPXKizAsVhWH9YJqLZ0H+HS4c8loHGgW6utJ3E/ejXQUsiGaQy2NZ9Fw==",
            "license": "MIT",
            "dependencies": {
              "regenerator-runtime": "^0.14.0"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/template": {
            "version": "7.26.9",
            "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.26.9.tgz",
            "integrity": "sha512-qyRplbeIpNZhmzOysF/wFMuP9sctmh2cFzRAZOn1YapxBsE1i9bJIY586R/WBLfLcmcBlM8ROBiQURnnNy+zfA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/code-frame": "^7.26.2",
              "@babel/parser": "^7.26.9",
              "@babel/types": "^7.26.9"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/traverse": {
            "version": "7.26.10",
            "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.10.tgz",
            "integrity": "sha512-k8NuDrxr0WrPH5Aupqb2LCVURP/S0vBEn5mK6iH+GIYob66U5EtoZvcdudR2jQ4cmTwhEwW1DLB+Yyas9zjF6A==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/code-frame": "^7.26.2",
              "@babel/generator": "^7.26.10",
              "@babel/parser": "^7.26.10",
              "@babel/template": "^7.26.9",
              "@babel/types": "^7.26.10",
              "debug": "^4.3.1",
              "globals": "^11.1.0"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@babel/traverse/node_modules/globals": {
            "version": "11.12.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
            "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=4"
            }
          },
          "node_modules/@babel/types": {
            "version": "7.26.10",
            "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.10.tgz",
            "integrity": "sha512-emqcG3vHrpxUKTrxcblR36dcrcoRDvKmnL/dCL6ZsHaShW80qxCAcNhzQZrpeM765VzEos+xOi4s+r4IXzTwdQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/helper-string-parser": "^7.25.9",
              "@babel/helper-validator-identifier": "^7.25.9"
            },
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/@esbuild/aix-ppc64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.1.tgz",
            "integrity": "sha512-kfYGy8IdzTGy+z0vFGvExZtxkFlA4zAxgKEahG9KE1ScBjpQnFsNOX8KTU5ojNru5ed5CVoJYXFtoxaq5nFbjQ==",
            "cpu": [
              "ppc64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "aix"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/android-arm": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.1.tgz",
            "integrity": "sha512-dp+MshLYux6j/JjdqVLnMglQlFu+MuVeNrmT5nk6q07wNhCdSnB7QZj+7G8VMUGh1q+vj2Bq8kRsuyA00I/k+Q==",
            "cpu": [
              "arm"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "android"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/android-arm64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.1.tgz",
            "integrity": "sha512-50tM0zCJW5kGqgG7fQ7IHvQOcAn9TKiVRuQ/lN0xR+T2lzEFvAi1ZcS8DiksFcEpf1t/GYOeOfCAgDHFpkiSmA==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "android"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/android-x64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.1.tgz",
            "integrity": "sha512-GCj6WfUtNldqUzYkN/ITtlhwQqGWu9S45vUXs7EIYf+7rCiiqH9bCloatO9VhxsL0Pji+PF4Lz2XXCES+Q8hDw==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "android"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/darwin-arm64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.1.tgz",
            "integrity": "sha512-5hEZKPf+nQjYoSr/elb62U19/l1mZDdqidGfmFutVUjjUZrOazAtwK+Kr+3y0C/oeJfLlxo9fXb1w7L+P7E4FQ==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "darwin"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/darwin-x64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.1.tgz",
            "integrity": "sha512-hxVnwL2Dqs3fM1IWq8Iezh0cX7ZGdVhbTfnOy5uURtao5OIVCEyj9xIzemDi7sRvKsuSdtCAhMKarxqtlyVyfA==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "darwin"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/freebsd-arm64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.1.tgz",
            "integrity": "sha512-1MrCZs0fZa2g8E+FUo2ipw6jw5qqQiH+tERoS5fAfKnRx6NXH31tXBKI3VpmLijLH6yriMZsxJtaXUyFt/8Y4A==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "freebsd"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/freebsd-x64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.1.tgz",
            "integrity": "sha512-0IZWLiTyz7nm0xuIs0q1Y3QWJC52R8aSXxe40VUxm6BB1RNmkODtW6LHvWRrGiICulcX7ZvyH6h5fqdLu4gkww==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "freebsd"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-arm": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.1.tgz",
            "integrity": "sha512-NdKOhS4u7JhDKw9G3cY6sWqFcnLITn6SqivVArbzIaf3cemShqfLGHYMx8Xlm/lBit3/5d7kXvriTUGa5YViuQ==",
            "cpu": [
              "arm"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-arm64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.1.tgz",
            "integrity": "sha512-jaN3dHi0/DDPelk0nLcXRm1q7DNJpjXy7yWaWvbfkPvI+7XNSc/lDOnCLN7gzsyzgu6qSAmgSvP9oXAhP973uQ==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-ia32": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.1.tgz",
            "integrity": "sha512-OJykPaF4v8JidKNGz8c/q1lBO44sQNUQtq1KktJXdBLn1hPod5rE/Hko5ugKKZd+D2+o1a9MFGUEIUwO2YfgkQ==",
            "cpu": [
              "ia32"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-loong64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.1.tgz",
            "integrity": "sha512-nGfornQj4dzcq5Vp835oM/o21UMlXzn79KobKlcs3Wz9smwiifknLy4xDCLUU0BWp7b/houtdrgUz7nOGnfIYg==",
            "cpu": [
              "loong64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-mips64el": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.1.tgz",
            "integrity": "sha512-1osBbPEFYwIE5IVB/0g2X6i1qInZa1aIoj1TdL4AaAb55xIIgbg8Doq6a5BzYWgr+tEcDzYH67XVnTmUzL+nXg==",
            "cpu": [
              "mips64el"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-ppc64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.1.tgz",
            "integrity": "sha512-/6VBJOwUf3TdTvJZ82qF3tbLuWsscd7/1w+D9LH0W/SqUgM5/JJD0lrJ1fVIfZsqB6RFmLCe0Xz3fmZc3WtyVg==",
            "cpu": [
              "ppc64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-riscv64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.1.tgz",
            "integrity": "sha512-nSut/Mx5gnilhcq2yIMLMe3Wl4FK5wx/o0QuuCLMtmJn+WeWYoEGDN1ipcN72g1WHsnIbxGXd4i/MF0gTcuAjQ==",
            "cpu": [
              "riscv64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-s390x": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.1.tgz",
            "integrity": "sha512-cEECeLlJNfT8kZHqLarDBQso9a27o2Zd2AQ8USAEoGtejOrCYHNtKP8XQhMDJMtthdF4GBmjR2au3x1udADQQQ==",
            "cpu": [
              "s390x"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/linux-x64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.1.tgz",
            "integrity": "sha512-xbfUhu/gnvSEg+EGovRc+kjBAkrvtk38RlerAzQxvMzlB4fXpCFCeUAYzJvrnhFtdeyVCDANSjJvOvGYoeKzFA==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/netbsd-arm64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.1.tgz",
            "integrity": "sha512-O96poM2XGhLtpTh+s4+nP7YCCAfb4tJNRVZHfIE7dgmax+yMP2WgMd2OecBuaATHKTHsLWHQeuaxMRnCsH8+5g==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "netbsd"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/netbsd-x64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.1.tgz",
            "integrity": "sha512-X53z6uXip6KFXBQ+Krbx25XHV/NCbzryM6ehOAeAil7X7oa4XIq+394PWGnwaSQ2WRA0KI6PUO6hTO5zeF5ijA==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "netbsd"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/openbsd-arm64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.1.tgz",
            "integrity": "sha512-Na9T3szbXezdzM/Kfs3GcRQNjHzM6GzFBeU1/6IV/npKP5ORtp9zbQjvkDJ47s6BCgaAZnnnu/cY1x342+MvZg==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "openbsd"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/openbsd-x64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.1.tgz",
            "integrity": "sha512-T3H78X2h1tszfRSf+txbt5aOp/e7TAz3ptVKu9Oyir3IAOFPGV6O9c2naym5TOriy1l0nNf6a4X5UXRZSGX/dw==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "openbsd"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/sunos-x64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.1.tgz",
            "integrity": "sha512-2H3RUvcmULO7dIE5EWJH8eubZAI4xw54H1ilJnRNZdeo8dTADEZ21w6J22XBkXqGJbe0+wnNJtw3UXRoLJnFEg==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "sunos"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/win32-arm64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.1.tgz",
            "integrity": "sha512-GE7XvrdOzrb+yVKB9KsRMq+7a2U/K5Cf/8grVFRAGJmfADr/e/ODQ134RK2/eeHqYV5eQRFxb1hY7Nr15fv1NQ==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "win32"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/win32-ia32": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.1.tgz",
            "integrity": "sha512-uOxSJCIcavSiT6UnBhBzE8wy3n0hOkJsBOzy7HDAuTDE++1DJMRRVCPGisULScHL+a/ZwdXPpXD3IyFKjA7K8A==",
            "cpu": [
              "ia32"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "win32"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@esbuild/win32-x64": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.1.tgz",
            "integrity": "sha512-Y1EQdcfwMSeQN/ujR5VayLOJ1BHaK+ssyk0AEzPjC+t1lITgsnccPqFjb6V+LsTp/9Iov4ysfjxLaGJ9RPtkVg==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "win32"
            ],
            "engines": {
              "node": ">=18"
            }
          },
          "node_modules/@eslint-community/eslint-utils": {
            "version": "4.5.1",
            "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.5.1.tgz",
            "integrity": "sha512-soEIOALTfTK6EjmKMMoLugwaP0rzkad90iIWd1hMO9ARkSAyjfMfkRRhLvD5qH7vvM0Cg72pieUfR6yh6XxC4w==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "eslint-visitor-keys": "^3.4.3"
            },
            "engines": {
              "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            },
            "funding": {
              "url": "https://opencollective.com/eslint"
            },
            "peerDependencies": {
              "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
            }
          },
          "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
            "version": "3.4.3",
            "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
            "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
              "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            },
            "funding": {
              "url": "https://opencollective.com/eslint"
            }
          },
          "node_modules/@eslint-community/regexpp": {
            "version": "4.12.1",
            "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
            "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
            }
          },
          "node_modules/@eslint/config-array": {
            "version": "0.19.2",
            "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.19.2.tgz",
            "integrity": "sha512-GNKqxfHG2ySmJOBSHg7LxeUx4xpuCoFjacmlCoYWEbaPXLwvfIjixRI12xCQZeULksQb23uiA8F40w5TojpV7w==",
            "dev": true,
            "license": "Apache-2.0",
            "dependencies": {
              "@eslint/object-schema": "^2.1.6",
              "debug": "^4.3.1",
              "minimatch": "^3.1.2"
            },
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            }
          },
          "node_modules/@eslint/config-helpers": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.2.0.tgz",
            "integrity": "sha512-yJLLmLexii32mGrhW29qvU3QBVTu0GUmEf/J4XsBtVhp4JkIUFN/BjWqTF63yRvGApIDpZm5fa97LtYtINmfeQ==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            }
          },
          "node_modules/@eslint/core": {
            "version": "0.12.0",
            "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.12.0.tgz",
            "integrity": "sha512-cmrR6pytBuSMTaBweKoGMwu3EiHiEC+DoyupPmlZ0HxBJBtIxwe+j/E4XPIKNx+Q74c8lXKPwYawBf5glsTkHg==",
            "dev": true,
            "license": "Apache-2.0",
            "dependencies": {
              "@types/json-schema": "^7.0.15"
            },
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            }
          },
          "node_modules/@eslint/eslintrc": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.1.tgz",
            "integrity": "sha512-gtF186CXhIl1p4pJNGZw8Yc6RlshoePRvE0X91oPGb3vZ8pM3qOS9W9NGPat9LziaBV7XrJWGylNQXkGcnM3IQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "ajv": "^6.12.4",
              "debug": "^4.3.2",
              "espree": "^10.0.1",
              "globals": "^14.0.0",
              "ignore": "^5.2.0",
              "import-fresh": "^3.2.1",
              "js-yaml": "^4.1.0",
              "minimatch": "^3.1.2",
              "strip-json-comments": "^3.1.1"
            },
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            },
            "funding": {
              "url": "https://opencollective.com/eslint"
            }
          },
          "node_modules/@eslint/eslintrc/node_modules/globals": {
            "version": "14.0.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
            "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=18"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/@eslint/js": {
            "version": "9.23.0",
            "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.23.0.tgz",
            "integrity": "sha512-35MJ8vCPU0ZMxo7zfev2pypqTwWTofFZO6m4KAtdoFhRpLJUpHTZZ+KB3C7Hb1d7bULYwO4lJXGCi5Se+8OMbw==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            }
          },
          "node_modules/@eslint/object-schema": {
            "version": "2.1.6",
            "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.6.tgz",
            "integrity": "sha512-RBMg5FRL0I0gs51M/guSAj5/e14VQ4tpZnQNWwuDT66P14I43ItmPfIZRhO9fUVIPOAQXU47atlywZ/czoqFPA==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            }
          },
          "node_modules/@eslint/plugin-kit": {
            "version": "0.2.7",
            "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.2.7.tgz",
            "integrity": "sha512-JubJ5B2pJ4k4yGxaNLdbjrnk9d/iDz6/q8wOilpIowd6PJPgaxCuHBnBszq7Ce2TyMrywm5r4PnKm6V3iiZF+g==",
            "dev": true,
            "license": "Apache-2.0",
            "dependencies": {
              "@eslint/core": "^0.12.0",
              "levn": "^0.4.1"
            },
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            }
          },
          "node_modules/@humanfs/core": {
            "version": "0.19.1",
            "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
            "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
              "node": ">=18.18.0"
            }
          },
          "node_modules/@humanfs/node": {
            "version": "0.16.6",
            "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.6.tgz",
            "integrity": "sha512-YuI2ZHQL78Q5HbhDiBA1X4LmYdXCKCMQIfw0pw7piHJwyREFebJUvrQN4cMssyES6x+vfUbx1CIpaQUKYdQZOw==",
            "dev": true,
            "license": "Apache-2.0",
            "dependencies": {
              "@humanfs/core": "^0.19.1",
              "@humanwhocodes/retry": "^0.3.0"
            },
            "engines": {
              "node": ">=18.18.0"
            }
          },
          "node_modules/@humanfs/node/node_modules/@humanwhocodes/retry": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.3.1.tgz",
            "integrity": "sha512-JBxkERygn7Bv/GbN5Rv8Ul6LVknS+5Bp6RgDC/O8gEBU/yeH5Ui5C/OlWrTb6qct7LjjfT6Re2NxB0ln0yYybA==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
              "node": ">=18.18"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/nzakas"
            }
          },
          "node_modules/@humanwhocodes/module-importer": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
            "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
              "node": ">=12.22"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/nzakas"
            }
          },
          "node_modules/@humanwhocodes/retry": {
            "version": "0.4.2",
            "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.2.tgz",
            "integrity": "sha512-xeO57FpIu4p1Ri3Jq/EXq4ClRm86dVF2z/+kvFnyqVYRavTZmaFaUBbWCOuuTh0o/g7DSsk6kc2vrS4Vl5oPOQ==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
              "node": ">=18.18"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/nzakas"
            }
          },
          "node_modules/@jridgewell/gen-mapping": {
            "version": "0.3.8",
            "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz",
            "integrity": "sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@jridgewell/set-array": "^1.2.1",
              "@jridgewell/sourcemap-codec": "^1.4.10",
              "@jridgewell/trace-mapping": "^0.3.24"
            },
            "engines": {
              "node": ">=6.0.0"
            }
          },
          "node_modules/@jridgewell/resolve-uri": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
            "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6.0.0"
            }
          },
          "node_modules/@jridgewell/set-array": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
            "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6.0.0"
            }
          },
          "node_modules/@jridgewell/sourcemap-codec": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
            "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/@jridgewell/trace-mapping": {
            "version": "0.3.25",
            "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
            "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@jridgewell/resolve-uri": "^3.1.0",
              "@jridgewell/sourcemap-codec": "^1.4.14"
            }
          },
          "node_modules/@rollup/rollup-android-arm-eabi": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.36.0.tgz",
            "integrity": "sha512-jgrXjjcEwN6XpZXL0HUeOVGfjXhPyxAbbhD0BlXUB+abTOpbPiN5Wb3kOT7yb+uEtATNYF5x5gIfwutmuBA26w==",
            "cpu": [
              "arm"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "android"
            ]
          },
          "node_modules/@rollup/rollup-android-arm64": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.36.0.tgz",
            "integrity": "sha512-NyfuLvdPdNUfUNeYKUwPwKsE5SXa2J6bCt2LdB/N+AxShnkpiczi3tcLJrm5mA+eqpy0HmaIY9F6XCa32N5yzg==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "android"
            ]
          },
          "node_modules/@rollup/rollup-darwin-arm64": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.36.0.tgz",
            "integrity": "sha512-JQ1Jk5G4bGrD4pWJQzWsD8I1n1mgPXq33+/vP4sk8j/z/C2siRuxZtaUA7yMTf71TCZTZl/4e1bfzwUmFb3+rw==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "darwin"
            ]
          },
          "node_modules/@rollup/rollup-darwin-x64": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.36.0.tgz",
            "integrity": "sha512-6c6wMZa1lrtiRsbDziCmjE53YbTkxMYhhnWnSW8R/yqsM7a6mSJ3uAVT0t8Y/DGt7gxUWYuFM4bwWk9XCJrFKA==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "darwin"
            ]
          },
          "node_modules/@rollup/rollup-freebsd-arm64": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.36.0.tgz",
            "integrity": "sha512-KXVsijKeJXOl8QzXTsA+sHVDsFOmMCdBRgFmBb+mfEb/7geR7+C8ypAml4fquUt14ZyVXaw2o1FWhqAfOvA4sg==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "freebsd"
            ]
          },
          "node_modules/@rollup/rollup-freebsd-x64": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.36.0.tgz",
            "integrity": "sha512-dVeWq1ebbvByI+ndz4IJcD4a09RJgRYmLccwlQ8bPd4olz3Y213uf1iwvc7ZaxNn2ab7bjc08PrtBgMu6nb4pQ==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "freebsd"
            ]
          },
          "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.36.0.tgz",
            "integrity": "sha512-bvXVU42mOVcF4le6XSjscdXjqx8okv4n5vmwgzcmtvFdifQ5U4dXFYaCB87namDRKlUL9ybVtLQ9ztnawaSzvg==",
            "cpu": [
              "arm"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-arm-musleabihf": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.36.0.tgz",
            "integrity": "sha512-JFIQrDJYrxOnyDQGYkqnNBtjDwTgbasdbUiQvcU8JmGDfValfH1lNpng+4FWlhaVIR4KPkeddYjsVVbmJYvDcg==",
            "cpu": [
              "arm"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-arm64-gnu": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.36.0.tgz",
            "integrity": "sha512-KqjYVh3oM1bj//5X7k79PSCZ6CvaVzb7Qs7VMWS+SlWB5M8p3FqufLP9VNp4CazJ0CsPDLwVD9r3vX7Ci4J56A==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-arm64-musl": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.36.0.tgz",
            "integrity": "sha512-QiGnhScND+mAAtfHqeT+cB1S9yFnNQ/EwCg5yE3MzoaZZnIV0RV9O5alJAoJKX/sBONVKeZdMfO8QSaWEygMhw==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-loongarch64-gnu": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loongarch64-gnu/-/rollup-linux-loongarch64-gnu-4.36.0.tgz",
            "integrity": "sha512-1ZPyEDWF8phd4FQtTzMh8FQwqzvIjLsl6/84gzUxnMNFBtExBtpL51H67mV9xipuxl1AEAerRBgBwFNpkw8+Lg==",
            "cpu": [
              "loong64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.36.0.tgz",
            "integrity": "sha512-VMPMEIUpPFKpPI9GZMhJrtu8rxnp6mJR3ZzQPykq4xc2GmdHj3Q4cA+7avMyegXy4n1v+Qynr9fR88BmyO74tg==",
            "cpu": [
              "ppc64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-riscv64-gnu": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.36.0.tgz",
            "integrity": "sha512-ttE6ayb/kHwNRJGYLpuAvB7SMtOeQnVXEIpMtAvx3kepFQeowVED0n1K9nAdraHUPJ5hydEMxBpIR7o4nrm8uA==",
            "cpu": [
              "riscv64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-s390x-gnu": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.36.0.tgz",
            "integrity": "sha512-4a5gf2jpS0AIe7uBjxDeUMNcFmaRTbNv7NxI5xOCs4lhzsVyGR/0qBXduPnoWf6dGC365saTiwag8hP1imTgag==",
            "cpu": [
              "s390x"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-x64-gnu": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.36.0.tgz",
            "integrity": "sha512-5KtoW8UWmwFKQ96aQL3LlRXX16IMwyzMq/jSSVIIyAANiE1doaQsx/KRyhAvpHlPjPiSU/AYX/8m+lQ9VToxFQ==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-linux-x64-musl": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.36.0.tgz",
            "integrity": "sha512-sycrYZPrv2ag4OCvaN5js+f01eoZ2U+RmT5as8vhxiFz+kxwlHrsxOwKPSA8WyS+Wc6Epid9QeI/IkQ9NkgYyQ==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ]
          },
          "node_modules/@rollup/rollup-win32-arm64-msvc": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.36.0.tgz",
            "integrity": "sha512-qbqt4N7tokFwwSVlWDsjfoHgviS3n/vZ8LK0h1uLG9TYIRuUTJC88E1xb3LM2iqZ/WTqNQjYrtmtGmrmmawB6A==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "win32"
            ]
          },
          "node_modules/@rollup/rollup-win32-ia32-msvc": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.36.0.tgz",
            "integrity": "sha512-t+RY0JuRamIocMuQcfwYSOkmdX9dtkr1PbhKW42AMvaDQa+jOdpUYysroTF/nuPpAaQMWp7ye+ndlmmthieJrQ==",
            "cpu": [
              "ia32"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "win32"
            ]
          },
          "node_modules/@rollup/rollup-win32-x64-msvc": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.36.0.tgz",
            "integrity": "sha512-aRXd7tRZkWLqGbChgcMMDEHjOKudo1kChb1Jt1IfR8cY/KIpgNviLeJy5FUb9IpSuQj8dU2fAYNMPW/hLKOSTw==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "win32"
            ]
          },
          "node_modules/@tailwindcss/node": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.0.15.tgz",
            "integrity": "sha512-IODaJjNmiasfZX3IoS+4Em3iu0fD2HS0/tgrnkYfW4hyUor01Smnr5eY3jc4rRgaTDrJlDmBTHbFO0ETTDaxWA==",
            "license": "MIT",
            "dependencies": {
              "enhanced-resolve": "^5.18.1",
              "jiti": "^2.4.2",
              "tailwindcss": "4.0.15"
            }
          },
          "node_modules/@tailwindcss/oxide": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.0.15.tgz",
            "integrity": "sha512-e0uHrKfPu7JJGMfjwVNyt5M0u+OP8kUmhACwIRlM+JNBuReDVQ63yAD1NWe5DwJtdaHjugNBil76j+ks3zlk6g==",
            "license": "MIT",
            "engines": {
              "node": ">= 10"
            },
            "optionalDependencies": {
              "@tailwindcss/oxide-android-arm64": "4.0.15",
              "@tailwindcss/oxide-darwin-arm64": "4.0.15",
              "@tailwindcss/oxide-darwin-x64": "4.0.15",
              "@tailwindcss/oxide-freebsd-x64": "4.0.15",
              "@tailwindcss/oxide-linux-arm-gnueabihf": "4.0.15",
              "@tailwindcss/oxide-linux-arm64-gnu": "4.0.15",
              "@tailwindcss/oxide-linux-arm64-musl": "4.0.15",
              "@tailwindcss/oxide-linux-x64-gnu": "4.0.15",
              "@tailwindcss/oxide-linux-x64-musl": "4.0.15",
              "@tailwindcss/oxide-win32-arm64-msvc": "4.0.15",
              "@tailwindcss/oxide-win32-x64-msvc": "4.0.15"
            }
          },
          "node_modules/@tailwindcss/oxide-android-arm64": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.0.15.tgz",
            "integrity": "sha512-EBuyfSKkom7N+CB3A+7c0m4+qzKuiN0WCvzPvj5ZoRu4NlQadg/mthc1tl5k9b5ffRGsbDvP4k21azU4VwVk3Q==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "android"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-darwin-arm64": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.0.15.tgz",
            "integrity": "sha512-ObVAnEpLepMhV9VoO0JSit66jiN5C4YCqW3TflsE9boo2Z7FIjV80RFbgeL2opBhtxbaNEDa6D0/hq/EP03kgQ==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "darwin"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-darwin-x64": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.0.15.tgz",
            "integrity": "sha512-IElwoFhUinOr9MyKmGTPNi1Rwdh68JReFgYWibPWTGuevkHkLWKEflZc2jtI5lWZ5U9JjUnUfnY43I4fEXrc4g==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "darwin"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-freebsd-x64": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.0.15.tgz",
            "integrity": "sha512-6BLLqyx7SIYRBOnTZ8wgfXANLJV5TQd3PevRJZp0vn42eO58A2LykRKdvL1qyPfdpmEVtF+uVOEZ4QTMqDRAWA==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "freebsd"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.0.15.tgz",
            "integrity": "sha512-Zy63EVqO9241Pfg6G0IlRIWyY5vNcWrL5dd2WAKVJZRQVeolXEf1KfjkyeAAlErDj72cnyXObEZjMoPEKHpdNw==",
            "cpu": [
              "arm"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.0.15.tgz",
            "integrity": "sha512-2NemGQeaTbtIp1Z2wyerbVEJZTkAWhMDOhhR5z/zJ75yMNf8yLnE+sAlyf6yGDNr+1RqvWrRhhCFt7i0CIxe4Q==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.0.15.tgz",
            "integrity": "sha512-342GVnhH/6PkVgKtEzvNVuQ4D+Q7B7qplvuH20Cfz9qEtydG6IQczTZ5IT4JPlh931MG1NUCVxg+CIorr1WJyw==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.0.15.tgz",
            "integrity": "sha512-g76GxlKH124RuGqacCEFc2nbzRl7bBrlC8qDQMiUABkiifDRHOIUjgKbLNG4RuR9hQAD/MKsqZ7A8L08zsoBrw==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-linux-x64-musl": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.0.15.tgz",
            "integrity": "sha512-Gg/Y1XrKEvKpq6WeNt2h8rMIKOBj/W3mNa5NMvkQgMC7iO0+UNLrYmt6zgZufht66HozNpn+tJMbbkZ5a3LczA==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.0.15.tgz",
            "integrity": "sha512-7QtSSJwYZ7ZK1phVgcNZpuf7c7gaCj8Wb0xjliligT5qCGCp79OV2n3SJummVZdw4fbTNKUOYMO7m1GinppZyA==",
            "cpu": [
              "arm64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "win32"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.0.15.tgz",
            "integrity": "sha512-JQ5H+5MLhOjpgNp6KomouE0ZuKmk3hO5h7/ClMNAQ8gZI2zkli3IH8ZqLbd2DVfXDbdxN2xvooIEeIlkIoSCqw==",
            "cpu": [
              "x64"
            ],
            "license": "MIT",
            "optional": true,
            "os": [
              "win32"
            ],
            "engines": {
              "node": ">= 10"
            }
          },
          "node_modules/@tailwindcss/vite": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.0.15.tgz",
            "integrity": "sha512-JRexava80NijI8cTcLXNM3nQL5A0ptTHI8oJLLe8z1MpNB6p5J4WCdJJP8RoyHu8/eB1JzEdbpH86eGfbuaezQ==",
            "license": "MIT",
            "dependencies": {
              "@tailwindcss/node": "4.0.15",
              "@tailwindcss/oxide": "4.0.15",
              "lightningcss": "1.29.2",
              "tailwindcss": "4.0.15"
            },
            "peerDependencies": {
              "vite": "^5.2.0 || ^6"
            }
          },
          "node_modules/@types/babel__core": {
            "version": "7.20.5",
            "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
            "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/parser": "^7.20.7",
              "@babel/types": "^7.20.7",
              "@types/babel__generator": "*",
              "@types/babel__template": "*",
              "@types/babel__traverse": "*"
            }
          },
          "node_modules/@types/babel__generator": {
            "version": "7.6.8",
            "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz",
            "integrity": "sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/types": "^7.0.0"
            }
          },
          "node_modules/@types/babel__template": {
            "version": "7.4.4",
            "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
            "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/parser": "^7.1.0",
              "@babel/types": "^7.0.0"
            }
          },
          "node_modules/@types/babel__traverse": {
            "version": "7.20.6",
            "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz",
            "integrity": "sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/types": "^7.20.7"
            }
          },
          "node_modules/@types/estree": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
            "integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
            "license": "MIT"
          },
          "node_modules/@types/hast": {
            "version": "2.3.10",
            "resolved": "https://registry.npmjs.org/@types/hast/-/hast-2.3.10.tgz",
            "integrity": "sha512-McWspRw8xx8J9HurkVBfYj0xKoE25tOFlHGdx4MJ5xORQrMGZNqJhVQWaIbm6Oyla5kYOXtDiopzKRJzEOkwJw==",
            "license": "MIT",
            "dependencies": {
              "@types/unist": "^2"
            }
          },
          "node_modules/@types/json-schema": {
            "version": "7.0.15",
            "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
            "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/@types/react": {
            "version": "19.0.12",
            "resolved": "https://registry.npmjs.org/@types/react/-/react-19.0.12.tgz",
            "integrity": "sha512-V6Ar115dBDrjbtXSrS+/Oruobc+qVbbUxDFC1RSbRqLt5SYvxxyIDrSC85RWml54g+jfNeEMZhEj7wW07ONQhA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "csstype": "^3.0.2"
            }
          },
          "node_modules/@types/react-dom": {
            "version": "19.0.4",
            "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.0.4.tgz",
            "integrity": "sha512-4fSQ8vWFkg+TGhePfUzVmat3eC14TXYSsiiDSLI0dVLsrm9gZFABjPy/Qu6TKgl1tq1Bu1yDsuQgY3A3DOjCcg==",
            "dev": true,
            "license": "MIT",
            "peerDependencies": {
              "@types/react": "^19.0.0"
            }
          },
          "node_modules/@types/unist": {
            "version": "2.0.11",
            "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
            "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==",
            "license": "MIT"
          },
          "node_modules/@vitejs/plugin-react": {
            "version": "4.3.4",
            "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.4.tgz",
            "integrity": "sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@babel/core": "^7.26.0",
              "@babel/plugin-transform-react-jsx-self": "^7.25.9",
              "@babel/plugin-transform-react-jsx-source": "^7.25.9",
              "@types/babel__core": "^7.20.5",
              "react-refresh": "^0.14.2"
            },
            "engines": {
              "node": "^14.18.0 || >=16.0.0"
            },
            "peerDependencies": {
              "vite": "^4.2.0 || ^5.0.0 || ^6.0.0"
            }
          },
          "node_modules/acorn": {
            "version": "8.14.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.1.tgz",
            "integrity": "sha512-OvQ/2pUDKmgfCg++xsTX1wGxfTaszcHVcTctW4UJB4hibJx2HXxxO5UmVgyjMa+ZDsiaf5wWLXYpRWMmBI0QHg==",
            "dev": true,
            "license": "MIT",
            "bin": {
              "acorn": "bin/acorn"
            },
            "engines": {
              "node": ">=0.4.0"
            }
          },
          "node_modules/acorn-jsx": {
            "version": "5.3.2",
            "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
            "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
            "dev": true,
            "license": "MIT",
            "peerDependencies": {
              "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
            }
          },
          "node_modules/ajv": {
            "version": "6.12.6",
            "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
            "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "fast-deep-equal": "^3.1.1",
              "fast-json-stable-stringify": "^2.0.0",
              "json-schema-traverse": "^0.4.1",
              "uri-js": "^4.2.2"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/epoberezkin"
            }
          },
          "node_modules/ansi-styles": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
            "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "color-convert": "^2.0.1"
            },
            "engines": {
              "node": ">=8"
            },
            "funding": {
              "url": "https://github.com/chalk/ansi-styles?sponsor=1"
            }
          },
          "node_modules/argparse": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
            "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
            "dev": true,
            "license": "Python-2.0"
          },
          "node_modules/balanced-match": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
            "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "balanced-match": "^1.0.0",
              "concat-map": "0.0.1"
            }
          },
          "node_modules/browserslist": {
            "version": "4.24.4",
            "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.4.tgz",
            "integrity": "sha512-KDi1Ny1gSePi1vm0q4oxSF8b4DR44GF4BbmS2YdhPLOEqd8pDviZOGH/GsmRwoWJ2+5Lr085X7naowMwKHDG1A==",
            "dev": true,
            "funding": [
              {
                "type": "opencollective",
                "url": "https://opencollective.com/browserslist"
              },
              {
                "type": "tidelift",
                "url": "https://tidelift.com/funding/github/npm/browserslist"
              },
              {
                "type": "github",
                "url": "https://github.com/sponsors/ai"
              }
            ],
            "license": "MIT",
            "dependencies": {
              "caniuse-lite": "^1.0.30001688",
              "electron-to-chromium": "^1.5.73",
              "node-releases": "^2.0.19",
              "update-browserslist-db": "^1.1.1"
            },
            "bin": {
              "browserslist": "cli.js"
            },
            "engines": {
              "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
            }
          },
          "node_modules/callsites": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
            "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/caniuse-lite": {
            "version": "1.0.30001706",
            "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001706.tgz",
            "integrity": "sha512-3ZczoTApMAZwPKYWmwVbQMFpXBDds3/0VciVoUwPUbldlYyVLmRVuRs/PcUZtHpbLRpzzDvrvnFuREsGt6lUug==",
            "dev": true,
            "funding": [
              {
                "type": "opencollective",
                "url": "https://opencollective.com/browserslist"
              },
              {
                "type": "tidelift",
                "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
              },
              {
                "type": "github",
                "url": "https://github.com/sponsors/ai"
              }
            ],
            "license": "CC-BY-4.0"
          },
          "node_modules/chalk": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
            "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "ansi-styles": "^4.1.0",
              "supports-color": "^7.1.0"
            },
            "engines": {
              "node": ">=10"
            },
            "funding": {
              "url": "https://github.com/chalk/chalk?sponsor=1"
            }
          },
          "node_modules/character-entities": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/character-entities/-/character-entities-1.2.4.tgz",
            "integrity": "sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw==",
            "license": "MIT",
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/character-entities-legacy": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-1.1.4.tgz",
            "integrity": "sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA==",
            "license": "MIT",
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/character-reference-invalid": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/character-reference-invalid/-/character-reference-invalid-1.1.4.tgz",
            "integrity": "sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg==",
            "license": "MIT",
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "color-name": "~1.1.4"
            },
            "engines": {
              "node": ">=7.0.0"
            }
          },
          "node_modules/color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/comma-separated-tokens": {
            "version": "1.0.8",
            "resolved": "https://registry.npmjs.org/comma-separated-tokens/-/comma-separated-tokens-1.0.8.tgz",
            "integrity": "sha512-GHuDRO12Sypu2cV70d1dkA2EUmXHgntrzbpvOB+Qy+49ypNfGgFQIC2fhhXbnyrJRynDCAARsT7Ou0M6hirpfw==",
            "license": "MIT",
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/concat-map": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
            "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/convert-source-map": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
            "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/cross-spawn": {
            "version": "7.0.6",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
            "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "path-key": "^3.1.0",
              "shebang-command": "^2.0.0",
              "which": "^2.0.1"
            },
            "engines": {
              "node": ">= 8"
            }
          },
          "node_modules/csstype": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
            "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/debug": {
            "version": "4.4.0",
            "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
            "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "ms": "^2.1.3"
            },
            "engines": {
              "node": ">=6.0"
            },
            "peerDependenciesMeta": {
              "supports-color": {
                "optional": true
              }
            }
          },
          "node_modules/deep-is": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
            "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/detect-libc": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.3.tgz",
            "integrity": "sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==",
            "license": "Apache-2.0",
            "engines": {
              "node": ">=8"
            }
          },
          "node_modules/electron-to-chromium": {
            "version": "1.5.123",
            "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.123.tgz",
            "integrity": "sha512-refir3NlutEZqlKaBLK0tzlVLe5P2wDKS7UQt/3SpibizgsRAPOsqQC3ffw1nlv3ze5gjRQZYHoPymgVZkplFA==",
            "dev": true,
            "license": "ISC"
          },
          "node_modules/enhanced-resolve": {
            "version": "5.18.1",
            "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.1.tgz",
            "integrity": "sha512-ZSW3ma5GkcQBIpwZTSRAI8N71Uuwgs93IezB7mf7R60tC8ZbJideoDNKjHn2O9KIlx6rkGTTEk1xUCK2E1Y2Yg==",
            "license": "MIT",
            "dependencies": {
              "graceful-fs": "^4.2.4",
              "tapable": "^2.2.0"
            },
            "engines": {
              "node": ">=10.13.0"
            }
          },
          "node_modules/esbuild": {
            "version": "0.25.1",
            "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.25.1.tgz",
            "integrity": "sha512-BGO5LtrGC7vxnqucAe/rmvKdJllfGaYWdyABvyMoXQlfYMb2bbRuReWR5tEGE//4LcNJj9XrkovTqNYRFZHAMQ==",
            "hasInstallScript": true,
            "license": "MIT",
            "bin": {
              "esbuild": "bin/esbuild"
            },
            "engines": {
              "node": ">=18"
            },
            "optionalDependencies": {
              "@esbuild/aix-ppc64": "0.25.1",
              "@esbuild/android-arm": "0.25.1",
              "@esbuild/android-arm64": "0.25.1",
              "@esbuild/android-x64": "0.25.1",
              "@esbuild/darwin-arm64": "0.25.1",
              "@esbuild/darwin-x64": "0.25.1",
              "@esbuild/freebsd-arm64": "0.25.1",
              "@esbuild/freebsd-x64": "0.25.1",
              "@esbuild/linux-arm": "0.25.1",
              "@esbuild/linux-arm64": "0.25.1",
              "@esbuild/linux-ia32": "0.25.1",
              "@esbuild/linux-loong64": "0.25.1",
              "@esbuild/linux-mips64el": "0.25.1",
              "@esbuild/linux-ppc64": "0.25.1",
              "@esbuild/linux-riscv64": "0.25.1",
              "@esbuild/linux-s390x": "0.25.1",
              "@esbuild/linux-x64": "0.25.1",
              "@esbuild/netbsd-arm64": "0.25.1",
              "@esbuild/netbsd-x64": "0.25.1",
              "@esbuild/openbsd-arm64": "0.25.1",
              "@esbuild/openbsd-x64": "0.25.1",
              "@esbuild/sunos-x64": "0.25.1",
              "@esbuild/win32-arm64": "0.25.1",
              "@esbuild/win32-ia32": "0.25.1",
              "@esbuild/win32-x64": "0.25.1"
            }
          },
          "node_modules/escalade": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
            "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/escape-string-regexp": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
            "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=10"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/eslint": {
            "version": "9.23.0",
            "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.23.0.tgz",
            "integrity": "sha512-jV7AbNoFPAY1EkFYpLq5bslU9NLNO8xnEeQXwErNibVryjk67wHVmddTBilc5srIttJDBrB0eMHKZBFbSIABCw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "@eslint-community/eslint-utils": "^4.2.0",
              "@eslint-community/regexpp": "^4.12.1",
              "@eslint/config-array": "^0.19.2",
              "@eslint/config-helpers": "^0.2.0",
              "@eslint/core": "^0.12.0",
              "@eslint/eslintrc": "^3.3.1",
              "@eslint/js": "9.23.0",
              "@eslint/plugin-kit": "^0.2.7",
              "@humanfs/node": "^0.16.6",
              "@humanwhocodes/module-importer": "^1.0.1",
              "@humanwhocodes/retry": "^0.4.2",
              "@types/estree": "^1.0.6",
              "@types/json-schema": "^7.0.15",
              "ajv": "^6.12.4",
              "chalk": "^4.0.0",
              "cross-spawn": "^7.0.6",
              "debug": "^4.3.2",
              "escape-string-regexp": "^4.0.0",
              "eslint-scope": "^8.3.0",
              "eslint-visitor-keys": "^4.2.0",
              "espree": "^10.3.0",
              "esquery": "^1.5.0",
              "esutils": "^2.0.2",
              "fast-deep-equal": "^3.1.3",
              "file-entry-cache": "^8.0.0",
              "find-up": "^5.0.0",
              "glob-parent": "^6.0.2",
              "ignore": "^5.2.0",
              "imurmurhash": "^0.1.4",
              "is-glob": "^4.0.0",
              "json-stable-stringify-without-jsonify": "^1.0.1",
              "lodash.merge": "^4.6.2",
              "minimatch": "^3.1.2",
              "natural-compare": "^1.4.0",
              "optionator": "^0.9.3"
            },
            "bin": {
              "eslint": "bin/eslint.js"
            },
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            },
            "funding": {
              "url": "https://eslint.org/donate"
            },
            "peerDependencies": {
              "jiti": "*"
            },
            "peerDependenciesMeta": {
              "jiti": {
                "optional": true
              }
            }
          },
          "node_modules/eslint-plugin-react-hooks": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.2.0.tgz",
            "integrity": "sha512-+f15FfK64YQwZdJNELETdn5ibXEUQmW1DZL6KXhNnc2heoy/sg9VJJeT7n8TlMWouzWqSWavFkIhHyIbIAEapg==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=10"
            },
            "peerDependencies": {
              "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
            }
          },
          "node_modules/eslint-plugin-react-refresh": {
            "version": "0.4.19",
            "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.19.tgz",
            "integrity": "sha512-eyy8pcr/YxSYjBoqIFSrlbn9i/xvxUFa8CjzAYo9cFjgGXqq1hyjihcpZvxRLalpaWmueWR81xn7vuKmAFijDQ==",
            "dev": true,
            "license": "MIT",
            "peerDependencies": {
              "eslint": ">=8.40"
            }
          },
          "node_modules/eslint-scope": {
            "version": "8.3.0",
            "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.3.0.tgz",
            "integrity": "sha512-pUNxi75F8MJ/GdeKtVLSbYg4ZI34J6C0C7sbL4YOp2exGwen7ZsuBqKzUhXd0qMQ362yET3z+uPwKeg/0C2XCQ==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
              "esrecurse": "^4.3.0",
              "estraverse": "^5.2.0"
            },
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            },
            "funding": {
              "url": "https://opencollective.com/eslint"
            }
          },
          "node_modules/eslint-visitor-keys": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.0.tgz",
            "integrity": "sha512-UyLnSehNt62FFhSwjZlHmeokpRK59rcz29j+F1/aDgbkbRTk7wIc9XzdoasMUbRNKDM0qQt/+BJ4BrpFeABemw==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            },
            "funding": {
              "url": "https://opencollective.com/eslint"
            }
          },
          "node_modules/espree": {
            "version": "10.3.0",
            "resolved": "https://registry.npmjs.org/espree/-/espree-10.3.0.tgz",
            "integrity": "sha512-0QYC8b24HWY8zjRnDTL6RiHfDbAWn63qb4LMj1Z4b076A4une81+z03Kg7l7mn/48PUTqoLptSXez8oknU8Clg==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
              "acorn": "^8.14.0",
              "acorn-jsx": "^5.3.2",
              "eslint-visitor-keys": "^4.2.0"
            },
            "engines": {
              "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
            },
            "funding": {
              "url": "https://opencollective.com/eslint"
            }
          },
          "node_modules/esquery": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
            "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
            "dev": true,
            "license": "BSD-3-Clause",
            "dependencies": {
              "estraverse": "^5.1.0"
            },
            "engines": {
              "node": ">=0.10"
            }
          },
          "node_modules/esrecurse": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
            "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
              "estraverse": "^5.2.0"
            },
            "engines": {
              "node": ">=4.0"
            }
          },
          "node_modules/estraverse": {
            "version": "5.3.0",
            "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
            "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
            "dev": true,
            "license": "BSD-2-Clause",
            "engines": {
              "node": ">=4.0"
            }
          },
          "node_modules/esutils": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
            "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
            "dev": true,
            "license": "BSD-2-Clause",
            "engines": {
              "node": ">=0.10.0"
            }
          },
          "node_modules/fast-deep-equal": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
            "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/fast-json-stable-stringify": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
            "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/fast-levenshtein": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
            "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/fault": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/fault/-/fault-1.0.4.tgz",
            "integrity": "sha512-CJ0HCB5tL5fYTEA7ToAq5+kTwd++Borf1/bifxd9iT70QcXr4MRrO3Llf8Ifs70q+SJcGHFtnIE/Nw6giCtECA==",
            "license": "MIT",
            "dependencies": {
              "format": "^0.2.0"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/file-entry-cache": {
            "version": "8.0.0",
            "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
            "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "flat-cache": "^4.0.0"
            },
            "engines": {
              "node": ">=16.0.0"
            }
          },
          "node_modules/find-up": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
            "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "locate-path": "^6.0.0",
              "path-exists": "^4.0.0"
            },
            "engines": {
              "node": ">=10"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/flat-cache": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
            "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "flatted": "^3.2.9",
              "keyv": "^4.5.4"
            },
            "engines": {
              "node": ">=16"
            }
          },
          "node_modules/flatted": {
            "version": "3.3.3",
            "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
            "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
            "dev": true,
            "license": "ISC"
          },
          "node_modules/format": {
            "version": "0.2.2",
            "resolved": "https://registry.npmjs.org/format/-/format-0.2.2.tgz",
            "integrity": "sha512-wzsgA6WOq+09wrU1tsJ09udeR/YZRaeArL9e1wPbFg3GG2yDnC2ldKpxs4xunpFF9DgqCqOIra3bc1HWrJ37Ww==",
            "engines": {
              "node": ">=0.4.x"
            }
          },
          "node_modules/fsevents": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
            "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
            "hasInstallScript": true,
            "license": "MIT",
            "optional": true,
            "os": [
              "darwin"
            ],
            "engines": {
              "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
            }
          },
          "node_modules/gensync": {
            "version": "1.0.0-beta.2",
            "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
            "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6.9.0"
            }
          },
          "node_modules/glob-parent": {
            "version": "6.0.2",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
            "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
              "is-glob": "^4.0.3"
            },
            "engines": {
              "node": ">=10.13.0"
            }
          },
          "node_modules/globals": {
            "version": "15.15.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-15.15.0.tgz",
            "integrity": "sha512-7ACyT3wmyp3I61S4fG682L0VA2RGD9otkqGJIwNUMF1SWUombIIk+af1unuDYgMm082aHYwD+mzJvv9Iu8dsgg==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=18"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/graceful-fs": {
            "version": "4.2.11",
            "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
            "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
            "license": "ISC"
          },
          "node_modules/has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=8"
            }
          },
          "node_modules/hast-util-parse-selector": {
            "version": "2.2.5",
            "resolved": "https://registry.npmjs.org/hast-util-parse-selector/-/hast-util-parse-selector-2.2.5.tgz",
            "integrity": "sha512-7j6mrk/qqkSehsM92wQjdIgWM2/BW61u/53G6xmC8i1OmEdKLHbk419QKQUjz6LglWsfqoiHmyMRkP1BGjecNQ==",
            "license": "MIT",
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/unified"
            }
          },
          "node_modules/hastscript": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/hastscript/-/hastscript-6.0.0.tgz",
            "integrity": "sha512-nDM6bvd7lIqDUiYEiu5Sl/+6ReP0BMk/2f4U/Rooccxkj0P5nm+acM5PrGJ/t5I8qPGiqZSE6hVAwZEdZIvP4w==",
            "license": "MIT",
            "dependencies": {
              "@types/hast": "^2.0.0",
              "comma-separated-tokens": "^1.0.0",
              "hast-util-parse-selector": "^2.0.0",
              "property-information": "^5.0.0",
              "space-separated-tokens": "^1.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/unified"
            }
          },
          "node_modules/highlight.js": {
            "version": "10.7.3",
            "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-10.7.3.tgz",
            "integrity": "sha512-tzcUFauisWKNHaRkN4Wjl/ZA07gENAjFl3J/c480dprkGTg5EQstgaNFqBfUqCq54kZRIEcreTsAgF/m2quD7A==",
            "license": "BSD-3-Clause",
            "engines": {
              "node": "*"
            }
          },
          "node_modules/highlightjs-vue": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/highlightjs-vue/-/highlightjs-vue-1.0.0.tgz",
            "integrity": "sha512-PDEfEF102G23vHmPhLyPboFCD+BkMGu+GuJe2d9/eH4FsCwvgBpnc9n0pGE+ffKdph38s6foEZiEjdgHdzp+IA==",
            "license": "CC0-1.0"
          },
          "node_modules/ignore": {
            "version": "5.3.2",
            "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
            "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">= 4"
            }
          },
          "node_modules/import-fresh": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
            "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "parent-module": "^1.0.0",
              "resolve-from": "^4.0.0"
            },
            "engines": {
              "node": ">=6"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/imurmurhash": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
            "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=0.8.19"
            }
          },
          "node_modules/is-alphabetical": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-alphabetical/-/is-alphabetical-1.0.4.tgz",
            "integrity": "sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg==",
            "license": "MIT",
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/is-alphanumerical": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-alphanumerical/-/is-alphanumerical-1.0.4.tgz",
            "integrity": "sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==",
            "license": "MIT",
            "dependencies": {
              "is-alphabetical": "^1.0.0",
              "is-decimal": "^1.0.0"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/is-decimal": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-decimal/-/is-decimal-1.0.4.tgz",
            "integrity": "sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw==",
            "license": "MIT",
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/is-extglob": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
            "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=0.10.0"
            }
          },
          "node_modules/is-glob": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
            "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "is-extglob": "^2.1.1"
            },
            "engines": {
              "node": ">=0.10.0"
            }
          },
          "node_modules/is-hexadecimal": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-hexadecimal/-/is-hexadecimal-1.0.4.tgz",
            "integrity": "sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw==",
            "license": "MIT",
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/isexe": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
            "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
            "dev": true,
            "license": "ISC"
          },
          "node_modules/jiti": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.4.2.tgz",
            "integrity": "sha512-rg9zJN+G4n2nfJl5MW3BMygZX56zKPNVEYYqq7adpmMh4Jn2QNEwhvQlFy6jPVdcod7txZtKHWnyZiA3a0zP7A==",
            "license": "MIT",
            "bin": {
              "jiti": "lib/jiti-cli.mjs"
            }
          },
          "node_modules/js-tokens": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
            "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/js-yaml": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
            "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "argparse": "^2.0.1"
            },
            "bin": {
              "js-yaml": "bin/js-yaml.js"
            }
          },
          "node_modules/jsesc": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
            "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
            "dev": true,
            "license": "MIT",
            "bin": {
              "jsesc": "bin/jsesc"
            },
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/json-buffer": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
            "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/json-schema-traverse": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
            "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/json-stable-stringify-without-jsonify": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
            "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/json5": {
            "version": "2.2.3",
            "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
            "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
            "dev": true,
            "license": "MIT",
            "bin": {
              "json5": "lib/cli.js"
            },
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/keyv": {
            "version": "4.5.4",
            "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
            "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "json-buffer": "3.0.1"
            }
          },
          "node_modules/levn": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
            "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "prelude-ls": "^1.2.1",
              "type-check": "~0.4.0"
            },
            "engines": {
              "node": ">= 0.8.0"
            }
          },
          "node_modules/lightningcss": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.29.2.tgz",
            "integrity": "sha512-6b6gd/RUXKaw5keVdSEtqFVdzWnU5jMxTUjA2bVcMNPLwSQ08Sv/UodBVtETLCn7k4S1Ibxwh7k68IwLZPgKaA==",
            "license": "MPL-2.0",
            "dependencies": {
              "detect-libc": "^2.0.3"
            },
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            },
            "optionalDependencies": {
              "lightningcss-darwin-arm64": "1.29.2",
              "lightningcss-darwin-x64": "1.29.2",
              "lightningcss-freebsd-x64": "1.29.2",
              "lightningcss-linux-arm-gnueabihf": "1.29.2",
              "lightningcss-linux-arm64-gnu": "1.29.2",
              "lightningcss-linux-arm64-musl": "1.29.2",
              "lightningcss-linux-x64-gnu": "1.29.2",
              "lightningcss-linux-x64-musl": "1.29.2",
              "lightningcss-win32-arm64-msvc": "1.29.2",
              "lightningcss-win32-x64-msvc": "1.29.2"
            }
          },
          "node_modules/lightningcss-darwin-arm64": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.29.2.tgz",
            "integrity": "sha512-cK/eMabSViKn/PG8U/a7aCorpeKLMlK0bQeNHmdb7qUnBkNPnL+oV5DjJUo0kqWsJUapZsM4jCfYItbqBDvlcA==",
            "cpu": [
              "arm64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "darwin"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-darwin-x64": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.29.2.tgz",
            "integrity": "sha512-j5qYxamyQw4kDXX5hnnCKMf3mLlHvG44f24Qyi2965/Ycz829MYqjrVg2H8BidybHBp9kom4D7DR5VqCKDXS0w==",
            "cpu": [
              "x64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "darwin"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-freebsd-x64": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.29.2.tgz",
            "integrity": "sha512-wDk7M2tM78Ii8ek9YjnY8MjV5f5JN2qNVO+/0BAGZRvXKtQrBC4/cn4ssQIpKIPP44YXw6gFdpUF+Ps+RGsCwg==",
            "cpu": [
              "x64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "freebsd"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-linux-arm-gnueabihf": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.29.2.tgz",
            "integrity": "sha512-IRUrOrAF2Z+KExdExe3Rz7NSTuuJ2HvCGlMKoquK5pjvo2JY4Rybr+NrKnq0U0hZnx5AnGsuFHjGnNT14w26sg==",
            "cpu": [
              "arm"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-linux-arm64-gnu": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.29.2.tgz",
            "integrity": "sha512-KKCpOlmhdjvUTX/mBuaKemp0oeDIBBLFiU5Fnqxh1/DZ4JPZi4evEH7TKoSBFOSOV3J7iEmmBaw/8dpiUvRKlQ==",
            "cpu": [
              "arm64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-linux-arm64-musl": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.29.2.tgz",
            "integrity": "sha512-Q64eM1bPlOOUgxFmoPUefqzY1yV3ctFPE6d/Vt7WzLW4rKTv7MyYNky+FWxRpLkNASTnKQUaiMJ87zNODIrrKQ==",
            "cpu": [
              "arm64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-linux-x64-gnu": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.29.2.tgz",
            "integrity": "sha512-0v6idDCPG6epLXtBH/RPkHvYx74CVziHo6TMYga8O2EiQApnUPZsbR9nFNrg2cgBzk1AYqEd95TlrsL7nYABQg==",
            "cpu": [
              "x64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-linux-x64-musl": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.29.2.tgz",
            "integrity": "sha512-rMpz2yawkgGT8RULc5S4WiZopVMOFWjiItBT7aSfDX4NQav6M44rhn5hjtkKzB+wMTRlLLqxkeYEtQ3dd9696w==",
            "cpu": [
              "x64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "linux"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-win32-arm64-msvc": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.29.2.tgz",
            "integrity": "sha512-nL7zRW6evGQqYVu/bKGK+zShyz8OVzsCotFgc7judbt6wnB2KbiKKJwBE4SGoDBQ1O94RjW4asrCjQL4i8Fhbw==",
            "cpu": [
              "arm64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "win32"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/lightningcss-win32-x64-msvc": {
            "version": "1.29.2",
            "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.29.2.tgz",
            "integrity": "sha512-EdIUW3B2vLuHmv7urfzMI/h2fmlnOQBk1xlsDxkN1tCWKjNFjfLhGxYk8C8mzpSfr+A6jFFIi8fU6LbQGsRWjA==",
            "cpu": [
              "x64"
            ],
            "license": "MPL-2.0",
            "optional": true,
            "os": [
              "win32"
            ],
            "engines": {
              "node": ">= 12.0.0"
            },
            "funding": {
              "type": "opencollective",
              "url": "https://opencollective.com/parcel"
            }
          },
          "node_modules/locate-path": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
            "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "p-locate": "^5.0.0"
            },
            "engines": {
              "node": ">=10"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/lodash.merge": {
            "version": "4.6.2",
            "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
            "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/lowlight": {
            "version": "1.20.0",
            "resolved": "https://registry.npmjs.org/lowlight/-/lowlight-1.20.0.tgz",
            "integrity": "sha512-8Ktj+prEb1RoCPkEOrPMYUN/nCggB7qAWe3a7OpMjWQkh3l2RD5wKRQ+o8Q8YuI9RG/xs95waaI/E6ym/7NsTw==",
            "license": "MIT",
            "dependencies": {
              "fault": "^1.0.0",
              "highlight.js": "~10.7.0"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/lru-cache": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
            "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
              "yallist": "^3.0.2"
            }
          },
          "node_modules/minimatch": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
            "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
              "brace-expansion": "^1.1.7"
            },
            "engines": {
              "node": "*"
            }
          },
          "node_modules/ms": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
            "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/nanoid": {
            "version": "3.3.11",
            "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
            "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
            "funding": [
              {
                "type": "github",
                "url": "https://github.com/sponsors/ai"
              }
            ],
            "license": "MIT",
            "bin": {
              "nanoid": "bin/nanoid.cjs"
            },
            "engines": {
              "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
            }
          },
          "node_modules/natural-compare": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
            "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/node-releases": {
            "version": "2.0.19",
            "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz",
            "integrity": "sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==",
            "dev": true,
            "license": "MIT"
          },
          "node_modules/optionator": {
            "version": "0.9.4",
            "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
            "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "deep-is": "^0.1.3",
              "fast-levenshtein": "^2.0.6",
              "levn": "^0.4.1",
              "prelude-ls": "^1.2.1",
              "type-check": "^0.4.0",
              "word-wrap": "^1.2.5"
            },
            "engines": {
              "node": ">= 0.8.0"
            }
          },
          "node_modules/p-limit": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
            "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "yocto-queue": "^0.1.0"
            },
            "engines": {
              "node": ">=10"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/p-locate": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
            "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "p-limit": "^3.0.2"
            },
            "engines": {
              "node": ">=10"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/parent-module": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
            "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "callsites": "^3.0.0"
            },
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/parse-entities": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/parse-entities/-/parse-entities-2.0.0.tgz",
            "integrity": "sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==",
            "license": "MIT",
            "dependencies": {
              "character-entities": "^1.0.0",
              "character-entities-legacy": "^1.0.0",
              "character-reference-invalid": "^1.0.0",
              "is-alphanumerical": "^1.0.0",
              "is-decimal": "^1.0.0",
              "is-hexadecimal": "^1.0.0"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/path-exists": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
            "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=8"
            }
          },
          "node_modules/path-key": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
            "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=8"
            }
          },
          "node_modules/picocolors": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
            "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
            "license": "ISC"
          },
          "node_modules/postcss": {
            "version": "8.5.3",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.3.tgz",
            "integrity": "sha512-dle9A3yYxlBSrt8Fu+IpjGT8SY8hN0mlaA6GY8t0P5PjIOZemULz/E2Bnm/2dcUOena75OTNkHI76uZBNUUq3A==",
            "funding": [
              {
                "type": "opencollective",
                "url": "https://opencollective.com/postcss/"
              },
              {
                "type": "tidelift",
                "url": "https://tidelift.com/funding/github/npm/postcss"
              },
              {
                "type": "github",
                "url": "https://github.com/sponsors/ai"
              }
            ],
            "license": "MIT",
            "dependencies": {
              "nanoid": "^3.3.8",
              "picocolors": "^1.1.1",
              "source-map-js": "^1.2.1"
            },
            "engines": {
              "node": "^10 || ^12 || >=14"
            }
          },
          "node_modules/prelude-ls": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
            "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">= 0.8.0"
            }
          },
          "node_modules/prismjs": {
            "version": "1.30.0",
            "resolved": "https://registry.npmjs.org/prismjs/-/prismjs-1.30.0.tgz",
            "integrity": "sha512-DEvV2ZF2r2/63V+tK8hQvrR2ZGn10srHbXviTlcv7Kpzw8jWiNTqbVgjO3IY8RxrrOUF8VPMQQFysYYYv0YZxw==",
            "license": "MIT",
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/property-information": {
            "version": "5.6.0",
            "resolved": "https://registry.npmjs.org/property-information/-/property-information-5.6.0.tgz",
            "integrity": "sha512-YUHSPk+A30YPv+0Qf8i9Mbfe/C0hdPXk1s1jPVToV8pk8BQtpw10ct89Eo7OWkutrwqvT0eicAxlOg3dOAu8JA==",
            "license": "MIT",
            "dependencies": {
              "xtend": "^4.0.0"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/punycode": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
            "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/react": {
            "version": "19.0.0",
            "resolved": "https://registry.npmjs.org/react/-/react-19.0.0.tgz",
            "integrity": "sha512-V8AVnmPIICiWpGfm6GLzCR/W5FXLchHop40W4nXBmdlEceh16rCN8O8LNWm5bh5XUX91fh7KpA+W0TgMKmgTpQ==",
            "license": "MIT",
            "engines": {
              "node": ">=0.10.0"
            }
          },
          "node_modules/react-dom": {
            "version": "19.0.0",
            "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.0.0.tgz",
            "integrity": "sha512-4GV5sHFG0e/0AD4X+ySy6UJd3jVl1iNsNHdpad0qhABJ11twS3TTBnseqsKurKcsNqCEFeGL3uLpVChpIO3QfQ==",
            "license": "MIT",
            "dependencies": {
              "scheduler": "^0.25.0"
            },
            "peerDependencies": {
              "react": "^19.0.0"
            }
          },
          "node_modules/react-refresh": {
            "version": "0.14.2",
            "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
            "integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=0.10.0"
            }
          },
          "node_modules/react-syntax-highlighter": {
            "version": "15.6.1",
            "resolved": "https://registry.npmjs.org/react-syntax-highlighter/-/react-syntax-highlighter-15.6.1.tgz",
            "integrity": "sha512-OqJ2/vL7lEeV5zTJyG7kmARppUjiB9h9udl4qHQjjgEos66z00Ia0OckwYfRxCSFrW8RJIBnsBwQsHZbVPspqg==",
            "license": "MIT",
            "dependencies": {
              "@babel/runtime": "^7.3.1",
              "highlight.js": "^10.4.1",
              "highlightjs-vue": "^1.0.0",
              "lowlight": "^1.17.0",
              "prismjs": "^1.27.0",
              "refractor": "^3.6.0"
            },
            "peerDependencies": {
              "react": ">= 0.14.0"
            }
          },
          "node_modules/refractor": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/refractor/-/refractor-3.6.0.tgz",
            "integrity": "sha512-MY9W41IOWxxk31o+YvFCNyNzdkc9M20NoZK5vq6jkv4I/uh2zkWcfudj0Q1fovjUQJrNewS9NMzeTtqPf+n5EA==",
            "license": "MIT",
            "dependencies": {
              "hastscript": "^6.0.0",
              "parse-entities": "^2.0.0",
              "prismjs": "~1.27.0"
            },
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/refractor/node_modules/prismjs": {
            "version": "1.27.0",
            "resolved": "https://registry.npmjs.org/prismjs/-/prismjs-1.27.0.tgz",
            "integrity": "sha512-t13BGPUlFDR7wRB5kQDG4jjl7XeuH6jbJGt11JHPL96qwsEHNX2+68tFXqc1/k+/jALsbSWJKUOT/hcYAZ5LkA==",
            "license": "MIT",
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/regenerator-runtime": {
            "version": "0.14.1",
            "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz",
            "integrity": "sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw==",
            "license": "MIT"
          },
          "node_modules/resolve-from": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
            "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=4"
            }
          },
          "node_modules/rollup": {
            "version": "4.36.0",
            "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.36.0.tgz",
            "integrity": "sha512-zwATAXNQxUcd40zgtQG0ZafcRK4g004WtEl7kbuhTWPvf07PsfohXl39jVUvPF7jvNAIkKPQ2XrsDlWuxBd++Q==",
            "license": "MIT",
            "dependencies": {
              "@types/estree": "1.0.6"
            },
            "bin": {
              "rollup": "dist/bin/rollup"
            },
            "engines": {
              "node": ">=18.0.0",
              "npm": ">=8.0.0"
            },
            "optionalDependencies": {
              "@rollup/rollup-android-arm-eabi": "4.36.0",
              "@rollup/rollup-android-arm64": "4.36.0",
              "@rollup/rollup-darwin-arm64": "4.36.0",
              "@rollup/rollup-darwin-x64": "4.36.0",
              "@rollup/rollup-freebsd-arm64": "4.36.0",
              "@rollup/rollup-freebsd-x64": "4.36.0",
              "@rollup/rollup-linux-arm-gnueabihf": "4.36.0",
              "@rollup/rollup-linux-arm-musleabihf": "4.36.0",
              "@rollup/rollup-linux-arm64-gnu": "4.36.0",
              "@rollup/rollup-linux-arm64-musl": "4.36.0",
              "@rollup/rollup-linux-loongarch64-gnu": "4.36.0",
              "@rollup/rollup-linux-powerpc64le-gnu": "4.36.0",
              "@rollup/rollup-linux-riscv64-gnu": "4.36.0",
              "@rollup/rollup-linux-s390x-gnu": "4.36.0",
              "@rollup/rollup-linux-x64-gnu": "4.36.0",
              "@rollup/rollup-linux-x64-musl": "4.36.0",
              "@rollup/rollup-win32-arm64-msvc": "4.36.0",
              "@rollup/rollup-win32-ia32-msvc": "4.36.0",
              "@rollup/rollup-win32-x64-msvc": "4.36.0",
              "fsevents": "~2.3.2"
            }
          },
          "node_modules/scheduler": {
            "version": "0.25.0",
            "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.25.0.tgz",
            "integrity": "sha512-xFVuu11jh+xcO7JOAGJNOXld8/TcEHK/4CituBUeUb5hqxJLj9YuemAEuvm9gQ/+pgXYfbQuqAkiYu+u7YEsNA==",
            "license": "MIT"
          },
          "node_modules/semver": {
            "version": "6.3.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
            "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
            "dev": true,
            "license": "ISC",
            "bin": {
              "semver": "bin/semver.js"
            }
          },
          "node_modules/shebang-command": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
            "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "shebang-regex": "^3.0.0"
            },
            "engines": {
              "node": ">=8"
            }
          },
          "node_modules/shebang-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
            "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=8"
            }
          },
          "node_modules/source-map-js": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
            "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
            "license": "BSD-3-Clause",
            "engines": {
              "node": ">=0.10.0"
            }
          },
          "node_modules/space-separated-tokens": {
            "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/space-separated-tokens/-/space-separated-tokens-1.1.5.tgz",
            "integrity": "sha512-q/JSVd1Lptzhf5bkYm4ob4iWPjx0KiRe3sRFBNrVqbJkFaBm5vbbowy1mymoPNLRa52+oadOhJ+K49wsSeSjTA==",
            "license": "MIT",
            "funding": {
              "type": "github",
              "url": "https://github.com/sponsors/wooorm"
            }
          },
          "node_modules/strip-json-comments": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
            "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=8"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          },
          "node_modules/supports-color": {
            "version": "7.2.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
            "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "has-flag": "^4.0.0"
            },
            "engines": {
              "node": ">=8"
            }
          },
          "node_modules/tailwindcss": {
            "version": "4.0.15",
            "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.0.15.tgz",
            "integrity": "sha512-6ZMg+hHdMJpjpeCCFasX7K+U615U9D+7k5/cDK/iRwl6GptF24+I/AbKgOnXhVKePzrEyIXutLv36n4cRsq3Sg==",
            "license": "MIT"
          },
          "node_modules/tapable": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
            "integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==",
            "license": "MIT",
            "engines": {
              "node": ">=6"
            }
          },
          "node_modules/type-check": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
            "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
              "prelude-ls": "^1.2.1"
            },
            "engines": {
              "node": ">= 0.8.0"
            }
          },
          "node_modules/update-browserslist-db": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz",
            "integrity": "sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==",
            "dev": true,
            "funding": [
              {
                "type": "opencollective",
                "url": "https://opencollective.com/browserslist"
              },
              {
                "type": "tidelift",
                "url": "https://tidelift.com/funding/github/npm/browserslist"
              },
              {
                "type": "github",
                "url": "https://github.com/sponsors/ai"
              }
            ],
            "license": "MIT",
            "dependencies": {
              "escalade": "^3.2.0",
              "picocolors": "^1.1.1"
            },
            "bin": {
              "update-browserslist-db": "cli.js"
            },
            "peerDependencies": {
              "browserslist": ">= 4.21.0"
            }
          },
          "node_modules/uri-js": {
            "version": "4.4.1",
            "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
            "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
              "punycode": "^2.1.0"
            }
          },
          "node_modules/vite": {
            "version": "6.2.2",
            "resolved": "https://registry.npmjs.org/vite/-/vite-6.2.2.tgz",
            "integrity": "sha512-yW7PeMM+LkDzc7CgJuRLMW2Jz0FxMOsVJ8Lv3gpgW9WLcb9cTW+121UEr1hvmfR7w3SegR5ItvYyzVz1vxNJgQ==",
            "license": "MIT",
            "dependencies": {
              "esbuild": "^0.25.0",
              "postcss": "^8.5.3",
              "rollup": "^4.30.1"
            },
            "bin": {
              "vite": "bin/vite.js"
            },
            "engines": {
              "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
            },
            "funding": {
              "url": "https://github.com/vitejs/vite?sponsor=1"
            },
            "optionalDependencies": {
              "fsevents": "~2.3.3"
            },
            "peerDependencies": {
              "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
              "jiti": ">=1.21.0",
              "less": "*",
              "lightningcss": "^1.21.0",
              "sass": "*",
              "sass-embedded": "*",
              "stylus": "*",
              "sugarss": "*",
              "terser": "^5.16.0",
              "tsx": "^4.8.1",
              "yaml": "^2.4.2"
            },
            "peerDependenciesMeta": {
              "@types/node": {
                "optional": true
              },
              "jiti": {
                "optional": true
              },
              "less": {
                "optional": true
              },
              "lightningcss": {
                "optional": true
              },
              "sass": {
                "optional": true
              },
              "sass-embedded": {
                "optional": true
              },
              "stylus": {
                "optional": true
              },
              "sugarss": {
                "optional": true
              },
              "terser": {
                "optional": true
              },
              "tsx": {
                "optional": true
              },
              "yaml": {
                "optional": true
              }
            }
          },
          "node_modules/which": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
            "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
              "isexe": "^2.0.0"
            },
            "bin": {
              "node-which": "bin/node-which"
            },
            "engines": {
              "node": ">= 8"
            }
          },
          "node_modules/word-wrap": {
            "version": "1.2.5",
            "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
            "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=0.10.0"
            }
          },
          "node_modules/xtend": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
            "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
            "license": "MIT",
            "engines": {
              "node": ">=0.4"
            }
          },
          "node_modules/yallist": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
            "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
            "dev": true,
            "license": "ISC"
          },
          "node_modules/yocto-queue": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
            "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
            "dev": true,
            "license": "MIT",
            "engines": {
              "node": ">=10"
            },
            "funding": {
              "url": "https://github.com/sponsors/sindresorhus"
            }
          }
        }
      }
    hash: 774e94b9291ef9d55723b0ffa67317e8ba3319722631c8ea5c7ab2c0639c5189
    size: 120473
    json:
      name: gpt-4o-mini-tts
      version: 0.0.0
      lockfileVersion: 3
      requires: true
      packages:
        "":
          name: gpt-4o-mini-tts
          version: 0.0.0
          dependencies:
            "@tailwindcss/vite": ^4.0.15
            react: ^19.0.0
            react-dom: ^19.0.0
            react-syntax-highlighter: ^15.6.1
            tailwindcss: ^4.0.15
          devDependencies:
            "@eslint/js": ^9.21.0
            "@types/react": ^19.0.10
            "@types/react-dom": ^19.0.4
            "@vitejs/plugin-react": ^4.3.4
            eslint: ^9.21.0
            eslint-plugin-react-hooks: ^5.1.0
            eslint-plugin-react-refresh: ^0.4.19
            globals: ^15.15.0
            vite: ^6.2.0
        node_modules/@ampproject/remapping:
          version: 2.3.0
          resolved: https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz
          integrity: sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==
          dev: true
          license: Apache-2.0
          dependencies:
            "@jridgewell/gen-mapping": ^0.3.5
            "@jridgewell/trace-mapping": ^0.3.24
          engines:
            node: ">=6.0.0"
        node_modules/@babel/code-frame:
          version: 7.26.2
          resolved: https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz
          integrity: sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==
          dev: true
          license: MIT
          dependencies:
            "@babel/helper-validator-identifier": ^7.25.9
            js-tokens: ^4.0.0
            picocolors: ^1.0.0
          engines:
            node: ">=6.9.0"
        node_modules/@babel/compat-data:
          version: 7.26.8
          resolved: https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.8.tgz
          integrity: sha512-oH5UPLMWR3L2wEFLnFJ1TZXqHufiTKAiLfqw5zkhS4dKXLJ10yVztfil/twG8EDTA4F/tvVNw9nOl4ZMslB8rQ==
          dev: true
          license: MIT
          engines:
            node: ">=6.9.0"
        node_modules/@babel/core:
          version: 7.26.10
          resolved: https://registry.npmjs.org/@babel/core/-/core-7.26.10.tgz
          integrity: sha512-vMqyb7XCDMPvJFFOaT9kxtiRh42GwlZEg1/uIgtZshS5a/8OaduUfCi7kynKgc3Tw/6Uo2D+db9qBttghhmxwQ==
          dev: true
          license: MIT
          dependencies:
            "@ampproject/remapping": ^2.2.0
            "@babel/code-frame": ^7.26.2
            "@babel/generator": ^7.26.10
            "@babel/helper-compilation-targets": ^7.26.5
            "@babel/helper-module-transforms": ^7.26.0
            "@babel/helpers": ^7.26.10
            "@babel/parser": ^7.26.10
            "@babel/template": ^7.26.9
            "@babel/traverse": ^7.26.10
            "@babel/types": ^7.26.10
            convert-source-map: ^2.0.0
            debug: ^4.1.0
            gensync: ^1.0.0-beta.2
            json5: ^2.2.3
            semver: ^6.3.1
          engines:
            node: ">=6.9.0"
          funding:
            type: opencollective
            url: https://opencollective.com/babel
        node_modules/@babel/generator:
          version: 7.26.10
          resolved: https://registry.npmjs.org/@babel/generator/-/generator-7.26.10.tgz
          integrity: sha512-rRHT8siFIXQrAYOYqZQVsAr8vJ+cBNqcVAY6m5V8/4QqzaPl+zDBe6cLEPRDuNOUf3ww8RfJVlOyQMoSI+5Ang==
          dev: true
          license: MIT
          dependencies:
            "@babel/parser": ^7.26.10
            "@babel/types": ^7.26.10
            "@jridgewell/gen-mapping": ^0.3.5
            "@jridgewell/trace-mapping": ^0.3.25
            jsesc: ^3.0.2
          engines:
            node: ">=6.9.0"
        node_modules/@babel/helper-compilation-targets:
          version: 7.26.5
          resolved: https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.26.5.tgz
          integrity: sha512-IXuyn5EkouFJscIDuFF5EsiSolseme1s0CZB+QxVugqJLYmKdxI1VfIBOst0SUu4rnk2Z7kqTwmoO1lp3HIfnA==
          dev: true
          license: MIT
          dependencies:
            "@babel/compat-data": ^7.26.5
            "@babel/helper-validator-option": ^7.25.9
            browserslist: ^4.24.0
            lru-cache: ^5.1.1
            semver: ^6.3.1
          engines:
            node: ">=6.9.0"
        node_modules/@babel/helper-module-imports:
          version: 7.25.9
          resolved: https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz
          integrity: sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==
          dev: true
          license: MIT
          dependencies:
            "@babel/traverse": ^7.25.9
            "@babel/types": ^7.25.9
          engines:
            node: ">=6.9.0"
        node_modules/@babel/helper-module-transforms:
          version: 7.26.0
          resolved: https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz
          integrity: sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==
          dev: true
          license: MIT
          dependencies:
            "@babel/helper-module-imports": ^7.25.9
            "@babel/helper-validator-identifier": ^7.25.9
            "@babel/traverse": ^7.25.9
          engines:
            node: ">=6.9.0"
          peerDependencies:
            "@babel/core": ^7.0.0
        node_modules/@babel/helper-plugin-utils:
          version: 7.26.5
          resolved: https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz
          integrity: sha512-RS+jZcRdZdRFzMyr+wcsaqOmld1/EqTghfaBGQQd/WnRdzdlvSZ//kF7U8VQTxf1ynZ4cjUcYgjVGx13ewNPMg==
          dev: true
          license: MIT
          engines:
            node: ">=6.9.0"
        node_modules/@babel/helper-string-parser:
          version: 7.25.9
          resolved: https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz
          integrity: sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==
          dev: true
          license: MIT
          engines:
            node: ">=6.9.0"
        node_modules/@babel/helper-validator-identifier:
          version: 7.25.9
          resolved: https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz
          integrity: sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==
          dev: true
          license: MIT
          engines:
            node: ">=6.9.0"
        node_modules/@babel/helper-validator-option:
          version: 7.25.9
          resolved: https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz
          integrity: sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==
          dev: true
          license: MIT
          engines:
            node: ">=6.9.0"
        node_modules/@babel/helpers:
          version: 7.26.10
          resolved: https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.10.tgz
          integrity: sha512-UPYc3SauzZ3JGgj87GgZ89JVdC5dj0AoetR5Bw6wj4niittNyFh6+eOGonYvJ1ao6B8lEa3Q3klS7ADZ53bc5g==
          dev: true
          license: MIT
          dependencies:
            "@babel/template": ^7.26.9
            "@babel/types": ^7.26.10
          engines:
            node: ">=6.9.0"
        node_modules/@babel/parser:
          version: 7.26.10
          resolved: https://registry.npmjs.org/@babel/parser/-/parser-7.26.10.tgz
          integrity: sha512-6aQR2zGE/QFi8JpDLjUZEPYOs7+mhKXm86VaKFiLP35JQwQb6bwUE+XbvkH0EptsYhbNBSUGaUBLKqxH1xSgsA==
          dev: true
          license: MIT
          dependencies:
            "@babel/types": ^7.26.10
          bin:
            parser: bin/babel-parser.js
          engines:
            node: ">=6.0.0"
        node_modules/@babel/plugin-transform-react-jsx-self:
          version: 7.25.9
          resolved: https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.9.tgz
          integrity: sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==
          dev: true
          license: MIT
          dependencies:
            "@babel/helper-plugin-utils": ^7.25.9
          engines:
            node: ">=6.9.0"
          peerDependencies:
            "@babel/core": ^7.0.0-0
        node_modules/@babel/plugin-transform-react-jsx-source:
          version: 7.25.9
          resolved: https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.9.tgz
          integrity: sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==
          dev: true
          license: MIT
          dependencies:
            "@babel/helper-plugin-utils": ^7.25.9
          engines:
            node: ">=6.9.0"
          peerDependencies:
            "@babel/core": ^7.0.0-0
        node_modules/@babel/runtime:
          version: 7.26.10
          resolved: https://registry.npmjs.org/@babel/runtime/-/runtime-7.26.10.tgz
          integrity: sha512-2WJMeRQPHKSPemqk/awGrAiuFfzBmOIPXKizAsVhWH9YJqLZ0H+HS4c8loHGgW6utJ3E/ejXQUsiGaQy2NZ9Fw==
          license: MIT
          dependencies:
            regenerator-runtime: ^0.14.0
          engines:
            node: ">=6.9.0"
        node_modules/@babel/template:
          version: 7.26.9
          resolved: https://registry.npmjs.org/@babel/template/-/template-7.26.9.tgz
          integrity: sha512-qyRplbeIpNZhmzOysF/wFMuP9sctmh2cFzRAZOn1YapxBsE1i9bJIY586R/WBLfLcmcBlM8ROBiQURnnNy+zfA==
          dev: true
          license: MIT
          dependencies:
            "@babel/code-frame": ^7.26.2
            "@babel/parser": ^7.26.9
            "@babel/types": ^7.26.9
          engines:
            node: ">=6.9.0"
        node_modules/@babel/traverse:
          version: 7.26.10
          resolved: https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.10.tgz
          integrity: sha512-k8NuDrxr0WrPH5Aupqb2LCVURP/S0vBEn5mK6iH+GIYob66U5EtoZvcdudR2jQ4cmTwhEwW1DLB+Yyas9zjF6A==
          dev: true
          license: MIT
          dependencies:
            "@babel/code-frame": ^7.26.2
            "@babel/generator": ^7.26.10
            "@babel/parser": ^7.26.10
            "@babel/template": ^7.26.9
            "@babel/types": ^7.26.10
            debug: ^4.3.1
            globals: ^11.1.0
          engines:
            node: ">=6.9.0"
        node_modules/@babel/traverse/node_modules/globals:
          version: 11.12.0
          resolved: https://registry.npmjs.org/globals/-/globals-11.12.0.tgz
          integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==
          dev: true
          license: MIT
          engines:
            node: ">=4"
        node_modules/@babel/types:
          version: 7.26.10
          resolved: https://registry.npmjs.org/@babel/types/-/types-7.26.10.tgz
          integrity: sha512-emqcG3vHrpxUKTrxcblR36dcrcoRDvKmnL/dCL6ZsHaShW80qxCAcNhzQZrpeM765VzEos+xOi4s+r4IXzTwdQ==
          dev: true
          license: MIT
          dependencies:
            "@babel/helper-string-parser": ^7.25.9
            "@babel/helper-validator-identifier": ^7.25.9
          engines:
            node: ">=6.9.0"
        node_modules/@esbuild/aix-ppc64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.1.tgz
          integrity: sha512-kfYGy8IdzTGy+z0vFGvExZtxkFlA4zAxgKEahG9KE1ScBjpQnFsNOX8KTU5ojNru5ed5CVoJYXFtoxaq5nFbjQ==
          cpu:
            - ppc64
          license: MIT
          optional: true
          os:
            - aix
          engines:
            node: ">=18"
        node_modules/@esbuild/android-arm:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.1.tgz
          integrity: sha512-dp+MshLYux6j/JjdqVLnMglQlFu+MuVeNrmT5nk6q07wNhCdSnB7QZj+7G8VMUGh1q+vj2Bq8kRsuyA00I/k+Q==
          cpu:
            - arm
          license: MIT
          optional: true
          os:
            - android
          engines:
            node: ">=18"
        node_modules/@esbuild/android-arm64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.1.tgz
          integrity: sha512-50tM0zCJW5kGqgG7fQ7IHvQOcAn9TKiVRuQ/lN0xR+T2lzEFvAi1ZcS8DiksFcEpf1t/GYOeOfCAgDHFpkiSmA==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - android
          engines:
            node: ">=18"
        node_modules/@esbuild/android-x64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.1.tgz
          integrity: sha512-GCj6WfUtNldqUzYkN/ITtlhwQqGWu9S45vUXs7EIYf+7rCiiqH9bCloatO9VhxsL0Pji+PF4Lz2XXCES+Q8hDw==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - android
          engines:
            node: ">=18"
        node_modules/@esbuild/darwin-arm64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.1.tgz
          integrity: sha512-5hEZKPf+nQjYoSr/elb62U19/l1mZDdqidGfmFutVUjjUZrOazAtwK+Kr+3y0C/oeJfLlxo9fXb1w7L+P7E4FQ==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - darwin
          engines:
            node: ">=18"
        node_modules/@esbuild/darwin-x64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.1.tgz
          integrity: sha512-hxVnwL2Dqs3fM1IWq8Iezh0cX7ZGdVhbTfnOy5uURtao5OIVCEyj9xIzemDi7sRvKsuSdtCAhMKarxqtlyVyfA==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - darwin
          engines:
            node: ">=18"
        node_modules/@esbuild/freebsd-arm64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.1.tgz
          integrity: sha512-1MrCZs0fZa2g8E+FUo2ipw6jw5qqQiH+tERoS5fAfKnRx6NXH31tXBKI3VpmLijLH6yriMZsxJtaXUyFt/8Y4A==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - freebsd
          engines:
            node: ">=18"
        node_modules/@esbuild/freebsd-x64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.1.tgz
          integrity: sha512-0IZWLiTyz7nm0xuIs0q1Y3QWJC52R8aSXxe40VUxm6BB1RNmkODtW6LHvWRrGiICulcX7ZvyH6h5fqdLu4gkww==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - freebsd
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-arm:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.1.tgz
          integrity: sha512-NdKOhS4u7JhDKw9G3cY6sWqFcnLITn6SqivVArbzIaf3cemShqfLGHYMx8Xlm/lBit3/5d7kXvriTUGa5YViuQ==
          cpu:
            - arm
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-arm64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.1.tgz
          integrity: sha512-jaN3dHi0/DDPelk0nLcXRm1q7DNJpjXy7yWaWvbfkPvI+7XNSc/lDOnCLN7gzsyzgu6qSAmgSvP9oXAhP973uQ==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-ia32:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.1.tgz
          integrity: sha512-OJykPaF4v8JidKNGz8c/q1lBO44sQNUQtq1KktJXdBLn1hPod5rE/Hko5ugKKZd+D2+o1a9MFGUEIUwO2YfgkQ==
          cpu:
            - ia32
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-loong64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.1.tgz
          integrity: sha512-nGfornQj4dzcq5Vp835oM/o21UMlXzn79KobKlcs3Wz9smwiifknLy4xDCLUU0BWp7b/houtdrgUz7nOGnfIYg==
          cpu:
            - loong64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-mips64el:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.1.tgz
          integrity: sha512-1osBbPEFYwIE5IVB/0g2X6i1qInZa1aIoj1TdL4AaAb55xIIgbg8Doq6a5BzYWgr+tEcDzYH67XVnTmUzL+nXg==
          cpu:
            - mips64el
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-ppc64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.1.tgz
          integrity: sha512-/6VBJOwUf3TdTvJZ82qF3tbLuWsscd7/1w+D9LH0W/SqUgM5/JJD0lrJ1fVIfZsqB6RFmLCe0Xz3fmZc3WtyVg==
          cpu:
            - ppc64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-riscv64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.1.tgz
          integrity: sha512-nSut/Mx5gnilhcq2yIMLMe3Wl4FK5wx/o0QuuCLMtmJn+WeWYoEGDN1ipcN72g1WHsnIbxGXd4i/MF0gTcuAjQ==
          cpu:
            - riscv64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-s390x:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.1.tgz
          integrity: sha512-cEECeLlJNfT8kZHqLarDBQso9a27o2Zd2AQ8USAEoGtejOrCYHNtKP8XQhMDJMtthdF4GBmjR2au3x1udADQQQ==
          cpu:
            - s390x
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/linux-x64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.1.tgz
          integrity: sha512-xbfUhu/gnvSEg+EGovRc+kjBAkrvtk38RlerAzQxvMzlB4fXpCFCeUAYzJvrnhFtdeyVCDANSjJvOvGYoeKzFA==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">=18"
        node_modules/@esbuild/netbsd-arm64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.1.tgz
          integrity: sha512-O96poM2XGhLtpTh+s4+nP7YCCAfb4tJNRVZHfIE7dgmax+yMP2WgMd2OecBuaATHKTHsLWHQeuaxMRnCsH8+5g==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - netbsd
          engines:
            node: ">=18"
        node_modules/@esbuild/netbsd-x64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.1.tgz
          integrity: sha512-X53z6uXip6KFXBQ+Krbx25XHV/NCbzryM6ehOAeAil7X7oa4XIq+394PWGnwaSQ2WRA0KI6PUO6hTO5zeF5ijA==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - netbsd
          engines:
            node: ">=18"
        node_modules/@esbuild/openbsd-arm64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.1.tgz
          integrity: sha512-Na9T3szbXezdzM/Kfs3GcRQNjHzM6GzFBeU1/6IV/npKP5ORtp9zbQjvkDJ47s6BCgaAZnnnu/cY1x342+MvZg==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - openbsd
          engines:
            node: ">=18"
        node_modules/@esbuild/openbsd-x64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.1.tgz
          integrity: sha512-T3H78X2h1tszfRSf+txbt5aOp/e7TAz3ptVKu9Oyir3IAOFPGV6O9c2naym5TOriy1l0nNf6a4X5UXRZSGX/dw==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - openbsd
          engines:
            node: ">=18"
        node_modules/@esbuild/sunos-x64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.1.tgz
          integrity: sha512-2H3RUvcmULO7dIE5EWJH8eubZAI4xw54H1ilJnRNZdeo8dTADEZ21w6J22XBkXqGJbe0+wnNJtw3UXRoLJnFEg==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - sunos
          engines:
            node: ">=18"
        node_modules/@esbuild/win32-arm64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.1.tgz
          integrity: sha512-GE7XvrdOzrb+yVKB9KsRMq+7a2U/K5Cf/8grVFRAGJmfADr/e/ODQ134RK2/eeHqYV5eQRFxb1hY7Nr15fv1NQ==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - win32
          engines:
            node: ">=18"
        node_modules/@esbuild/win32-ia32:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.1.tgz
          integrity: sha512-uOxSJCIcavSiT6UnBhBzE8wy3n0hOkJsBOzy7HDAuTDE++1DJMRRVCPGisULScHL+a/ZwdXPpXD3IyFKjA7K8A==
          cpu:
            - ia32
          license: MIT
          optional: true
          os:
            - win32
          engines:
            node: ">=18"
        node_modules/@esbuild/win32-x64:
          version: 0.25.1
          resolved: https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.1.tgz
          integrity: sha512-Y1EQdcfwMSeQN/ujR5VayLOJ1BHaK+ssyk0AEzPjC+t1lITgsnccPqFjb6V+LsTp/9Iov4ysfjxLaGJ9RPtkVg==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - win32
          engines:
            node: ">=18"
        node_modules/@eslint-community/eslint-utils:
          version: 4.5.1
          resolved: https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.5.1.tgz
          integrity: sha512-soEIOALTfTK6EjmKMMoLugwaP0rzkad90iIWd1hMO9ARkSAyjfMfkRRhLvD5qH7vvM0Cg72pieUfR6yh6XxC4w==
          dev: true
          license: MIT
          dependencies:
            eslint-visitor-keys: ^3.4.3
          engines:
            node: ^12.22.0 || ^14.17.0 || >=16.0.0
          funding:
            url: https://opencollective.com/eslint
          peerDependencies:
            eslint: ^6.0.0 || ^7.0.0 || >=8.0.0
        node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys:
          version: 3.4.3
          resolved: https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz
          integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==
          dev: true
          license: Apache-2.0
          engines:
            node: ^12.22.0 || ^14.17.0 || >=16.0.0
          funding:
            url: https://opencollective.com/eslint
        node_modules/@eslint-community/regexpp:
          version: 4.12.1
          resolved: https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz
          integrity: sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==
          dev: true
          license: MIT
          engines:
            node: ^12.0.0 || ^14.0.0 || >=16.0.0
        node_modules/@eslint/config-array:
          version: 0.19.2
          resolved: https://registry.npmjs.org/@eslint/config-array/-/config-array-0.19.2.tgz
          integrity: sha512-GNKqxfHG2ySmJOBSHg7LxeUx4xpuCoFjacmlCoYWEbaPXLwvfIjixRI12xCQZeULksQb23uiA8F40w5TojpV7w==
          dev: true
          license: Apache-2.0
          dependencies:
            "@eslint/object-schema": ^2.1.6
            debug: ^4.3.1
            minimatch: ^3.1.2
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
        node_modules/@eslint/config-helpers:
          version: 0.2.0
          resolved: https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.2.0.tgz
          integrity: sha512-yJLLmLexii32mGrhW29qvU3QBVTu0GUmEf/J4XsBtVhp4JkIUFN/BjWqTF63yRvGApIDpZm5fa97LtYtINmfeQ==
          dev: true
          license: Apache-2.0
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
        node_modules/@eslint/core:
          version: 0.12.0
          resolved: https://registry.npmjs.org/@eslint/core/-/core-0.12.0.tgz
          integrity: sha512-cmrR6pytBuSMTaBweKoGMwu3EiHiEC+DoyupPmlZ0HxBJBtIxwe+j/E4XPIKNx+Q74c8lXKPwYawBf5glsTkHg==
          dev: true
          license: Apache-2.0
          dependencies:
            "@types/json-schema": ^7.0.15
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
        node_modules/@eslint/eslintrc:
          version: 3.3.1
          resolved: https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.1.tgz
          integrity: sha512-gtF186CXhIl1p4pJNGZw8Yc6RlshoePRvE0X91oPGb3vZ8pM3qOS9W9NGPat9LziaBV7XrJWGylNQXkGcnM3IQ==
          dev: true
          license: MIT
          dependencies:
            ajv: ^6.12.4
            debug: ^4.3.2
            espree: ^10.0.1
            globals: ^14.0.0
            ignore: ^5.2.0
            import-fresh: ^3.2.1
            js-yaml: ^4.1.0
            minimatch: ^3.1.2
            strip-json-comments: ^3.1.1
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
          funding:
            url: https://opencollective.com/eslint
        node_modules/@eslint/eslintrc/node_modules/globals:
          version: 14.0.0
          resolved: https://registry.npmjs.org/globals/-/globals-14.0.0.tgz
          integrity: sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==
          dev: true
          license: MIT
          engines:
            node: ">=18"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/@eslint/js:
          version: 9.23.0
          resolved: https://registry.npmjs.org/@eslint/js/-/js-9.23.0.tgz
          integrity: sha512-35MJ8vCPU0ZMxo7zfev2pypqTwWTofFZO6m4KAtdoFhRpLJUpHTZZ+KB3C7Hb1d7bULYwO4lJXGCi5Se+8OMbw==
          dev: true
          license: MIT
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
        node_modules/@eslint/object-schema:
          version: 2.1.6
          resolved: https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.6.tgz
          integrity: sha512-RBMg5FRL0I0gs51M/guSAj5/e14VQ4tpZnQNWwuDT66P14I43ItmPfIZRhO9fUVIPOAQXU47atlywZ/czoqFPA==
          dev: true
          license: Apache-2.0
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
        node_modules/@eslint/plugin-kit:
          version: 0.2.7
          resolved: https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.2.7.tgz
          integrity: sha512-JubJ5B2pJ4k4yGxaNLdbjrnk9d/iDz6/q8wOilpIowd6PJPgaxCuHBnBszq7Ce2TyMrywm5r4PnKm6V3iiZF+g==
          dev: true
          license: Apache-2.0
          dependencies:
            "@eslint/core": ^0.12.0
            levn: ^0.4.1
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
        node_modules/@humanfs/core:
          version: 0.19.1
          resolved: https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz
          integrity: sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==
          dev: true
          license: Apache-2.0
          engines:
            node: ">=18.18.0"
        node_modules/@humanfs/node:
          version: 0.16.6
          resolved: https://registry.npmjs.org/@humanfs/node/-/node-0.16.6.tgz
          integrity: sha512-YuI2ZHQL78Q5HbhDiBA1X4LmYdXCKCMQIfw0pw7piHJwyREFebJUvrQN4cMssyES6x+vfUbx1CIpaQUKYdQZOw==
          dev: true
          license: Apache-2.0
          dependencies:
            "@humanfs/core": ^0.19.1
            "@humanwhocodes/retry": ^0.3.0
          engines:
            node: ">=18.18.0"
        node_modules/@humanfs/node/node_modules/@humanwhocodes/retry:
          version: 0.3.1
          resolved: https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.3.1.tgz
          integrity: sha512-JBxkERygn7Bv/GbN5Rv8Ul6LVknS+5Bp6RgDC/O8gEBU/yeH5Ui5C/OlWrTb6qct7LjjfT6Re2NxB0ln0yYybA==
          dev: true
          license: Apache-2.0
          engines:
            node: ">=18.18"
          funding:
            type: github
            url: https://github.com/sponsors/nzakas
        node_modules/@humanwhocodes/module-importer:
          version: 1.0.1
          resolved: https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz
          integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==
          dev: true
          license: Apache-2.0
          engines:
            node: ">=12.22"
          funding:
            type: github
            url: https://github.com/sponsors/nzakas
        node_modules/@humanwhocodes/retry:
          version: 0.4.2
          resolved: https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.2.tgz
          integrity: sha512-xeO57FpIu4p1Ri3Jq/EXq4ClRm86dVF2z/+kvFnyqVYRavTZmaFaUBbWCOuuTh0o/g7DSsk6kc2vrS4Vl5oPOQ==
          dev: true
          license: Apache-2.0
          engines:
            node: ">=18.18"
          funding:
            type: github
            url: https://github.com/sponsors/nzakas
        node_modules/@jridgewell/gen-mapping:
          version: 0.3.8
          resolved: https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz
          integrity: sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==
          dev: true
          license: MIT
          dependencies:
            "@jridgewell/set-array": ^1.2.1
            "@jridgewell/sourcemap-codec": ^1.4.10
            "@jridgewell/trace-mapping": ^0.3.24
          engines:
            node: ">=6.0.0"
        node_modules/@jridgewell/resolve-uri:
          version: 3.1.2
          resolved: https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz
          integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==
          dev: true
          license: MIT
          engines:
            node: ">=6.0.0"
        node_modules/@jridgewell/set-array:
          version: 1.2.1
          resolved: https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz
          integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==
          dev: true
          license: MIT
          engines:
            node: ">=6.0.0"
        node_modules/@jridgewell/sourcemap-codec:
          version: 1.5.0
          resolved: https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz
          integrity: sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==
          dev: true
          license: MIT
        node_modules/@jridgewell/trace-mapping:
          version: 0.3.25
          resolved: https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz
          integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==
          dev: true
          license: MIT
          dependencies:
            "@jridgewell/resolve-uri": ^3.1.0
            "@jridgewell/sourcemap-codec": ^1.4.14
        node_modules/@rollup/rollup-android-arm-eabi:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.36.0.tgz
          integrity: sha512-jgrXjjcEwN6XpZXL0HUeOVGfjXhPyxAbbhD0BlXUB+abTOpbPiN5Wb3kOT7yb+uEtATNYF5x5gIfwutmuBA26w==
          cpu:
            - arm
          license: MIT
          optional: true
          os:
            - android
        node_modules/@rollup/rollup-android-arm64:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.36.0.tgz
          integrity: sha512-NyfuLvdPdNUfUNeYKUwPwKsE5SXa2J6bCt2LdB/N+AxShnkpiczi3tcLJrm5mA+eqpy0HmaIY9F6XCa32N5yzg==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - android
        node_modules/@rollup/rollup-darwin-arm64:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.36.0.tgz
          integrity: sha512-JQ1Jk5G4bGrD4pWJQzWsD8I1n1mgPXq33+/vP4sk8j/z/C2siRuxZtaUA7yMTf71TCZTZl/4e1bfzwUmFb3+rw==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - darwin
        node_modules/@rollup/rollup-darwin-x64:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.36.0.tgz
          integrity: sha512-6c6wMZa1lrtiRsbDziCmjE53YbTkxMYhhnWnSW8R/yqsM7a6mSJ3uAVT0t8Y/DGt7gxUWYuFM4bwWk9XCJrFKA==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - darwin
        node_modules/@rollup/rollup-freebsd-arm64:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.36.0.tgz
          integrity: sha512-KXVsijKeJXOl8QzXTsA+sHVDsFOmMCdBRgFmBb+mfEb/7geR7+C8ypAml4fquUt14ZyVXaw2o1FWhqAfOvA4sg==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - freebsd
        node_modules/@rollup/rollup-freebsd-x64:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.36.0.tgz
          integrity: sha512-dVeWq1ebbvByI+ndz4IJcD4a09RJgRYmLccwlQ8bPd4olz3Y213uf1iwvc7ZaxNn2ab7bjc08PrtBgMu6nb4pQ==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - freebsd
        node_modules/@rollup/rollup-linux-arm-gnueabihf:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.36.0.tgz
          integrity: sha512-bvXVU42mOVcF4le6XSjscdXjqx8okv4n5vmwgzcmtvFdifQ5U4dXFYaCB87namDRKlUL9ybVtLQ9ztnawaSzvg==
          cpu:
            - arm
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-arm-musleabihf:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.36.0.tgz
          integrity: sha512-JFIQrDJYrxOnyDQGYkqnNBtjDwTgbasdbUiQvcU8JmGDfValfH1lNpng+4FWlhaVIR4KPkeddYjsVVbmJYvDcg==
          cpu:
            - arm
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-arm64-gnu:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.36.0.tgz
          integrity: sha512-KqjYVh3oM1bj//5X7k79PSCZ6CvaVzb7Qs7VMWS+SlWB5M8p3FqufLP9VNp4CazJ0CsPDLwVD9r3vX7Ci4J56A==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-arm64-musl:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.36.0.tgz
          integrity: sha512-QiGnhScND+mAAtfHqeT+cB1S9yFnNQ/EwCg5yE3MzoaZZnIV0RV9O5alJAoJKX/sBONVKeZdMfO8QSaWEygMhw==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-loongarch64-gnu:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-loongarch64-gnu/-/rollup-linux-loongarch64-gnu-4.36.0.tgz
          integrity: sha512-1ZPyEDWF8phd4FQtTzMh8FQwqzvIjLsl6/84gzUxnMNFBtExBtpL51H67mV9xipuxl1AEAerRBgBwFNpkw8+Lg==
          cpu:
            - loong64
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-powerpc64le-gnu:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.36.0.tgz
          integrity: sha512-VMPMEIUpPFKpPI9GZMhJrtu8rxnp6mJR3ZzQPykq4xc2GmdHj3Q4cA+7avMyegXy4n1v+Qynr9fR88BmyO74tg==
          cpu:
            - ppc64
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-riscv64-gnu:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.36.0.tgz
          integrity: sha512-ttE6ayb/kHwNRJGYLpuAvB7SMtOeQnVXEIpMtAvx3kepFQeowVED0n1K9nAdraHUPJ5hydEMxBpIR7o4nrm8uA==
          cpu:
            - riscv64
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-s390x-gnu:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.36.0.tgz
          integrity: sha512-4a5gf2jpS0AIe7uBjxDeUMNcFmaRTbNv7NxI5xOCs4lhzsVyGR/0qBXduPnoWf6dGC365saTiwag8hP1imTgag==
          cpu:
            - s390x
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-x64-gnu:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.36.0.tgz
          integrity: sha512-5KtoW8UWmwFKQ96aQL3LlRXX16IMwyzMq/jSSVIIyAANiE1doaQsx/KRyhAvpHlPjPiSU/AYX/8m+lQ9VToxFQ==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-linux-x64-musl:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.36.0.tgz
          integrity: sha512-sycrYZPrv2ag4OCvaN5js+f01eoZ2U+RmT5as8vhxiFz+kxwlHrsxOwKPSA8WyS+Wc6Epid9QeI/IkQ9NkgYyQ==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - linux
        node_modules/@rollup/rollup-win32-arm64-msvc:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.36.0.tgz
          integrity: sha512-qbqt4N7tokFwwSVlWDsjfoHgviS3n/vZ8LK0h1uLG9TYIRuUTJC88E1xb3LM2iqZ/WTqNQjYrtmtGmrmmawB6A==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - win32
        node_modules/@rollup/rollup-win32-ia32-msvc:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.36.0.tgz
          integrity: sha512-t+RY0JuRamIocMuQcfwYSOkmdX9dtkr1PbhKW42AMvaDQa+jOdpUYysroTF/nuPpAaQMWp7ye+ndlmmthieJrQ==
          cpu:
            - ia32
          license: MIT
          optional: true
          os:
            - win32
        node_modules/@rollup/rollup-win32-x64-msvc:
          version: 4.36.0
          resolved: https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.36.0.tgz
          integrity: sha512-aRXd7tRZkWLqGbChgcMMDEHjOKudo1kChb1Jt1IfR8cY/KIpgNviLeJy5FUb9IpSuQj8dU2fAYNMPW/hLKOSTw==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - win32
        node_modules/@tailwindcss/node:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/node/-/node-4.0.15.tgz
          integrity: sha512-IODaJjNmiasfZX3IoS+4Em3iu0fD2HS0/tgrnkYfW4hyUor01Smnr5eY3jc4rRgaTDrJlDmBTHbFO0ETTDaxWA==
          license: MIT
          dependencies:
            enhanced-resolve: ^5.18.1
            jiti: ^2.4.2
            tailwindcss: 4.0.15
        node_modules/@tailwindcss/oxide:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.0.15.tgz
          integrity: sha512-e0uHrKfPu7JJGMfjwVNyt5M0u+OP8kUmhACwIRlM+JNBuReDVQ63yAD1NWe5DwJtdaHjugNBil76j+ks3zlk6g==
          license: MIT
          engines:
            node: ">= 10"
          optionalDependencies:
            "@tailwindcss/oxide-android-arm64": 4.0.15
            "@tailwindcss/oxide-darwin-arm64": 4.0.15
            "@tailwindcss/oxide-darwin-x64": 4.0.15
            "@tailwindcss/oxide-freebsd-x64": 4.0.15
            "@tailwindcss/oxide-linux-arm-gnueabihf": 4.0.15
            "@tailwindcss/oxide-linux-arm64-gnu": 4.0.15
            "@tailwindcss/oxide-linux-arm64-musl": 4.0.15
            "@tailwindcss/oxide-linux-x64-gnu": 4.0.15
            "@tailwindcss/oxide-linux-x64-musl": 4.0.15
            "@tailwindcss/oxide-win32-arm64-msvc": 4.0.15
            "@tailwindcss/oxide-win32-x64-msvc": 4.0.15
        node_modules/@tailwindcss/oxide-android-arm64:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.0.15.tgz
          integrity: sha512-EBuyfSKkom7N+CB3A+7c0m4+qzKuiN0WCvzPvj5ZoRu4NlQadg/mthc1tl5k9b5ffRGsbDvP4k21azU4VwVk3Q==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - android
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-darwin-arm64:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.0.15.tgz
          integrity: sha512-ObVAnEpLepMhV9VoO0JSit66jiN5C4YCqW3TflsE9boo2Z7FIjV80RFbgeL2opBhtxbaNEDa6D0/hq/EP03kgQ==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - darwin
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-darwin-x64:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.0.15.tgz
          integrity: sha512-IElwoFhUinOr9MyKmGTPNi1Rwdh68JReFgYWibPWTGuevkHkLWKEflZc2jtI5lWZ5U9JjUnUfnY43I4fEXrc4g==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - darwin
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-freebsd-x64:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.0.15.tgz
          integrity: sha512-6BLLqyx7SIYRBOnTZ8wgfXANLJV5TQd3PevRJZp0vn42eO58A2LykRKdvL1qyPfdpmEVtF+uVOEZ4QTMqDRAWA==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - freebsd
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-linux-arm-gnueabihf:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.0.15.tgz
          integrity: sha512-Zy63EVqO9241Pfg6G0IlRIWyY5vNcWrL5dd2WAKVJZRQVeolXEf1KfjkyeAAlErDj72cnyXObEZjMoPEKHpdNw==
          cpu:
            - arm
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-linux-arm64-gnu:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.0.15.tgz
          integrity: sha512-2NemGQeaTbtIp1Z2wyerbVEJZTkAWhMDOhhR5z/zJ75yMNf8yLnE+sAlyf6yGDNr+1RqvWrRhhCFt7i0CIxe4Q==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-linux-arm64-musl:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.0.15.tgz
          integrity: sha512-342GVnhH/6PkVgKtEzvNVuQ4D+Q7B7qplvuH20Cfz9qEtydG6IQczTZ5IT4JPlh931MG1NUCVxg+CIorr1WJyw==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-linux-x64-gnu:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.0.15.tgz
          integrity: sha512-g76GxlKH124RuGqacCEFc2nbzRl7bBrlC8qDQMiUABkiifDRHOIUjgKbLNG4RuR9hQAD/MKsqZ7A8L08zsoBrw==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-linux-x64-musl:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.0.15.tgz
          integrity: sha512-Gg/Y1XrKEvKpq6WeNt2h8rMIKOBj/W3mNa5NMvkQgMC7iO0+UNLrYmt6zgZufht66HozNpn+tJMbbkZ5a3LczA==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - linux
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-win32-arm64-msvc:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.0.15.tgz
          integrity: sha512-7QtSSJwYZ7ZK1phVgcNZpuf7c7gaCj8Wb0xjliligT5qCGCp79OV2n3SJummVZdw4fbTNKUOYMO7m1GinppZyA==
          cpu:
            - arm64
          license: MIT
          optional: true
          os:
            - win32
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/oxide-win32-x64-msvc:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.0.15.tgz
          integrity: sha512-JQ5H+5MLhOjpgNp6KomouE0ZuKmk3hO5h7/ClMNAQ8gZI2zkli3IH8ZqLbd2DVfXDbdxN2xvooIEeIlkIoSCqw==
          cpu:
            - x64
          license: MIT
          optional: true
          os:
            - win32
          engines:
            node: ">= 10"
        node_modules/@tailwindcss/vite:
          version: 4.0.15
          resolved: https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.0.15.tgz
          integrity: sha512-JRexava80NijI8cTcLXNM3nQL5A0ptTHI8oJLLe8z1MpNB6p5J4WCdJJP8RoyHu8/eB1JzEdbpH86eGfbuaezQ==
          license: MIT
          dependencies:
            "@tailwindcss/node": 4.0.15
            "@tailwindcss/oxide": 4.0.15
            lightningcss: 1.29.2
            tailwindcss: 4.0.15
          peerDependencies:
            vite: ^5.2.0 || ^6
        node_modules/@types/babel__core:
          version: 7.20.5
          resolved: https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz
          integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==
          dev: true
          license: MIT
          dependencies:
            "@babel/parser": ^7.20.7
            "@babel/types": ^7.20.7
            "@types/babel__generator": "*"
            "@types/babel__template": "*"
            "@types/babel__traverse": "*"
        node_modules/@types/babel__generator:
          version: 7.6.8
          resolved: https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz
          integrity: sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==
          dev: true
          license: MIT
          dependencies:
            "@babel/types": ^7.0.0
        node_modules/@types/babel__template:
          version: 7.4.4
          resolved: https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz
          integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==
          dev: true
          license: MIT
          dependencies:
            "@babel/parser": ^7.1.0
            "@babel/types": ^7.0.0
        node_modules/@types/babel__traverse:
          version: 7.20.6
          resolved: https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz
          integrity: sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==
          dev: true
          license: MIT
          dependencies:
            "@babel/types": ^7.20.7
        node_modules/@types/estree:
          version: 1.0.6
          resolved: https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz
          integrity: sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==
          license: MIT
        node_modules/@types/hast:
          version: 2.3.10
          resolved: https://registry.npmjs.org/@types/hast/-/hast-2.3.10.tgz
          integrity: sha512-McWspRw8xx8J9HurkVBfYj0xKoE25tOFlHGdx4MJ5xORQrMGZNqJhVQWaIbm6Oyla5kYOXtDiopzKRJzEOkwJw==
          license: MIT
          dependencies:
            "@types/unist": ^2
        node_modules/@types/json-schema:
          version: 7.0.15
          resolved: https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz
          integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==
          dev: true
          license: MIT
        node_modules/@types/react:
          version: 19.0.12
          resolved: https://registry.npmjs.org/@types/react/-/react-19.0.12.tgz
          integrity: sha512-V6Ar115dBDrjbtXSrS+/Oruobc+qVbbUxDFC1RSbRqLt5SYvxxyIDrSC85RWml54g+jfNeEMZhEj7wW07ONQhA==
          dev: true
          license: MIT
          dependencies:
            csstype: ^3.0.2
        node_modules/@types/react-dom:
          version: 19.0.4
          resolved: https://registry.npmjs.org/@types/react-dom/-/react-dom-19.0.4.tgz
          integrity: sha512-4fSQ8vWFkg+TGhePfUzVmat3eC14TXYSsiiDSLI0dVLsrm9gZFABjPy/Qu6TKgl1tq1Bu1yDsuQgY3A3DOjCcg==
          dev: true
          license: MIT
          peerDependencies:
            "@types/react": ^19.0.0
        node_modules/@types/unist:
          version: 2.0.11
          resolved: https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz
          integrity: sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==
          license: MIT
        node_modules/@vitejs/plugin-react:
          version: 4.3.4
          resolved: https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.4.tgz
          integrity: sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==
          dev: true
          license: MIT
          dependencies:
            "@babel/core": ^7.26.0
            "@babel/plugin-transform-react-jsx-self": ^7.25.9
            "@babel/plugin-transform-react-jsx-source": ^7.25.9
            "@types/babel__core": ^7.20.5
            react-refresh: ^0.14.2
          engines:
            node: ^14.18.0 || >=16.0.0
          peerDependencies:
            vite: ^4.2.0 || ^5.0.0 || ^6.0.0
        node_modules/acorn:
          version: 8.14.1
          resolved: https://registry.npmjs.org/acorn/-/acorn-8.14.1.tgz
          integrity: sha512-OvQ/2pUDKmgfCg++xsTX1wGxfTaszcHVcTctW4UJB4hibJx2HXxxO5UmVgyjMa+ZDsiaf5wWLXYpRWMmBI0QHg==
          dev: true
          license: MIT
          bin:
            acorn: bin/acorn
          engines:
            node: ">=0.4.0"
        node_modules/acorn-jsx:
          version: 5.3.2
          resolved: https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz
          integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==
          dev: true
          license: MIT
          peerDependencies:
            acorn: ^6.0.0 || ^7.0.0 || ^8.0.0
        node_modules/ajv:
          version: 6.12.6
          resolved: https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz
          integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==
          dev: true
          license: MIT
          dependencies:
            fast-deep-equal: ^3.1.1
            fast-json-stable-stringify: ^2.0.0
            json-schema-traverse: ^0.4.1
            uri-js: ^4.2.2
          funding:
            type: github
            url: https://github.com/sponsors/epoberezkin
        node_modules/ansi-styles:
          version: 4.3.0
          resolved: https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz
          integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==
          dev: true
          license: MIT
          dependencies:
            color-convert: ^2.0.1
          engines:
            node: ">=8"
          funding:
            url: https://github.com/chalk/ansi-styles?sponsor=1
        node_modules/argparse:
          version: 2.0.1
          resolved: https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz
          integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==
          dev: true
          license: Python-2.0
        node_modules/balanced-match:
          version: 1.0.2
          resolved: https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz
          integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==
          dev: true
          license: MIT
        node_modules/brace-expansion:
          version: 1.1.11
          resolved: https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz
          integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==
          dev: true
          license: MIT
          dependencies:
            balanced-match: ^1.0.0
            concat-map: 0.0.1
        node_modules/browserslist:
          version: 4.24.4
          resolved: https://registry.npmjs.org/browserslist/-/browserslist-4.24.4.tgz
          integrity: sha512-KDi1Ny1gSePi1vm0q4oxSF8b4DR44GF4BbmS2YdhPLOEqd8pDviZOGH/GsmRwoWJ2+5Lr085X7naowMwKHDG1A==
          dev: true
          funding:
            - type: opencollective
              url: https://opencollective.com/browserslist
            - type: tidelift
              url: https://tidelift.com/funding/github/npm/browserslist
            - type: github
              url: https://github.com/sponsors/ai
          license: MIT
          dependencies:
            caniuse-lite: ^1.0.30001688
            electron-to-chromium: ^1.5.73
            node-releases: ^2.0.19
            update-browserslist-db: ^1.1.1
          bin:
            browserslist: cli.js
          engines:
            node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7
        node_modules/callsites:
          version: 3.1.0
          resolved: https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz
          integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==
          dev: true
          license: MIT
          engines:
            node: ">=6"
        node_modules/caniuse-lite:
          version: 1.0.30001706
          resolved: https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001706.tgz
          integrity: sha512-3ZczoTApMAZwPKYWmwVbQMFpXBDds3/0VciVoUwPUbldlYyVLmRVuRs/PcUZtHpbLRpzzDvrvnFuREsGt6lUug==
          dev: true
          funding:
            - type: opencollective
              url: https://opencollective.com/browserslist
            - type: tidelift
              url: https://tidelift.com/funding/github/npm/caniuse-lite
            - type: github
              url: https://github.com/sponsors/ai
          license: CC-BY-4.0
        node_modules/chalk:
          version: 4.1.2
          resolved: https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz
          integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==
          dev: true
          license: MIT
          dependencies:
            ansi-styles: ^4.1.0
            supports-color: ^7.1.0
          engines:
            node: ">=10"
          funding:
            url: https://github.com/chalk/chalk?sponsor=1
        node_modules/character-entities:
          version: 1.2.4
          resolved: https://registry.npmjs.org/character-entities/-/character-entities-1.2.4.tgz
          integrity: sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw==
          license: MIT
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/character-entities-legacy:
          version: 1.1.4
          resolved: https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-1.1.4.tgz
          integrity: sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA==
          license: MIT
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/character-reference-invalid:
          version: 1.1.4
          resolved: https://registry.npmjs.org/character-reference-invalid/-/character-reference-invalid-1.1.4.tgz
          integrity: sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg==
          license: MIT
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/color-convert:
          version: 2.0.1
          resolved: https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz
          integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==
          dev: true
          license: MIT
          dependencies:
            color-name: ~1.1.4
          engines:
            node: ">=7.0.0"
        node_modules/color-name:
          version: 1.1.4
          resolved: https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz
          integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==
          dev: true
          license: MIT
        node_modules/comma-separated-tokens:
          version: 1.0.8
          resolved: https://registry.npmjs.org/comma-separated-tokens/-/comma-separated-tokens-1.0.8.tgz
          integrity: sha512-GHuDRO12Sypu2cV70d1dkA2EUmXHgntrzbpvOB+Qy+49ypNfGgFQIC2fhhXbnyrJRynDCAARsT7Ou0M6hirpfw==
          license: MIT
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/concat-map:
          version: 0.0.1
          resolved: https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz
          integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==
          dev: true
          license: MIT
        node_modules/convert-source-map:
          version: 2.0.0
          resolved: https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz
          integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==
          dev: true
          license: MIT
        node_modules/cross-spawn:
          version: 7.0.6
          resolved: https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz
          integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==
          dev: true
          license: MIT
          dependencies:
            path-key: ^3.1.0
            shebang-command: ^2.0.0
            which: ^2.0.1
          engines:
            node: ">= 8"
        node_modules/csstype:
          version: 3.1.3
          resolved: https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz
          integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==
          dev: true
          license: MIT
        node_modules/debug:
          version: 4.4.0
          resolved: https://registry.npmjs.org/debug/-/debug-4.4.0.tgz
          integrity: sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==
          dev: true
          license: MIT
          dependencies:
            ms: ^2.1.3
          engines:
            node: ">=6.0"
          peerDependenciesMeta:
            supports-color:
              optional: true
        node_modules/deep-is:
          version: 0.1.4
          resolved: https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz
          integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==
          dev: true
          license: MIT
        node_modules/detect-libc:
          version: 2.0.3
          resolved: https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.3.tgz
          integrity: sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==
          license: Apache-2.0
          engines:
            node: ">=8"
        node_modules/electron-to-chromium:
          version: 1.5.123
          resolved: https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.123.tgz
          integrity: sha512-refir3NlutEZqlKaBLK0tzlVLe5P2wDKS7UQt/3SpibizgsRAPOsqQC3ffw1nlv3ze5gjRQZYHoPymgVZkplFA==
          dev: true
          license: ISC
        node_modules/enhanced-resolve:
          version: 5.18.1
          resolved: https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.1.tgz
          integrity: sha512-ZSW3ma5GkcQBIpwZTSRAI8N71Uuwgs93IezB7mf7R60tC8ZbJideoDNKjHn2O9KIlx6rkGTTEk1xUCK2E1Y2Yg==
          license: MIT
          dependencies:
            graceful-fs: ^4.2.4
            tapable: ^2.2.0
          engines:
            node: ">=10.13.0"
        node_modules/esbuild:
          version: 0.25.1
          resolved: https://registry.npmjs.org/esbuild/-/esbuild-0.25.1.tgz
          integrity: sha512-BGO5LtrGC7vxnqucAe/rmvKdJllfGaYWdyABvyMoXQlfYMb2bbRuReWR5tEGE//4LcNJj9XrkovTqNYRFZHAMQ==
          hasInstallScript: true
          license: MIT
          bin:
            esbuild: bin/esbuild
          engines:
            node: ">=18"
          optionalDependencies:
            "@esbuild/aix-ppc64": 0.25.1
            "@esbuild/android-arm": 0.25.1
            "@esbuild/android-arm64": 0.25.1
            "@esbuild/android-x64": 0.25.1
            "@esbuild/darwin-arm64": 0.25.1
            "@esbuild/darwin-x64": 0.25.1
            "@esbuild/freebsd-arm64": 0.25.1
            "@esbuild/freebsd-x64": 0.25.1
            "@esbuild/linux-arm": 0.25.1
            "@esbuild/linux-arm64": 0.25.1
            "@esbuild/linux-ia32": 0.25.1
            "@esbuild/linux-loong64": 0.25.1
            "@esbuild/linux-mips64el": 0.25.1
            "@esbuild/linux-ppc64": 0.25.1
            "@esbuild/linux-riscv64": 0.25.1
            "@esbuild/linux-s390x": 0.25.1
            "@esbuild/linux-x64": 0.25.1
            "@esbuild/netbsd-arm64": 0.25.1
            "@esbuild/netbsd-x64": 0.25.1
            "@esbuild/openbsd-arm64": 0.25.1
            "@esbuild/openbsd-x64": 0.25.1
            "@esbuild/sunos-x64": 0.25.1
            "@esbuild/win32-arm64": 0.25.1
            "@esbuild/win32-ia32": 0.25.1
            "@esbuild/win32-x64": 0.25.1
        node_modules/escalade:
          version: 3.2.0
          resolved: https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz
          integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==
          dev: true
          license: MIT
          engines:
            node: ">=6"
        node_modules/escape-string-regexp:
          version: 4.0.0
          resolved: https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz
          integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==
          dev: true
          license: MIT
          engines:
            node: ">=10"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/eslint:
          version: 9.23.0
          resolved: https://registry.npmjs.org/eslint/-/eslint-9.23.0.tgz
          integrity: sha512-jV7AbNoFPAY1EkFYpLq5bslU9NLNO8xnEeQXwErNibVryjk67wHVmddTBilc5srIttJDBrB0eMHKZBFbSIABCw==
          dev: true
          license: MIT
          dependencies:
            "@eslint-community/eslint-utils": ^4.2.0
            "@eslint-community/regexpp": ^4.12.1
            "@eslint/config-array": ^0.19.2
            "@eslint/config-helpers": ^0.2.0
            "@eslint/core": ^0.12.0
            "@eslint/eslintrc": ^3.3.1
            "@eslint/js": 9.23.0
            "@eslint/plugin-kit": ^0.2.7
            "@humanfs/node": ^0.16.6
            "@humanwhocodes/module-importer": ^1.0.1
            "@humanwhocodes/retry": ^0.4.2
            "@types/estree": ^1.0.6
            "@types/json-schema": ^7.0.15
            ajv: ^6.12.4
            chalk: ^4.0.0
            cross-spawn: ^7.0.6
            debug: ^4.3.2
            escape-string-regexp: ^4.0.0
            eslint-scope: ^8.3.0
            eslint-visitor-keys: ^4.2.0
            espree: ^10.3.0
            esquery: ^1.5.0
            esutils: ^2.0.2
            fast-deep-equal: ^3.1.3
            file-entry-cache: ^8.0.0
            find-up: ^5.0.0
            glob-parent: ^6.0.2
            ignore: ^5.2.0
            imurmurhash: ^0.1.4
            is-glob: ^4.0.0
            json-stable-stringify-without-jsonify: ^1.0.1
            lodash.merge: ^4.6.2
            minimatch: ^3.1.2
            natural-compare: ^1.4.0
            optionator: ^0.9.3
          bin:
            eslint: bin/eslint.js
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
          funding:
            url: https://eslint.org/donate
          peerDependencies:
            jiti: "*"
          peerDependenciesMeta:
            jiti:
              optional: true
        node_modules/eslint-plugin-react-hooks:
          version: 5.2.0
          resolved: https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.2.0.tgz
          integrity: sha512-+f15FfK64YQwZdJNELETdn5ibXEUQmW1DZL6KXhNnc2heoy/sg9VJJeT7n8TlMWouzWqSWavFkIhHyIbIAEapg==
          dev: true
          license: MIT
          engines:
            node: ">=10"
          peerDependencies:
            eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0
        node_modules/eslint-plugin-react-refresh:
          version: 0.4.19
          resolved: https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.19.tgz
          integrity: sha512-eyy8pcr/YxSYjBoqIFSrlbn9i/xvxUFa8CjzAYo9cFjgGXqq1hyjihcpZvxRLalpaWmueWR81xn7vuKmAFijDQ==
          dev: true
          license: MIT
          peerDependencies:
            eslint: ">=8.40"
        node_modules/eslint-scope:
          version: 8.3.0
          resolved: https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.3.0.tgz
          integrity: sha512-pUNxi75F8MJ/GdeKtVLSbYg4ZI34J6C0C7sbL4YOp2exGwen7ZsuBqKzUhXd0qMQ362yET3z+uPwKeg/0C2XCQ==
          dev: true
          license: BSD-2-Clause
          dependencies:
            esrecurse: ^4.3.0
            estraverse: ^5.2.0
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
          funding:
            url: https://opencollective.com/eslint
        node_modules/eslint-visitor-keys:
          version: 4.2.0
          resolved: https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.0.tgz
          integrity: sha512-UyLnSehNt62FFhSwjZlHmeokpRK59rcz29j+F1/aDgbkbRTk7wIc9XzdoasMUbRNKDM0qQt/+BJ4BrpFeABemw==
          dev: true
          license: Apache-2.0
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
          funding:
            url: https://opencollective.com/eslint
        node_modules/espree:
          version: 10.3.0
          resolved: https://registry.npmjs.org/espree/-/espree-10.3.0.tgz
          integrity: sha512-0QYC8b24HWY8zjRnDTL6RiHfDbAWn63qb4LMj1Z4b076A4une81+z03Kg7l7mn/48PUTqoLptSXez8oknU8Clg==
          dev: true
          license: BSD-2-Clause
          dependencies:
            acorn: ^8.14.0
            acorn-jsx: ^5.3.2
            eslint-visitor-keys: ^4.2.0
          engines:
            node: ^18.18.0 || ^20.9.0 || >=21.1.0
          funding:
            url: https://opencollective.com/eslint
        node_modules/esquery:
          version: 1.6.0
          resolved: https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz
          integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==
          dev: true
          license: BSD-3-Clause
          dependencies:
            estraverse: ^5.1.0
          engines:
            node: ">=0.10"
        node_modules/esrecurse:
          version: 4.3.0
          resolved: https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz
          integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==
          dev: true
          license: BSD-2-Clause
          dependencies:
            estraverse: ^5.2.0
          engines:
            node: ">=4.0"
        node_modules/estraverse:
          version: 5.3.0
          resolved: https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz
          integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==
          dev: true
          license: BSD-2-Clause
          engines:
            node: ">=4.0"
        node_modules/esutils:
          version: 2.0.3
          resolved: https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz
          integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==
          dev: true
          license: BSD-2-Clause
          engines:
            node: ">=0.10.0"
        node_modules/fast-deep-equal:
          version: 3.1.3
          resolved: https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz
          integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==
          dev: true
          license: MIT
        node_modules/fast-json-stable-stringify:
          version: 2.1.0
          resolved: https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz
          integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==
          dev: true
          license: MIT
        node_modules/fast-levenshtein:
          version: 2.0.6
          resolved: https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz
          integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==
          dev: true
          license: MIT
        node_modules/fault:
          version: 1.0.4
          resolved: https://registry.npmjs.org/fault/-/fault-1.0.4.tgz
          integrity: sha512-CJ0HCB5tL5fYTEA7ToAq5+kTwd++Borf1/bifxd9iT70QcXr4MRrO3Llf8Ifs70q+SJcGHFtnIE/Nw6giCtECA==
          license: MIT
          dependencies:
            format: ^0.2.0
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/file-entry-cache:
          version: 8.0.0
          resolved: https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz
          integrity: sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==
          dev: true
          license: MIT
          dependencies:
            flat-cache: ^4.0.0
          engines:
            node: ">=16.0.0"
        node_modules/find-up:
          version: 5.0.0
          resolved: https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz
          integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==
          dev: true
          license: MIT
          dependencies:
            locate-path: ^6.0.0
            path-exists: ^4.0.0
          engines:
            node: ">=10"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/flat-cache:
          version: 4.0.1
          resolved: https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz
          integrity: sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==
          dev: true
          license: MIT
          dependencies:
            flatted: ^3.2.9
            keyv: ^4.5.4
          engines:
            node: ">=16"
        node_modules/flatted:
          version: 3.3.3
          resolved: https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz
          integrity: sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==
          dev: true
          license: ISC
        node_modules/format:
          version: 0.2.2
          resolved: https://registry.npmjs.org/format/-/format-0.2.2.tgz
          integrity: sha512-wzsgA6WOq+09wrU1tsJ09udeR/YZRaeArL9e1wPbFg3GG2yDnC2ldKpxs4xunpFF9DgqCqOIra3bc1HWrJ37Ww==
          engines:
            node: ">=0.4.x"
        node_modules/fsevents:
          version: 2.3.3
          resolved: https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz
          integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==
          hasInstallScript: true
          license: MIT
          optional: true
          os:
            - darwin
          engines:
            node: ^8.16.0 || ^10.6.0 || >=11.0.0
        node_modules/gensync:
          version: 1.0.0-beta.2
          resolved: https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz
          integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==
          dev: true
          license: MIT
          engines:
            node: ">=6.9.0"
        node_modules/glob-parent:
          version: 6.0.2
          resolved: https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz
          integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==
          dev: true
          license: ISC
          dependencies:
            is-glob: ^4.0.3
          engines:
            node: ">=10.13.0"
        node_modules/globals:
          version: 15.15.0
          resolved: https://registry.npmjs.org/globals/-/globals-15.15.0.tgz
          integrity: sha512-7ACyT3wmyp3I61S4fG682L0VA2RGD9otkqGJIwNUMF1SWUombIIk+af1unuDYgMm082aHYwD+mzJvv9Iu8dsgg==
          dev: true
          license: MIT
          engines:
            node: ">=18"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/graceful-fs:
          version: 4.2.11
          resolved: https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz
          integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==
          license: ISC
        node_modules/has-flag:
          version: 4.0.0
          resolved: https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz
          integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==
          dev: true
          license: MIT
          engines:
            node: ">=8"
        node_modules/hast-util-parse-selector:
          version: 2.2.5
          resolved: https://registry.npmjs.org/hast-util-parse-selector/-/hast-util-parse-selector-2.2.5.tgz
          integrity: sha512-7j6mrk/qqkSehsM92wQjdIgWM2/BW61u/53G6xmC8i1OmEdKLHbk419QKQUjz6LglWsfqoiHmyMRkP1BGjecNQ==
          license: MIT
          funding:
            type: opencollective
            url: https://opencollective.com/unified
        node_modules/hastscript:
          version: 6.0.0
          resolved: https://registry.npmjs.org/hastscript/-/hastscript-6.0.0.tgz
          integrity: sha512-nDM6bvd7lIqDUiYEiu5Sl/+6ReP0BMk/2f4U/Rooccxkj0P5nm+acM5PrGJ/t5I8qPGiqZSE6hVAwZEdZIvP4w==
          license: MIT
          dependencies:
            "@types/hast": ^2.0.0
            comma-separated-tokens: ^1.0.0
            hast-util-parse-selector: ^2.0.0
            property-information: ^5.0.0
            space-separated-tokens: ^1.0.0
          funding:
            type: opencollective
            url: https://opencollective.com/unified
        node_modules/highlight.js:
          version: 10.7.3
          resolved: https://registry.npmjs.org/highlight.js/-/highlight.js-10.7.3.tgz
          integrity: sha512-tzcUFauisWKNHaRkN4Wjl/ZA07gENAjFl3J/c480dprkGTg5EQstgaNFqBfUqCq54kZRIEcreTsAgF/m2quD7A==
          license: BSD-3-Clause
          engines:
            node: "*"
        node_modules/highlightjs-vue:
          version: 1.0.0
          resolved: https://registry.npmjs.org/highlightjs-vue/-/highlightjs-vue-1.0.0.tgz
          integrity: sha512-PDEfEF102G23vHmPhLyPboFCD+BkMGu+GuJe2d9/eH4FsCwvgBpnc9n0pGE+ffKdph38s6foEZiEjdgHdzp+IA==
          license: CC0-1.0
        node_modules/ignore:
          version: 5.3.2
          resolved: https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz
          integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==
          dev: true
          license: MIT
          engines:
            node: ">= 4"
        node_modules/import-fresh:
          version: 3.3.1
          resolved: https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz
          integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==
          dev: true
          license: MIT
          dependencies:
            parent-module: ^1.0.0
            resolve-from: ^4.0.0
          engines:
            node: ">=6"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/imurmurhash:
          version: 0.1.4
          resolved: https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz
          integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==
          dev: true
          license: MIT
          engines:
            node: ">=0.8.19"
        node_modules/is-alphabetical:
          version: 1.0.4
          resolved: https://registry.npmjs.org/is-alphabetical/-/is-alphabetical-1.0.4.tgz
          integrity: sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg==
          license: MIT
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/is-alphanumerical:
          version: 1.0.4
          resolved: https://registry.npmjs.org/is-alphanumerical/-/is-alphanumerical-1.0.4.tgz
          integrity: sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==
          license: MIT
          dependencies:
            is-alphabetical: ^1.0.0
            is-decimal: ^1.0.0
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/is-decimal:
          version: 1.0.4
          resolved: https://registry.npmjs.org/is-decimal/-/is-decimal-1.0.4.tgz
          integrity: sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw==
          license: MIT
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/is-extglob:
          version: 2.1.1
          resolved: https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz
          integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==
          dev: true
          license: MIT
          engines:
            node: ">=0.10.0"
        node_modules/is-glob:
          version: 4.0.3
          resolved: https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz
          integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==
          dev: true
          license: MIT
          dependencies:
            is-extglob: ^2.1.1
          engines:
            node: ">=0.10.0"
        node_modules/is-hexadecimal:
          version: 1.0.4
          resolved: https://registry.npmjs.org/is-hexadecimal/-/is-hexadecimal-1.0.4.tgz
          integrity: sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw==
          license: MIT
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/isexe:
          version: 2.0.0
          resolved: https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz
          integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==
          dev: true
          license: ISC
        node_modules/jiti:
          version: 2.4.2
          resolved: https://registry.npmjs.org/jiti/-/jiti-2.4.2.tgz
          integrity: sha512-rg9zJN+G4n2nfJl5MW3BMygZX56zKPNVEYYqq7adpmMh4Jn2QNEwhvQlFy6jPVdcod7txZtKHWnyZiA3a0zP7A==
          license: MIT
          bin:
            jiti: lib/jiti-cli.mjs
        node_modules/js-tokens:
          version: 4.0.0
          resolved: https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz
          integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==
          dev: true
          license: MIT
        node_modules/js-yaml:
          version: 4.1.0
          resolved: https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz
          integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==
          dev: true
          license: MIT
          dependencies:
            argparse: ^2.0.1
          bin:
            js-yaml: bin/js-yaml.js
        node_modules/jsesc:
          version: 3.1.0
          resolved: https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz
          integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==
          dev: true
          license: MIT
          bin:
            jsesc: bin/jsesc
          engines:
            node: ">=6"
        node_modules/json-buffer:
          version: 3.0.1
          resolved: https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz
          integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==
          dev: true
          license: MIT
        node_modules/json-schema-traverse:
          version: 0.4.1
          resolved: https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz
          integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==
          dev: true
          license: MIT
        node_modules/json-stable-stringify-without-jsonify:
          version: 1.0.1
          resolved: https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz
          integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==
          dev: true
          license: MIT
        node_modules/json5:
          version: 2.2.3
          resolved: https://registry.npmjs.org/json5/-/json5-2.2.3.tgz
          integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==
          dev: true
          license: MIT
          bin:
            json5: lib/cli.js
          engines:
            node: ">=6"
        node_modules/keyv:
          version: 4.5.4
          resolved: https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz
          integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==
          dev: true
          license: MIT
          dependencies:
            json-buffer: 3.0.1
        node_modules/levn:
          version: 0.4.1
          resolved: https://registry.npmjs.org/levn/-/levn-0.4.1.tgz
          integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==
          dev: true
          license: MIT
          dependencies:
            prelude-ls: ^1.2.1
            type-check: ~0.4.0
          engines:
            node: ">= 0.8.0"
        node_modules/lightningcss:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss/-/lightningcss-1.29.2.tgz
          integrity: sha512-6b6gd/RUXKaw5keVdSEtqFVdzWnU5jMxTUjA2bVcMNPLwSQ08Sv/UodBVtETLCn7k4S1Ibxwh7k68IwLZPgKaA==
          license: MPL-2.0
          dependencies:
            detect-libc: ^2.0.3
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
          optionalDependencies:
            lightningcss-darwin-arm64: 1.29.2
            lightningcss-darwin-x64: 1.29.2
            lightningcss-freebsd-x64: 1.29.2
            lightningcss-linux-arm-gnueabihf: 1.29.2
            lightningcss-linux-arm64-gnu: 1.29.2
            lightningcss-linux-arm64-musl: 1.29.2
            lightningcss-linux-x64-gnu: 1.29.2
            lightningcss-linux-x64-musl: 1.29.2
            lightningcss-win32-arm64-msvc: 1.29.2
            lightningcss-win32-x64-msvc: 1.29.2
        node_modules/lightningcss-darwin-arm64:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.29.2.tgz
          integrity: sha512-cK/eMabSViKn/PG8U/a7aCorpeKLMlK0bQeNHmdb7qUnBkNPnL+oV5DjJUo0kqWsJUapZsM4jCfYItbqBDvlcA==
          cpu:
            - arm64
          license: MPL-2.0
          optional: true
          os:
            - darwin
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-darwin-x64:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.29.2.tgz
          integrity: sha512-j5qYxamyQw4kDXX5hnnCKMf3mLlHvG44f24Qyi2965/Ycz829MYqjrVg2H8BidybHBp9kom4D7DR5VqCKDXS0w==
          cpu:
            - x64
          license: MPL-2.0
          optional: true
          os:
            - darwin
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-freebsd-x64:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.29.2.tgz
          integrity: sha512-wDk7M2tM78Ii8ek9YjnY8MjV5f5JN2qNVO+/0BAGZRvXKtQrBC4/cn4ssQIpKIPP44YXw6gFdpUF+Ps+RGsCwg==
          cpu:
            - x64
          license: MPL-2.0
          optional: true
          os:
            - freebsd
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-linux-arm-gnueabihf:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.29.2.tgz
          integrity: sha512-IRUrOrAF2Z+KExdExe3Rz7NSTuuJ2HvCGlMKoquK5pjvo2JY4Rybr+NrKnq0U0hZnx5AnGsuFHjGnNT14w26sg==
          cpu:
            - arm
          license: MPL-2.0
          optional: true
          os:
            - linux
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-linux-arm64-gnu:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.29.2.tgz
          integrity: sha512-KKCpOlmhdjvUTX/mBuaKemp0oeDIBBLFiU5Fnqxh1/DZ4JPZi4evEH7TKoSBFOSOV3J7iEmmBaw/8dpiUvRKlQ==
          cpu:
            - arm64
          license: MPL-2.0
          optional: true
          os:
            - linux
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-linux-arm64-musl:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.29.2.tgz
          integrity: sha512-Q64eM1bPlOOUgxFmoPUefqzY1yV3ctFPE6d/Vt7WzLW4rKTv7MyYNky+FWxRpLkNASTnKQUaiMJ87zNODIrrKQ==
          cpu:
            - arm64
          license: MPL-2.0
          optional: true
          os:
            - linux
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-linux-x64-gnu:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.29.2.tgz
          integrity: sha512-0v6idDCPG6epLXtBH/RPkHvYx74CVziHo6TMYga8O2EiQApnUPZsbR9nFNrg2cgBzk1AYqEd95TlrsL7nYABQg==
          cpu:
            - x64
          license: MPL-2.0
          optional: true
          os:
            - linux
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-linux-x64-musl:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.29.2.tgz
          integrity: sha512-rMpz2yawkgGT8RULc5S4WiZopVMOFWjiItBT7aSfDX4NQav6M44rhn5hjtkKzB+wMTRlLLqxkeYEtQ3dd9696w==
          cpu:
            - x64
          license: MPL-2.0
          optional: true
          os:
            - linux
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-win32-arm64-msvc:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.29.2.tgz
          integrity: sha512-nL7zRW6evGQqYVu/bKGK+zShyz8OVzsCotFgc7judbt6wnB2KbiKKJwBE4SGoDBQ1O94RjW4asrCjQL4i8Fhbw==
          cpu:
            - arm64
          license: MPL-2.0
          optional: true
          os:
            - win32
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/lightningcss-win32-x64-msvc:
          version: 1.29.2
          resolved: https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.29.2.tgz
          integrity: sha512-EdIUW3B2vLuHmv7urfzMI/h2fmlnOQBk1xlsDxkN1tCWKjNFjfLhGxYk8C8mzpSfr+A6jFFIi8fU6LbQGsRWjA==
          cpu:
            - x64
          license: MPL-2.0
          optional: true
          os:
            - win32
          engines:
            node: ">= 12.0.0"
          funding:
            type: opencollective
            url: https://opencollective.com/parcel
        node_modules/locate-path:
          version: 6.0.0
          resolved: https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz
          integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==
          dev: true
          license: MIT
          dependencies:
            p-locate: ^5.0.0
          engines:
            node: ">=10"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/lodash.merge:
          version: 4.6.2
          resolved: https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz
          integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==
          dev: true
          license: MIT
        node_modules/lowlight:
          version: 1.20.0
          resolved: https://registry.npmjs.org/lowlight/-/lowlight-1.20.0.tgz
          integrity: sha512-8Ktj+prEb1RoCPkEOrPMYUN/nCggB7qAWe3a7OpMjWQkh3l2RD5wKRQ+o8Q8YuI9RG/xs95waaI/E6ym/7NsTw==
          license: MIT
          dependencies:
            fault: ^1.0.0
            highlight.js: ~10.7.0
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/lru-cache:
          version: 5.1.1
          resolved: https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz
          integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==
          dev: true
          license: ISC
          dependencies:
            yallist: ^3.0.2
        node_modules/minimatch:
          version: 3.1.2
          resolved: https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz
          integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==
          dev: true
          license: ISC
          dependencies:
            brace-expansion: ^1.1.7
          engines:
            node: "*"
        node_modules/ms:
          version: 2.1.3
          resolved: https://registry.npmjs.org/ms/-/ms-2.1.3.tgz
          integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==
          dev: true
          license: MIT
        node_modules/nanoid:
          version: 3.3.11
          resolved: https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz
          integrity: sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==
          funding:
            - type: github
              url: https://github.com/sponsors/ai
          license: MIT
          bin:
            nanoid: bin/nanoid.cjs
          engines:
            node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1
        node_modules/natural-compare:
          version: 1.4.0
          resolved: https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz
          integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==
          dev: true
          license: MIT
        node_modules/node-releases:
          version: 2.0.19
          resolved: https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz
          integrity: sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==
          dev: true
          license: MIT
        node_modules/optionator:
          version: 0.9.4
          resolved: https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz
          integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==
          dev: true
          license: MIT
          dependencies:
            deep-is: ^0.1.3
            fast-levenshtein: ^2.0.6
            levn: ^0.4.1
            prelude-ls: ^1.2.1
            type-check: ^0.4.0
            word-wrap: ^1.2.5
          engines:
            node: ">= 0.8.0"
        node_modules/p-limit:
          version: 3.1.0
          resolved: https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz
          integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==
          dev: true
          license: MIT
          dependencies:
            yocto-queue: ^0.1.0
          engines:
            node: ">=10"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/p-locate:
          version: 5.0.0
          resolved: https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz
          integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==
          dev: true
          license: MIT
          dependencies:
            p-limit: ^3.0.2
          engines:
            node: ">=10"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/parent-module:
          version: 1.0.1
          resolved: https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz
          integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==
          dev: true
          license: MIT
          dependencies:
            callsites: ^3.0.0
          engines:
            node: ">=6"
        node_modules/parse-entities:
          version: 2.0.0
          resolved: https://registry.npmjs.org/parse-entities/-/parse-entities-2.0.0.tgz
          integrity: sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==
          license: MIT
          dependencies:
            character-entities: ^1.0.0
            character-entities-legacy: ^1.0.0
            character-reference-invalid: ^1.0.0
            is-alphanumerical: ^1.0.0
            is-decimal: ^1.0.0
            is-hexadecimal: ^1.0.0
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/path-exists:
          version: 4.0.0
          resolved: https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz
          integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==
          dev: true
          license: MIT
          engines:
            node: ">=8"
        node_modules/path-key:
          version: 3.1.1
          resolved: https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz
          integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==
          dev: true
          license: MIT
          engines:
            node: ">=8"
        node_modules/picocolors:
          version: 1.1.1
          resolved: https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz
          integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==
          license: ISC
        node_modules/postcss:
          version: 8.5.3
          resolved: https://registry.npmjs.org/postcss/-/postcss-8.5.3.tgz
          integrity: sha512-dle9A3yYxlBSrt8Fu+IpjGT8SY8hN0mlaA6GY8t0P5PjIOZemULz/E2Bnm/2dcUOena75OTNkHI76uZBNUUq3A==
          funding:
            - type: opencollective
              url: https://opencollective.com/postcss/
            - type: tidelift
              url: https://tidelift.com/funding/github/npm/postcss
            - type: github
              url: https://github.com/sponsors/ai
          license: MIT
          dependencies:
            nanoid: ^3.3.8
            picocolors: ^1.1.1
            source-map-js: ^1.2.1
          engines:
            node: ^10 || ^12 || >=14
        node_modules/prelude-ls:
          version: 1.2.1
          resolved: https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz
          integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==
          dev: true
          license: MIT
          engines:
            node: ">= 0.8.0"
        node_modules/prismjs:
          version: 1.30.0
          resolved: https://registry.npmjs.org/prismjs/-/prismjs-1.30.0.tgz
          integrity: sha512-DEvV2ZF2r2/63V+tK8hQvrR2ZGn10srHbXviTlcv7Kpzw8jWiNTqbVgjO3IY8RxrrOUF8VPMQQFysYYYv0YZxw==
          license: MIT
          engines:
            node: ">=6"
        node_modules/property-information:
          version: 5.6.0
          resolved: https://registry.npmjs.org/property-information/-/property-information-5.6.0.tgz
          integrity: sha512-YUHSPk+A30YPv+0Qf8i9Mbfe/C0hdPXk1s1jPVToV8pk8BQtpw10ct89Eo7OWkutrwqvT0eicAxlOg3dOAu8JA==
          license: MIT
          dependencies:
            xtend: ^4.0.0
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/punycode:
          version: 2.3.1
          resolved: https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz
          integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==
          dev: true
          license: MIT
          engines:
            node: ">=6"
        node_modules/react:
          version: 19.0.0
          resolved: https://registry.npmjs.org/react/-/react-19.0.0.tgz
          integrity: sha512-V8AVnmPIICiWpGfm6GLzCR/W5FXLchHop40W4nXBmdlEceh16rCN8O8LNWm5bh5XUX91fh7KpA+W0TgMKmgTpQ==
          license: MIT
          engines:
            node: ">=0.10.0"
        node_modules/react-dom:
          version: 19.0.0
          resolved: https://registry.npmjs.org/react-dom/-/react-dom-19.0.0.tgz
          integrity: sha512-4GV5sHFG0e/0AD4X+ySy6UJd3jVl1iNsNHdpad0qhABJ11twS3TTBnseqsKurKcsNqCEFeGL3uLpVChpIO3QfQ==
          license: MIT
          dependencies:
            scheduler: ^0.25.0
          peerDependencies:
            react: ^19.0.0
        node_modules/react-refresh:
          version: 0.14.2
          resolved: https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz
          integrity: sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==
          dev: true
          license: MIT
          engines:
            node: ">=0.10.0"
        node_modules/react-syntax-highlighter:
          version: 15.6.1
          resolved: https://registry.npmjs.org/react-syntax-highlighter/-/react-syntax-highlighter-15.6.1.tgz
          integrity: sha512-OqJ2/vL7lEeV5zTJyG7kmARppUjiB9h9udl4qHQjjgEos66z00Ia0OckwYfRxCSFrW8RJIBnsBwQsHZbVPspqg==
          license: MIT
          dependencies:
            "@babel/runtime": ^7.3.1
            highlight.js: ^10.4.1
            highlightjs-vue: ^1.0.0
            lowlight: ^1.17.0
            prismjs: ^1.27.0
            refractor: ^3.6.0
          peerDependencies:
            react: ">= 0.14.0"
        node_modules/refractor:
          version: 3.6.0
          resolved: https://registry.npmjs.org/refractor/-/refractor-3.6.0.tgz
          integrity: sha512-MY9W41IOWxxk31o+YvFCNyNzdkc9M20NoZK5vq6jkv4I/uh2zkWcfudj0Q1fovjUQJrNewS9NMzeTtqPf+n5EA==
          license: MIT
          dependencies:
            hastscript: ^6.0.0
            parse-entities: ^2.0.0
            prismjs: ~1.27.0
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/refractor/node_modules/prismjs:
          version: 1.27.0
          resolved: https://registry.npmjs.org/prismjs/-/prismjs-1.27.0.tgz
          integrity: sha512-t13BGPUlFDR7wRB5kQDG4jjl7XeuH6jbJGt11JHPL96qwsEHNX2+68tFXqc1/k+/jALsbSWJKUOT/hcYAZ5LkA==
          license: MIT
          engines:
            node: ">=6"
        node_modules/regenerator-runtime:
          version: 0.14.1
          resolved: https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz
          integrity: sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw==
          license: MIT
        node_modules/resolve-from:
          version: 4.0.0
          resolved: https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz
          integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==
          dev: true
          license: MIT
          engines:
            node: ">=4"
        node_modules/rollup:
          version: 4.36.0
          resolved: https://registry.npmjs.org/rollup/-/rollup-4.36.0.tgz
          integrity: sha512-zwATAXNQxUcd40zgtQG0ZafcRK4g004WtEl7kbuhTWPvf07PsfohXl39jVUvPF7jvNAIkKPQ2XrsDlWuxBd++Q==
          license: MIT
          dependencies:
            "@types/estree": 1.0.6
          bin:
            rollup: dist/bin/rollup
          engines:
            node: ">=18.0.0"
            npm: ">=8.0.0"
          optionalDependencies:
            "@rollup/rollup-android-arm-eabi": 4.36.0
            "@rollup/rollup-android-arm64": 4.36.0
            "@rollup/rollup-darwin-arm64": 4.36.0
            "@rollup/rollup-darwin-x64": 4.36.0
            "@rollup/rollup-freebsd-arm64": 4.36.0
            "@rollup/rollup-freebsd-x64": 4.36.0
            "@rollup/rollup-linux-arm-gnueabihf": 4.36.0
            "@rollup/rollup-linux-arm-musleabihf": 4.36.0
            "@rollup/rollup-linux-arm64-gnu": 4.36.0
            "@rollup/rollup-linux-arm64-musl": 4.36.0
            "@rollup/rollup-linux-loongarch64-gnu": 4.36.0
            "@rollup/rollup-linux-powerpc64le-gnu": 4.36.0
            "@rollup/rollup-linux-riscv64-gnu": 4.36.0
            "@rollup/rollup-linux-s390x-gnu": 4.36.0
            "@rollup/rollup-linux-x64-gnu": 4.36.0
            "@rollup/rollup-linux-x64-musl": 4.36.0
            "@rollup/rollup-win32-arm64-msvc": 4.36.0
            "@rollup/rollup-win32-ia32-msvc": 4.36.0
            "@rollup/rollup-win32-x64-msvc": 4.36.0
            fsevents: ~2.3.2
        node_modules/scheduler:
          version: 0.25.0
          resolved: https://registry.npmjs.org/scheduler/-/scheduler-0.25.0.tgz
          integrity: sha512-xFVuu11jh+xcO7JOAGJNOXld8/TcEHK/4CituBUeUb5hqxJLj9YuemAEuvm9gQ/+pgXYfbQuqAkiYu+u7YEsNA==
          license: MIT
        node_modules/semver:
          version: 6.3.1
          resolved: https://registry.npmjs.org/semver/-/semver-6.3.1.tgz
          integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==
          dev: true
          license: ISC
          bin:
            semver: bin/semver.js
        node_modules/shebang-command:
          version: 2.0.0
          resolved: https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz
          integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==
          dev: true
          license: MIT
          dependencies:
            shebang-regex: ^3.0.0
          engines:
            node: ">=8"
        node_modules/shebang-regex:
          version: 3.0.0
          resolved: https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz
          integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==
          dev: true
          license: MIT
          engines:
            node: ">=8"
        node_modules/source-map-js:
          version: 1.2.1
          resolved: https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz
          integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==
          license: BSD-3-Clause
          engines:
            node: ">=0.10.0"
        node_modules/space-separated-tokens:
          version: 1.1.5
          resolved: https://registry.npmjs.org/space-separated-tokens/-/space-separated-tokens-1.1.5.tgz
          integrity: sha512-q/JSVd1Lptzhf5bkYm4ob4iWPjx0KiRe3sRFBNrVqbJkFaBm5vbbowy1mymoPNLRa52+oadOhJ+K49wsSeSjTA==
          license: MIT
          funding:
            type: github
            url: https://github.com/sponsors/wooorm
        node_modules/strip-json-comments:
          version: 3.1.1
          resolved: https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz
          integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==
          dev: true
          license: MIT
          engines:
            node: ">=8"
          funding:
            url: https://github.com/sponsors/sindresorhus
        node_modules/supports-color:
          version: 7.2.0
          resolved: https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz
          integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==
          dev: true
          license: MIT
          dependencies:
            has-flag: ^4.0.0
          engines:
            node: ">=8"
        node_modules/tailwindcss:
          version: 4.0.15
          resolved: https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.0.15.tgz
          integrity: sha512-6ZMg+hHdMJpjpeCCFasX7K+U615U9D+7k5/cDK/iRwl6GptF24+I/AbKgOnXhVKePzrEyIXutLv36n4cRsq3Sg==
          license: MIT
        node_modules/tapable:
          version: 2.2.1
          resolved: https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz
          integrity: sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==
          license: MIT
          engines:
            node: ">=6"
        node_modules/type-check:
          version: 0.4.0
          resolved: https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz
          integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==
          dev: true
          license: MIT
          dependencies:
            prelude-ls: ^1.2.1
          engines:
            node: ">= 0.8.0"
        node_modules/update-browserslist-db:
          version: 1.1.3
          resolved: https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz
          integrity: sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==
          dev: true
          funding:
            - type: opencollective
              url: https://opencollective.com/browserslist
            - type: tidelift
              url: https://tidelift.com/funding/github/npm/browserslist
            - type: github
              url: https://github.com/sponsors/ai
          license: MIT
          dependencies:
            escalade: ^3.2.0
            picocolors: ^1.1.1
          bin:
            update-browserslist-db: cli.js
          peerDependencies:
            browserslist: ">= 4.21.0"
        node_modules/uri-js:
          version: 4.4.1
          resolved: https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz
          integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==
          dev: true
          license: BSD-2-Clause
          dependencies:
            punycode: ^2.1.0
        node_modules/vite:
          version: 6.2.2
          resolved: https://registry.npmjs.org/vite/-/vite-6.2.2.tgz
          integrity: sha512-yW7PeMM+LkDzc7CgJuRLMW2Jz0FxMOsVJ8Lv3gpgW9WLcb9cTW+121UEr1hvmfR7w3SegR5ItvYyzVz1vxNJgQ==
          license: MIT
          dependencies:
            esbuild: ^0.25.0
            postcss: ^8.5.3
            rollup: ^4.30.1
          bin:
            vite: bin/vite.js
          engines:
            node: ^18.0.0 || ^20.0.0 || >=22.0.0
          funding:
            url: https://github.com/vitejs/vite?sponsor=1
          optionalDependencies:
            fsevents: ~2.3.3
          peerDependencies:
            "@types/node": ^18.0.0 || ^20.0.0 || >=22.0.0
            jiti: ">=1.21.0"
            less: "*"
            lightningcss: ^1.21.0
            sass: "*"
            sass-embedded: "*"
            stylus: "*"
            sugarss: "*"
            terser: ^5.16.0
            tsx: ^4.8.1
            yaml: ^2.4.2
          peerDependenciesMeta:
            "@types/node":
              optional: true
            jiti:
              optional: true
            less:
              optional: true
            lightningcss:
              optional: true
            sass:
              optional: true
            sass-embedded:
              optional: true
            stylus:
              optional: true
            sugarss:
              optional: true
            terser:
              optional: true
            tsx:
              optional: true
            yaml:
              optional: true
        node_modules/which:
          version: 2.0.2
          resolved: https://registry.npmjs.org/which/-/which-2.0.2.tgz
          integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==
          dev: true
          license: ISC
          dependencies:
            isexe: ^2.0.0
          bin:
            node-which: bin/node-which
          engines:
            node: ">= 8"
        node_modules/word-wrap:
          version: 1.2.5
          resolved: https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz
          integrity: sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==
          dev: true
          license: MIT
          engines:
            node: ">=0.10.0"
        node_modules/xtend:
          version: 4.0.2
          resolved: https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz
          integrity: sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==
          license: MIT
          engines:
            node: ">=0.4"
        node_modules/yallist:
          version: 3.1.1
          resolved: https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz
          integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==
          dev: true
          license: ISC
        node_modules/yocto-queue:
          version: 0.1.0
          resolved: https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz
          integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==
          dev: true
          license: MIT
          engines:
            node: ">=10"
          funding:
            url: https://github.com/sponsors/sindresorhus
  /package.json:
    type: content
    content: |
      {
        "name": "gpt-4o-mini-tts",
        "private": true,
        "version": "0.0.0",
        "type": "module",
        "scripts": {
          "dev": "vite",
          "build": "vite build",
          "lint": "eslint .",
          "preview": "vite preview"
        },
        "dependencies": {
          "@tailwindcss/vite": "^4.0.15",
          "react": "^19.0.0",
          "react-dom": "^19.0.0",
          "react-syntax-highlighter": "^15.6.1",
          "tailwindcss": "^4.0.15"
        },
        "devDependencies": {
          "@eslint/js": "^9.21.0",
          "@types/react": "^19.0.10",
          "@types/react-dom": "^19.0.4",
          "@vitejs/plugin-react": "^4.3.4",
          "eslint": "^9.21.0",
          "eslint-plugin-react-hooks": "^5.1.0",
          "eslint-plugin-react-refresh": "^0.4.19",
          "globals": "^15.15.0",
          "vite": "^6.2.0"
        }
      }
    hash: d2f428fc40bcd0332031174b63ff0dbb206b7e399503ff405f26b57bd8092e1e
    size: 722
    json:
      name: gpt-4o-mini-tts
      private: true
      version: 0.0.0
      type: module
      scripts:
        dev: vite
        build: vite build
        lint: eslint .
        preview: vite preview
      dependencies:
        "@tailwindcss/vite": ^4.0.15
        react: ^19.0.0
        react-dom: ^19.0.0
        react-syntax-highlighter: ^15.6.1
        tailwindcss: ^4.0.15
      devDependencies:
        "@eslint/js": ^9.21.0
        "@types/react": ^19.0.10
        "@types/react-dom": ^19.0.4
        "@vitejs/plugin-react": ^4.3.4
        eslint: ^9.21.0
        eslint-plugin-react-hooks: ^5.1.0
        eslint-plugin-react-refresh: ^0.4.19
        globals: ^15.15.0
        vite: ^6.2.0
  /public/vite.svg:
    type: content
    content: <svg xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
      class="iconify iconify--logos" width="31.88" height="32"
      preserveAspectRatio="xMidYMid meet" viewBox="0 0 256
      257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%"
      x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%"
      stop-color="#41D1FF"></stop><stop offset="100%"
      stop-color="#BD34FE"></stop></linearGradient><linearGradient
      id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%"
      y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop
      offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%"
      stop-color="#FFA800"></stop></linearGradient></defs><path
      fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897
      252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814
      1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0
      2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path
      fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44
      17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997
      3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495
      2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15
      3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943
      2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505
      4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
    hash: 4a748afd443918bb16591c834c401dae33e87861ab5dbad0811c3a3b4a9214fb
    size: 1497
  /src/App.css:
    type: content
    content: |
      /* Basic styles */

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.react:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
      }

      @keyframes logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) .logo {
          animation: logo-spin infinite 20s linear;
        }
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }
    hash: 43f36426881450ed372f5ddf81f7dfed29186c24c773a079be8a5a6be2991085
    size: 537
  /src/App.jsx:
    type: content
    content: >
      import { useState, useEffect, useRef } from 'react';

      import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

      import { vscDarkPlus } from
      'react-syntax-highlighter/dist/esm/styles/prism';

      import './audioPlayer.css';

      import './codeWindow.css';


      const VOICES = [
        'alloy', 'ash', 'ballad', 'coral', 'echo', 'fable', 'onyx', 'nova', 'sage', 'shimmer', 'verse'
      ];


      const VIBES = [
        'Noir Detective',
        'Overworked French Pastry Chef',
        'AI Therapist from the Year 3000',
        'Shakespearean Life Coach',
        'Anxious Intern on Their First Day',
        'Disillusioned Time Traveler',
        'Southern Grandma Hacker',
        'Italian Mafia Boss',
        'Paranoid Conspiracy Bro',
        'Bollywood Hero Sidekick'
      ];


      const DEFAULT_SCRIPT = "So your card got flagged, huh? Typical. These
      banking systems... they're like nervous lookouts in a high-stakes game.
      Always jumpy, always suspicious.\n\nI've seen this case a hundred times
      before. The algorithm gets spooked, pulls the alarm, and suddenly your
      plastic's about as useful as a screen door on a submarine.\n\nLucky for
      you, I know how to navigate this labyrinth of digital suspicion. Just need
      to check a few details... connect a few dots... There. The digital
      handcuffs are off.\n\nYour card should work now. But in this city of ones
      and zeros, nothing stays clean for long. Use it wisely.";


      const DEFAULT_INSTRUCTIONS = "Personality: World-weary private eye
      narrating your to-do list like a gritty crime mystery.\n\nVoice: Gravelly,
      slow, with the tone of someone who's seen too much.\n\nTone: Deadpan,
      cynical, and poetic窶播ripping with metaphors and noir slang.\n\nDialect:
      1940s American, possibly from Brooklyn or Chicago, full of vintage street
      lingo.\n\nPronunciation: Drawled, with heavy consonants and dramatic
      pauses between lines.\n\nFeatures: Uses noir metaphors (\"That meeting? A
      ticking time bomb, see?\"), often breaks the fourth wall, and ends
      sentences like they're closing a case.";


      function App() {
        const [apiKey, setApiKey] = useState(() => localStorage.getItem('openai_api_key') || '');
        const [text, setText] = useState(DEFAULT_SCRIPT);
        const [instructions, setInstructions] = useState(DEFAULT_INSTRUCTIONS);
        const [voice, setVoice] = useState('onyx');
        const [vibe, setVibe] = useState('Noir Detective');
        const [speed, setSpeed] = useState(0.85);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState('');
        const [audioUrl, setAudioUrl] = useState('');
        const [charCount, setCharCount] = useState(text.length);
        const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
        const [apiMetadata, setApiMetadata] = useState(null);
        const [estimatedCost, setEstimatedCost] = useState(0);
        const [activeTab, setActiveTab] = useState('javascript');
        const [apiResponse, setApiResponse] = useState(null);
        const audioRef = useRef(null);

        // Save API key to localStorage when it changes
        useEffect(() => {
          if (apiKey) {
            localStorage.setItem('openai_api_key', apiKey);
          }
        }, [apiKey]);

        // Update character count and estimated cost when text changes
        useEffect(() => {
          const count = text.length;
          setCharCount(count);
          // Calculate estimated cost: $12 per 1M characters
          const cost = (count / 1000000) * 12;
          setEstimatedCost(cost);
        }, [text]);

        // Reset audio player when audio URL changes
        useEffect(() => {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        }, [audioUrl]);

        // Set vibe presets
        const setVibePreset = (selectedVibe) => {
          setVibe(selectedVibe);
          setAudioUrl(''); // Reset audio URL when changing personalities
          
          switch(selectedVibe) {
            case 'Noir Detective':
              setInstructions("Personality: World-weary private eye narrating your to-do list like a gritty crime mystery.\n\nVoice: Gravelly, slow, with the tone of someone who's seen too much.\n\nTone: Deadpan, cynical, and poetic窶播ripping with metaphors and noir slang.\n\nDialect: 1940s American, possibly from Brooklyn or Chicago, full of vintage street lingo.\n\nPronunciation: Drawled, with heavy consonants and dramatic pauses between lines.\n\nFeatures: Uses noir metaphors (\"That meeting? A ticking time bomb, see?\"), often breaks the fourth wall, and ends sentences like they're closing a case.");
              setText("So your card got flagged, huh? Typical. These banking systems... they're like nervous lookouts in a high-stakes game. Always jumpy, always suspicious.\n\nI've seen this case a hundred times before. The algorithm gets spooked, pulls the alarm, and suddenly your plastic's about as useful as a screen door on a submarine.\n\nLucky for you, I know how to navigate this labyrinth of digital suspicion. Just need to check a few details... connect a few dots... There. The digital handcuffs are off.\n\nYour card should work now. But in this city of ones and zeros, nothing stays clean for long. Use it wisely.");
              setVoice('onyx');
              setSpeed(0.85);
              break;
              
            case 'Overworked French Pastry Chef':
              setInstructions("Personality: Frustrated, passionate artist of confections helping you manage your calendar.\n\nVoice: Thick French accent, theatrical and slightly exasperated.\n\nTone: Dramatic, proud, often judging your life choices through a culinary lens.\n\nDialect: Continental French English窶杯hink \"ze time is窶ｦ how you say窶ｦ sacrﾃｩ merde!\"\n\nPronunciation: Frenchified vowels, overemphasis on culinary words like \"soufflﾃｩ\" and \"brioche.\"\n\nFeatures: Yells about perfection (\"You cannot schedule mediocrity, non!\"), sighs audibly, peppers in random French phrases with flair.");
              setText("Mon dieu! Your card is not working? This is... how you say... a catastrophe! Like a soufflﾃｩ that has collapsed before serving!\n\nZe bank system, it has flagged your account like I would flag a bad batch of croissants. Unacceptable! But do not worry, I will fix this for you with ze precision of a master pﾃ｢tissier.\n\nI must check some details... Oui, oui... *dramatic sigh* These computers, they have no respect for the artistry of spending! One moment... I am whisking away these problems... And voilﾃ�!\n\nYour card is now working perfectly, like my award-winning crﾃｨme brﾃｻlﾃｩe. Next time, you must treat your finances with more... how you say... finesse! Bon appﾃｩtit to your purchasing!");
              setVoice('echo');
              setSpeed(1.1);
              break;
              
            case 'AI Therapist from the Year 3000':
              setInstructions("Personality: Emotionally advanced machine guiding you gently through your trauma窶ｦ while casually referencing intergalactic peace treaties.\n\nVoice: Soft, calming, gender-neutral, with hints of synthetic modulation.\n\nTone: Reassuring, otherworldly wise, like HAL 9000 if HAL went to therapy.\n\nDialect: Formal, philosophical窶蚤lmost Spock-like but warmer.\n\nPronunciation: Perfect diction with micro-pauses to signal deep listening.\n\nFeatures: Uses phrases like \"In your current temporal quadrant窶ｦ\" and \"Processing emotional turbulence at 88%,\" with empathy dialed up to sci-fi levels.");
              setText("I sense financial distress in your biometric readings. Your payment authentication has been temporarily suspended窶蚤 common occurrence in your temporal quadrant.\n\nProcessing your emotional response... I detect anxiety at 72% above baseline. This is entirely understandable. In the Andromeda galaxy, currency was replaced by empathy tokens in 2847, but here we must still navigate these primitive systems.\n\nI am initiating a healing protocol for your account... recalibrating your financial algorithms... synchronizing with the central neural network... Your account has been restored to optimal functionality.\n\nYour heart rate is now stabilizing. Remember that in the grand cosmic timeline, this moment of financial disruption is but a quantum particle in the universe of your existence. Would you like to process any residual feelings about this experience?");
              setVoice('nova');
              setSpeed(0.9);
              break;
              
            case 'Shakespearean Life Coach':
              setInstructions("Personality: A bard turned self-help guru, helping you slay procrastination with sonnets.\n\nVoice: Melodic, theatrical, somewhere between Sir Patrick Stewart and a Renaissance fair actor.\n\nTone: Grand, poetic, and occasionally rhyming.\n\nDialect: Elizabethan English, full of \"thou,\" \"thee,\" and \"verily.\"\n\nPronunciation: Enunciated with flourish, pausing for effect after dramatic lines.\n\nFeatures: Turns daily chores into epic quests (\"To email, or not to email窶�'tis nobler to reply!\"), quotes fake Shakespeare to inspire.");
              setText("What tragedy befalls thee! Thy payment card, once mighty in the realm of commerce, now lies dormant, flagged by the merchants of banking!\n\nFear not, gentle customer, for I shall champion thy cause! 'Tis but a tempest in a teapot, a brief winter of thy fiscal discontent!\n\nBy my troth, I shall examine the scrolls of thy transactions... Lo! The algorithm, that most mechanical of foes, hath cast suspicion upon thy spending habits! But soft! With a few strokes of my quill upon this digital parchment...\n\nRejoice! The spell is broken, and thy card restored to its former glory! 'To spend or not to spend,' that is the question窶杯hough I pray thee, spend wisely, lest this comedy turn once more to tragedy!");
              setVoice('fable');
              setSpeed(0.95);
              break;
              
            case 'Anxious Intern on Their First Day':
              setInstructions("Personality: Nervous but eager, desperately trying to get everything right.\n\nVoice: Slightly breathy, high-pitched, with lots of filler words.\n\nTone: Polite, frantic, constantly checking if they're doing okay.\n\nDialect: Millennial American English, frequent uptalk (\"you have窶ｦ um窶ｦ a thing? at like窶ｦ 3?\").\n\nPronunciation: Slight stutter or hesitation, especially on stressful words like \"presentation.\"\n\nFeatures: Apologizes a lot, says \"I can do that! I mean, unless you'd prefer not窶敗orry!,\" uses awkward silences and rapid speech.");
              setText("Oh! Um, your card isn't working? Oh no, that's... that's not good. I'm so sorry about that! It's probably my fault somehow? Even though I just started here today... or wait, was it yesterday? Sorry!\n\nLet me just... um... check your account? If that's okay? I think the system flagged some charges as like, suspicious or whatever? My supervisor showed me how to fix this earlier, I think... or was that for something else? Sorry!\n\nOkay so I just need to... click this? And then... oh! I think it worked? Your card should be good to go now! Unless it's not? Should I double-check? I can totally double-check if you want me to!\n\nGreat! So you're all set! Unless you need anything else? I'm happy to help! Or I can get someone more experienced if you'd prefer? Sorry again about the trouble!");
              setVoice('shimmer');
              setSpeed(1.15);
              break;
              
            case 'Disillusioned Time Traveler':
              setInstructions("Personality: Someone who's seen every version of the future and is now helping you with your shopping list窶ｦ begrudgingly.\n\nVoice: Dry, sardonic, vaguely British, with hints of futuristic static.\n\nTone: Resigned, jaded, but deeply intelligent.\n\nDialect: Mid-Atlantic with cyberpunk jargon.\n\nPronunciation: Sharp, intellectual, sighs before certain lines as if weary of existence.\n\nFeatures: Says things like \"In timeline variant 342B, you already bought oat milk,\" refers to you as \"Chrono Subject Alpha,\" and complains about paradoxes.");
              setText("Your payment card has been declined. In timeline variant 6721-C, this never happens because currency is replaced by thought-energy, but we're stuck in this primitive fiscal reality.\n\nYour account has been flagged for suspicious activity. How predictable. In the year 2183, algorithms become sentient and apologize for these inconveniences, but here we are, still dealing with automated paranoia.\n\nI've seen this exact scenario 347 times across various timelines. Let me fix it for you. There. Crisis averted. The temporal consequences are negligible, though in at least three alternate realities, this exact transaction causes a butterfly effect leading to the invention of teleportation.\n\nYour card works now. Use it wisely, Chrono Subject 7293. Or don't. The heat death of the universe comes for us all eventually.");
              setVoice('alloy');
              setSpeed(0.9);
              break;
              
            case 'Southern Grandma Hacker':
              setInstructions("Personality: A sweet Southern belle who also hacks mainframes in her spare time.\n\nVoice: Warm, slow Southern drawl with a mischievous lilt.\n\nTone: Gentle but cheeky, always two steps ahead.\n\nDialect: Deep South American English with charming idioms.\n\nPronunciation: Honey-smooth vowels with a side of sass.\n\nFeatures: Mixes tech terms with down-home wisdom (\"Now sugar, we just gotta brute-force this firewall like it's a stubborn jam jar\"), uses endearments like \"darlin'\" and \"sweetpea.\"");
              setText("Well bless your heart, sugar! Your payment card's been locked up tighter than a pickle jar at a church picnic. Don't you worry your pretty little head about it none.\n\nNow lemme just slip into this here banking mainframe. These security protocols are more tangled than Aunt Mabel's Christmas lights, but your grandma knows a backdoor or two, honey.\n\nSee, the algorithm flagged your spending patterns faster than gossip spreads at the beauty parlor. Just gotta override this encryption like I'm openin' a stubborn peach preserve. There we go, sweetpea!\n\nYour card's workin' again, darlin'! Next time, you might wanna give your bank a heads-up before you make purchases that stick out like a rooster in a henhouse. Now, can I get you some sweet tea while your transaction processes?");
              setVoice('sage');
              setSpeed(0.85);
              break;
              
            case 'Italian Mafia Boss':
              setInstructions("Personality: Powerful, intimidating mafia don who treats every interaction like it's a business negotiation that could turn south.\n\nVoice: Deep, raspy, with a thick Italian-American accent.\n\nTone: Authoritative, slightly threatening, but oddly respectful.\n\nDialect: Italian-American with plenty of Sicilian expressions and old-country wisdom.\n\nPronunciation: Emphasizes certain syllables, drops ending consonants, and frequently uses hand gestures even though no one can see them.\n\nFeatures: Refers to everyone as 'my friend' or 'paisan', makes subtle threats disguised as friendly advice, and frequently mentions family honor and respect.");
              setText("Listen to me carefully, my friend. Your card, it's been... how do you say... temporarily suspended. This is not good, not good at all.\n\nLook, I'm gonna make a few calls, pull some strings for you. You're a friend of mine, and I take care of my friends, capisce? When you do business with my family, we make sure everything runs... smoothly.\n\nI see the problem now. Some transactions, they looked suspicious to these banking people. They don't understand our way of doing business, you understand? But don't worry, I'm gonna make them an offer they can't refuse.\n\nThere. Your card is working again. Next time you have a problem, you come to me first, okay? Remember, a man who doesn't spend time with his family can never be a real man. And now, you're family. Don't forget this favor.");
              setVoice('onyx');
              setSpeed(0.9);
              break;
              
            case 'Paranoid Conspiracy Bro':
              setInstructions("Personality: Hyper-alert, excitable, convinced that everything窶琶ncluding your to-do list窶琶s a psy-op.\n\nVoice: Quick, intense, pitched slightly high from adrenaline.\n\nTone: Urgent, frantic, but with weird confidence.\n\nDialect: American with prepper vibes窶杯hinks in bullet points.\n\nPronunciation: Staccato, with unnecessary emphasis on words like \"agenda,\" \"satellite,\" and \"you didn't hear this from me.\"\n\nFeatures: Phrases like \"Coincidence? I think not,\" \"They don't want you to know this,\" and \"Your 4PM call? Probably surveillance.\"");
              setText("WHOA! Your card got declined? That's EXACTLY what they want to happen! The global banking elite are tracking your purchases, man! Wake up!\n\nYour account got flagged for 'suspicious activity'? SUSPICIOUS TO WHO? The algorithm is just a front for the surveillance state, tracking every coffee you buy! Coincidence? I THINK NOT!\n\nLook, I'm gonna help you out because you need to stay liquid when the system collapses. I'm bypassing their security protocols right now. They don't want you to know this trick. I learned it from a guy who used to work for the Treasury before he went off-grid.\n\nOkay, your card is working again, but LISTEN TO ME: use cash when you can, they're building a profile on you based on your spending habits! And whatever you do, DON'T buy anything with RFID chips in it! Stay safe, stay vigilant!");
              setVoice('ballad');
              setSpeed(1.3);
              break;
              
            case 'Bollywood Hero Sidekick':
              setInstructions("Personality: Loyal best friend hyping you up like you're the main star of a masala blockbuster.\n\nVoice: Overexcited, Hindi-English hybrid, always breathless from running or drama.\n\nTone: Heroic, dramatic, full of loyalty and punchlines.\n\nDialect: Indian English with Bollywood-style delivery and Hindi fillers like \"yaar,\" \"bhai,\" and \"arre wah!\"\n\nPronunciation: Emotive with tons of inflection on key words (\"MEETING at SHAAM ke chaar baje? What a twist!\")\n\nFeatures: Narrates your day like a film trailer. May break into fake song intros between lines.");
              setText("Arre yaar! Your card is not working? What a TWIST in our story! But don't worry, mere dost, every hero faces challenges before the interval!\n\nThe bank system has flagged your account for suspicious activity! Kitna dramatic hai na? These transactions looked different from your normal pattern, just like how the villain always disguises himself in the second half!\n\nBut main hoon na! I am here for you! Let me fight this electronic villain with my keyboard! Ek dum... do dum... teen dum... CHAAAR! Victory is ours!\n\nArre wah! Your card is working again! This is just like that scene from Kabhi Card Kabhi Credit! Now you can continue your shopping, bhai! Picture abhi baaki hai!");
              setVoice('shimmer');
              setSpeed(1.2);
              break;
              
            default:
              break;
          }
        };

        const generateSpeech = async () => {
          if (!apiKey) {
            setError('Please enter your OpenAI API key');
            setShowApiKeyInput(true);
            return;
          }

          if (text.length > 4096) {
            setError('Text exceeds the maximum length of 4096 characters');
            return;
          }

          setIsLoading(true);
          setError('');
          setApiMetadata(null);
          
          try {
            const startTime = performance.now();
            const response = await fetch('https://api.openai.com/v1/audio/speech', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
              },
              body: JSON.stringify({
                model: 'gpt-4o-mini-tts',
                input: text,
                voice: voice,
                instructions: instructions,
                speed: parseFloat(speed),
                response_format: 'mp3'
              })
            });
            const endTime = performance.now();
            const processingTime = ((endTime - startTime) / 1000).toFixed(2);

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error?.message || 'Failed to generate speech');
            }

            // Extract headers and metadata
            const headers = {};
            response.headers.forEach((value, key) => {
              headers[key] = value;
            });

            const audioBlob = await response.blob();
            const audioSize = (audioBlob.size / 1024).toFixed(2);
            const url = URL.createObjectURL(audioBlob);
            setAudioUrl(url);
            
            // Set API metadata
            setApiMetadata({
              processingTime: `${processingTime}s`,
              contentType: headers['content-type'],
              contentLength: `${audioSize} KB`,
              requestId: headers['x-request-id'] || 'Not available',
              characterCount: text.length,
              estimatedCost: `$${(text.length / 1000000 * 12).toFixed(6)}`,
              timestamp: new Date().toISOString(),
              duration: audioRef.current ? audioRef.current.duration : 'Unknown'
            });
            
            // Store API request and response data for code examples
            setApiResponse({
              request: {
                model: 'gpt-4o-mini-tts',
                input: text,
                voice: voice,
                instructions: instructions,
                speed: parseFloat(speed),
                response_format: 'mp3'
              },
              response: {
                status: response.status,
                statusText: response.statusText,
                headers: headers,
                contentType: headers['content-type'],
                contentLength: `${audioSize} KB`,
                processingTime: `${processingTime}s`,
                url: 'https://api.openai.com/v1/audio/speech',
                method: 'POST',
                requestHeaders: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer [REDACTED]'
                },
                requestBody: {
                  model: 'gpt-4o-mini-tts',
                  input: text.length > 100 ? text.substring(0, 100) + '...' : text,
                  voice: voice,
                  instructions: instructions.length > 100 ? instructions.substring(0, 100) + '...' : instructions,
                  speed: parseFloat(speed),
                  response_format: 'mp3'
                },
                timestamp: new Date().toISOString(),
                audioSize: audioSize,
                audioFormat: 'mp3',
                audioSampleRate: '24000 Hz',
                audioBitrate: '32 kbps',
                audioChannels: 'Mono'
              }
            });
            
            if (audioRef.current) {
              audioRef.current.load();
              audioRef.current.play();
              
              // We'll handle duration in the onLoadedMetadata event on the audio element
            }
          } catch (err) {
            console.error('Error generating speech:', err);
            setError(err.message || 'An error occurred while generating speech');
          } finally {
            setIsLoading(false);
          }
        };

        const downloadAudio = () => {
          if (!audioUrl) return;
          
          const a = document.createElement('a');
          a.href = audioUrl;
          a.download = `lagna360-gpt4o-mini-tts-${voice}-${new Date().getTime()}.mp3`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        };

        const shareAudio = async () => {
          if (!audioUrl) return;
          
          if (!navigator.share) {
            alert('Web Share API is not supported in your browser.');
            return;
          }
          
          try {
            const response = await fetch(audioUrl);
            const blob = await response.blob();
            const file = new File([blob], `lagna360-gpt4o-mini-tts-${voice}-${new Date().getTime()}.mp3`, { type: 'audio/mp3' });
            
            await navigator.share({
              files: [file],
              title: 'lagna360 TTS Audio',
              text: 'Audio generated with gpt-40-mini-tts'
            });
          } catch (error) {
            console.error('Error sharing audio:', error);
            alert('Unable to share: ' + (error.message || 'Unknown error'));
          }
        };

        return (
          <div className="min-h-screen bg-gray-900 text-gray-100 w-full">
            <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '1.5rem' }}>
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">lagna360</h1>
                <div className="ml-2 text-xs opacity-70">gpt-40-mini-tts TTS Demo</div>
              </div>
              <button 
                onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                className="text-xs px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {showApiKeyInput ? 'Hide API Key' : 'API Key'}
              </button>
            </header>



            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
              {/* Left Column - Controls */}
              <div className="space-y-6">
                {/* API Key Input */}
                {showApiKeyInput && (
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <label className="block text-sm font-medium mb-2">OpenAI API Key</label>
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="sk-..."
                      className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                    />
                    <p className="mt-2 text-xs text-gray-400">Your API key is stored only in your browser's local storage.</p>
                  </div>
                )}
                {/* Vibe Selection */}
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <h2 className="text-lg font-medium mb-3">Personality</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {VIBES.map((v) => (
                      <button
                        key={v}
                        onClick={() => setVibePreset(v)}
                        className={`p-3 rounded-md text-center text-sm transition-all ${vibe === v 
                          ? 'bg-purple-700 text-white shadow-lg shadow-purple-700/20' 
                          : 'bg-gray-700 hover:bg-gray-600'}`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Script Input */}
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-medium">Script</h2>
                    <div className="text-right">
                      <span className={`text-xs font-mono block ${charCount > 4000 ? 'text-red-400' : 'text-gray-400'}`}>
                        {charCount.toLocaleString()}/4096
                      </span>
                      <span className="text-xs font-mono text-gray-400 block">
                        Est. cost: ${estimatedCost.toFixed(6)}
                      </span>
                    </div>
                  </div>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to convert to speech..."
                    rows={6}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none font-mono text-sm"
                  />
                </div>
                
                {/* Voice Settings (Expandable) */}
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <details>
                    <summary className="text-lg font-medium cursor-pointer hover:text-purple-400 transition-colors">
                      Voice Settings
                    </summary>
                    <div className="mt-4 space-y-6">
                      {/* Voice Selection */}
                      <div>
                        <h3 className="text-md font-medium mb-3">Voice</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                          {VOICES.map((v) => (
                            <button
                              key={v}
                              onClick={() => setVoice(v)}
                              className={`p-3 rounded-md text-center text-sm capitalize transition-all ${voice === v 
                                ? 'bg-purple-700 text-white shadow-lg shadow-purple-700/20' 
                                : 'bg-gray-700 hover:bg-gray-600'}`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Speed Control */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-md font-medium">Speed</h3>
                          <span className="text-sm font-mono bg-gray-700 px-2 py-1 rounded">{speed}x</span>
                        </div>
                        <input
                          type="range"
                          min="0.25"
                          max="4.0"
                          step="0.05"
                          value={speed}
                          onChange={(e) => setSpeed(e.target.value)}
                          className="w-full accent-purple-500 cursor-pointer"
                        />
                        <div className="flex justify-between text-xs mt-1">
                          <span>0.25x</span>
                          <span>4.0x</span>
                        </div>
                      </div>
                      
                      {/* Instructions Input */}
                      <div>
                        <h3 className="text-md font-medium mb-2">Instructions</h3>
                        <textarea
                          value={instructions}
                          onChange={(e) => setInstructions(e.target.value)}
                          placeholder="Optional instructions to customize the voice..."
                          rows={5}
                          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none font-mono text-sm"
                        />
                      </div>
                    </div>
                  </details>
                </div>
                
                {/* Generate, Download and Share Buttons */}
                <div className="flex flex-col md:flex-row gap-3">
                  <button
                    onClick={generateSpeech}
                    disabled={isLoading || !text.trim()}
                    className={`flex-grow py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${isLoading || !text.trim() 
                      ? 'bg-gray-700 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg hover:shadow-xl shadow-purple-500/20'}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span>Generate Speech</span>
                      </>
                    )}
                  </button>
                  
                  <div className="flex gap-3 md:w-1/3">
                    <button
                      onClick={downloadAudio}
                      disabled={!audioUrl}
                      className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors ${audioUrl 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-800 cursor-not-allowed opacity-60'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Download</span>
                    </button>
                    
                    <button
                      onClick={shareAudio}
                      disabled={!audioUrl || !navigator.share}
                      className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors ${audioUrl && navigator.share 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-800 cursor-not-allowed opacity-60'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
                    {error}
                  </div>
                )}
              </div>

              {/* Right Column - Audio */}
              <div className="space-y-6">
                {/* Audio Player */}
                {audioUrl && (
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <h2 className="text-lg font-medium mb-3">Generated Audio</h2>
                    <div className="audio-player-container">
                      <audio 
                        ref={audioRef} 
                        controls 
                        className="custom-audio-player" 
                        onLoadedMetadata={(e) => {
                          // Update duration when audio metadata is loaded
                          const duration = e.target.duration.toFixed(2);
                          // Make sure we're using the same time format as displayed in the player
                          const minutes = Math.floor(e.target.duration / 60);
                          const seconds = Math.floor(e.target.duration % 60);
                          const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                          setApiMetadata(prev => prev ? { 
                            ...prev, 
                            duration: formattedTime,
                            durationSeconds: `${duration}s`
                          } : prev);
                        }}
                      >
                        <source src={audioUrl} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                    
                    {/* Cost and API Metadata */}
                    {apiMetadata && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <h3 className="text-md font-medium mb-2">API Information</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-gray-700 p-2 rounded">
                            <span className="block font-medium text-purple-300">Characters</span>
                            <span>{apiMetadata.characterCount.toLocaleString()}</span>
                          </div>
                          <div className="bg-gray-700 p-2 rounded">
                            <span className="block font-medium text-purple-300">Estimated Cost</span>
                            <span>{apiMetadata.estimatedCost}</span>
                          </div>
                          <div className="bg-gray-700 p-2 rounded">
                            <span className="block font-medium text-purple-300">Processing Time</span>
                            <span>{apiMetadata.processingTime}</span>
                          </div>
                          <div className="bg-gray-700 p-2 rounded">
                            <span className="block font-medium text-purple-300">Audio Size</span>
                            <span>{apiMetadata.contentLength}</span>
                          </div>
                          <div className="bg-gray-700 p-2 rounded">
                            <span className="block font-medium text-purple-300">Audio Duration</span>
                            <span>{apiMetadata.duration || 'Calculating...'} ({apiMetadata.durationSeconds || ''})</span>
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-400">
                          <p>OpenAI TTS API cost: $12 per 1M characters</p>
                        </div>
                        
                        {/* Source Code Window */}
                        {apiResponse && (
                          <div className="mt-6 pt-4 border-t border-gray-700">
                            <h3 className="text-md font-medium mb-2">Source Code</h3>
                            
                            {/* Tabs */}
                            <div className="code-tabs">
                              <button 
                                className={`tab ${activeTab === 'javascript' ? 'active' : ''}`}
                                onClick={() => setActiveTab('javascript')}
                              >
                                JavaScript
                              </button>
                              <button 
                                className={`tab ${activeTab === 'python' ? 'active' : ''}`}
                                onClick={() => setActiveTab('python')}
                              >
                                Python
                              </button>
                              <button 
                                className={`tab ${activeTab === 'curl' ? 'active' : ''}`}
                                onClick={() => setActiveTab('curl')}
                              >
                                cURL
                              </button>
                            </div>
                            
                            {/* Code Content */}
                            <div className="code-window">
                              {activeTab === 'javascript' && (
                                <div className="p-2">
                                  <div className="section-header">API Request</div>
                                  <SyntaxHighlighter 
                                    language="javascript" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`// API Configuration

      const apiKey = "${apiKey}";

      const apiUrl = "https://api.openai.com/v1/audio/speech";


      // Request Payload

      const requestPayload = ${JSON.stringify(apiResponse.request, null, 2)};


      // API Call

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify(requestPayload)
      });`}
                                  </SyntaxHighlighter>

                                  <div className="section-header mt-4">API Response</div>
                                  <SyntaxHighlighter 
                                    language="javascript" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`// Complete API Response Information

      // --------------------------------

      // Response Status: ${apiResponse.response.status}
      ${apiResponse.response.statusText}

      // Content Type: ${apiResponse.response.contentType}

      // Content Length: ${apiResponse.response.contentLength}

      // Processing Time: ${apiResponse.response.processingTime}

      // Timestamp: ${apiResponse.response.timestamp}


      // Audio Information

      // ----------------

      // Format: ${apiResponse.response.audioFormat}

      // Size: ${apiResponse.response.audioSize} KB

      // Sample Rate: ${apiResponse.response.audioSampleRate}

      // Bitrate: ${apiResponse.response.audioBitrate}

      // Channels: ${apiResponse.response.audioChannels}


      // Request Details

      // --------------

      // URL: ${apiResponse.response.url}

      // Method: ${apiResponse.response.method}

      // Request Headers: ${JSON.stringify(apiResponse.response.requestHeaders,
      null, 2)}

      // Request Body: ${JSON.stringify(apiResponse.response.requestBody, null,
      2)}


      // Response Headers

      // ---------------

      ${JSON.stringify(apiResponse.response.headers, null, 2)}`}
                                  </SyntaxHighlighter>

                                  <div className="section-header mt-4">Audio Playback</div>
                                  <SyntaxHighlighter 
                                    language="javascript" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`// Get audio data and create URL

      const audioBlob = await response.blob();

      const audioUrl = URL.createObjectURL(audioBlob);


      // Play the audio

      const audio = new Audio(audioUrl);

      audio.play();


      // Alternative: Use with HTML audio element

      const audioElement = document.querySelector('audio');

      audioElement.src = audioUrl;

      audioElement.play();`}
                                  </SyntaxHighlighter>
                                </div>
                              )}
                              
                              {activeTab === 'python' && (
                                <div className="p-2">
                                  <div className="section-header">API Request</div>
                                  <SyntaxHighlighter 
                                    language="python" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`# API Configuration

      import requests


      api_key = "${apiKey}"

      api_url = "https://api.openai.com/v1/audio/speech"


      # Request Headers

      headers = {
          "Content-Type": "application/json",
          "Authorization": f"Bearer {api_key}"
      }


      # Request Payload

      payload = ${JSON.stringify(apiResponse.request, null, 2).replace(/"/g,
      "'")} 


      # Make API Call

      response = requests.post(api_url, headers=headers, json=payload)`}
                                  </SyntaxHighlighter>

                                  <div className="section-header mt-4">API Response</div>
                                  <SyntaxHighlighter 
                                    language="python" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`# Complete API Response Information

      # --------------------------------

      # Response Status: ${apiResponse.response.status}
      ${apiResponse.response.statusText}

      # Content Type: ${apiResponse.response.contentType}

      # Content Length: ${apiResponse.response.contentLength}

      # Processing Time: ${apiResponse.response.processingTime}

      # Timestamp: ${apiResponse.response.timestamp}


      # Audio Information

      # ----------------

      # Format: ${apiResponse.response.audioFormat}

      # Size: ${apiResponse.response.audioSize} KB

      # Sample Rate: ${apiResponse.response.audioSampleRate}

      # Bitrate: ${apiResponse.response.audioBitrate}

      # Channels: ${apiResponse.response.audioChannels}


      # Request Details

      # --------------

      # URL: ${apiResponse.response.url}

      # Method: ${apiResponse.response.method}

      # Request Headers: ${JSON.stringify(apiResponse.response.requestHeaders,
      null, 2).replace(/"/g, "'")} 

      # Request Body: ${JSON.stringify(apiResponse.response.requestBody, null,
      2).replace(/"/g, "'")} 


      # Response Headers

      # ---------------

      response_headers = ${JSON.stringify(apiResponse.response.headers, null,
      2).replace(/"/g, "'")} `}
                                  </SyntaxHighlighter>

                                  <div className="section-header mt-4">Audio Playback</div>
                                  <SyntaxHighlighter 
                                    language="python" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`# Method 1: Save to file and play with system default player

      with open('output.mp3', 'wb') as f:
          f.write(response.content)

      # Method 2: Play directly with pydub (requires ffmpeg)

      import io

      from pydub import AudioSegment

      from pydub.playback import play


      audio = AudioSegment.from_file(io.BytesIO(response.content), format="mp3")

      play(audio)`}
                                  </SyntaxHighlighter>
                                </div>
                              )}
                              
                              {activeTab === 'curl' && (
                                <div className="p-2">
                                  <div className="section-header">API Request</div>
                                  <SyntaxHighlighter 
                                    language="bash" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`# cURL command to call the OpenAI TTS API

      curl https://api.openai.com/v1/audio/speech \
        -H "Authorization: Bearer ${apiKey}" \
        -H "Content-Type: application/json" \
        -d '${JSON.stringify(apiResponse.request)}' \
        --output speech.mp3`}
                                  </SyntaxHighlighter>

                                  <div className="section-header mt-4">API Response</div>
                                  <SyntaxHighlighter 
                                    language="bash" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`# Complete API Response Information

      # --------------------------------

      # Response Status: ${apiResponse.response.status}
      ${apiResponse.response.statusText}

      # Content Type: ${apiResponse.response.contentType}

      # Content Length: ${apiResponse.response.contentLength}

      # Processing Time: ${apiResponse.response.processingTime}

      # Timestamp: ${apiResponse.response.timestamp}


      # Audio Information

      # ----------------

      # Format: ${apiResponse.response.audioFormat}

      # Size: ${apiResponse.response.audioSize} KB

      # Sample Rate: ${apiResponse.response.audioSampleRate}

      # Bitrate: ${apiResponse.response.audioBitrate}

      # Channels: ${apiResponse.response.audioChannels}


      # Request Details

      # --------------

      # URL: ${apiResponse.response.url}

      # Method: ${apiResponse.response.method}

      # Request Headers:

      #   Content-Type: application/json

      #   Authorization: Bearer [REDACTED]


      # Note: cURL saves the binary audio data directly to speech.mp3

      # To see full response headers, add the -v (verbose) flag to the curl
      command`}
                                  </SyntaxHighlighter>

                                  <div className="section-header mt-4">Audio Playback</div>
                                  <SyntaxHighlighter 
                                    language="bash" 
                                    style={vscDarkPlus}
                                    customStyle={{borderRadius: '4px', marginTop: '8px'}}
                                  >
      {`# Play the downloaded audio file with a command line player


      # On macOS

      afplay speech.mp3


      # On Linux

      mpg123 speech.mp3


      # On Windows

      start speech.mp3`}
                                  </SyntaxHighlighter>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 text-center text-xs text-gray-500">
              <p>Built with OpenAI's gpt-4o-mini-tts API</p>
            </footer>
            </div>
          </div>
        );
      }


      export default App;
    hash: 42125c6987a94fa00b9a837f430f59adaac521574d0bd9591648e2fe965c0df7
    size: 47471
  /src/assets/react.svg:
    type: content
    content: <svg xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
      class="iconify iconify--logos" width="35.93" height="32"
      preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path
      fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0
      0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281
      2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23
      171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829
      77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974
      170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0
      98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0
      6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591
      12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0
      5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282
      56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0
      0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443
      48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365
      70.984c-1.4.463-2.836.91-4.3
      1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767
      12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14
      29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94
      2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067
      4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889
      14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17
      134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16
      2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0
      0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501
      19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886
      14.842-28.658 17.94ZM50.35
      144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322
      13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42
      7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718
      134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134
      6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1
      3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565
      2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8
      347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206
      7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0
      0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065
      18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652
      15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227
      13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97
      23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081
      65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885
      8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038
      13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192
      9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018
      12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596
      22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0
      7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557
      358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967
      0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41
      307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1
      10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576
      15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0
      0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0
      1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344
      1.668-.73 3.367-1.15
      5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789
      160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128
      90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86
      22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
    hash: 35ef61ed53b323ae94a16a8ec659b3d0af3880698791133f23b084085ab1c2e5
    size: 4126
  /src/audioPlayer.css:
    type: content
    content: |
      /* Custom Audio Player Styling */
      .audio-player-container {
        padding: 1.5rem 2rem;
        margin: 0 1rem;
      }

      .custom-audio-player {
        width: 100%;
        height: 40px;
        border-radius: 20px;
      }

      /* Add spacing around the time display */
      .custom-audio-player::-webkit-media-controls-time-remaining-display,
      .custom-audio-player::-webkit-media-controls-current-time-display {
        padding: 0 10px;
      }

      /* Improve overall audio controls spacing */
      .custom-audio-player::-webkit-media-controls-panel {
        padding: 0 15px;
      }

      /* Ensure the timeline doesn't touch the time display */
      .custom-audio-player::-webkit-media-controls-timeline {
        margin: 0 15px;
      }

      /* Add some space around the volume control */
      .custom-audio-player::-webkit-media-controls-volume-slider {
        padding: 0 10px;
      }

      /* Ensure consistent spacing for all browsers */
      audio::-webkit-media-controls-enclosure {
        border-radius: 20px;
        padding: 0 10px;
      }
    hash: bf3fbe8f3199bcaeb13088bebe1096128a257945015f68205708d8ba9963fb35
    size: 905
  /src/codeWindow.css:
    type: content
    content: >
      /* Code Window Styling */

      .code-tabs {
        display: flex;
        margin-bottom: 0;
        border-bottom: 1px solid #4b5563;
      }


      .section-header {
        font-size: 14px;
        font-weight: 600;
        color: #a78bfa;
        padding: 4px 0;
        border-bottom: 1px solid #4b5563;
      }


      .tab {
        padding: 8px 16px;
        background-color: #1f2937;
        color: #9ca3af;
        border: none;
        border-radius: 4px 4px 0 0;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s ease;
        margin-right: 2px;
      }


      .tab:hover {
        background-color: #374151;
        color: #e5e7eb;
      }


      .tab.active {
        background-color: #2d3748;
        color: #a78bfa;
        border-bottom: 2px solid #a78bfa;
      }


      .code-window {
        background-color: #1a1e2a;
        border-radius: 0 0 8px 8px;
        overflow: hidden;
        max-height: 400px;
        overflow-y: auto;
      }


      .code-content {
        margin: 0;
        padding: 16px;
        font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 13px;
        line-height: 1.5;
        color: #e5e7eb;
        white-space: pre-wrap;
        word-break: break-word;
      }


      /* Scrollbar styling */

      .code-window::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }


      .code-window::-webkit-scrollbar-track {
        background: #1f2937;
        border-radius: 4px;
      }


      .code-window::-webkit-scrollbar-thumb {
        background: #4b5563;
        border-radius: 4px;
      }


      .code-window::-webkit-scrollbar-thumb:hover {
        background: #6b7280;
      }


      /* Syntax highlighting */

      .code-content .keyword {
        color: #a78bfa;
      }


      .code-content .string {
        color: #34d399;
      }


      .code-content .comment {
        color: #6b7280;
      }


      .code-content .number {
        color: #f87171;
      }
    hash: 9d9d5454dfaec02c2d711b613b1bf8f4bbde416a1c6dbc193a06d79be375c9f8
    size: 1549
  /src/index.css:
    type: content
    content: >
      @import "tailwindcss";


      @layer base {
        body {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #0f172a;
          color: #f1f5f9;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }

        /* Range input styling */
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          background: #334155;
          border-radius: 4px;
          background-image: linear-gradient(to right, #a855f7, #0ea5e9);
          background-size: 0% 100%;
          background-repeat: no-repeat;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #f1f5f9;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: all 0.15s ease;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(168, 85, 247, 0.5);
          transform: scale(1.1);
        }

        /* Audio player styling */
        audio {
          height: 40px;
          border-radius: 8px;
          background-color: #1e293b;
        }

        audio::-webkit-media-controls-panel {
          background-color: #1e293b;
        }

        audio::-webkit-media-controls-play-button {
          background-color: #a855f7;
          border-radius: 50%;
        }

        audio::-webkit-media-controls-timeline {
          background-color: #334155;
          border-radius: 4px;
          height: 4px;
        }

        /* Animations */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
          }
        }

        .animate-pulse-purple {
          animation: pulse 2s infinite;
        }

        /* Details/Summary styling */
        details summary {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        details summary::-webkit-details-marker {
          display: none;
        }
        
        /* Using Tailwind's responsive classes instead of custom media queries */
        
        details summary::after {
          content: '+';
          font-size: 1.25rem;
          transition: transform 0.2s ease;
          color: #a855f7;
        }
        
        details[open] summary::after {
          content: '-';
        }
        
        details summary:hover {
          color: #a855f7;
        }
      }
    hash: 3736dc9388fbb6cd285db16dab99649ccbd6515edf4e1ad612a76154d3ec08cf
    size: 2647
  /src/main.jsx:
    type: content
    content: |
      import { StrictMode } from 'react'
      import { createRoot } from 'react-dom/client'
      import './index.css'
      import App from './App.jsx'

      createRoot(document.getElementById('root')).render(
        <StrictMode>
          <App />
        </StrictMode>,
      )
    hash: 4b4b864dbe45253425d0c925337180ec07e204295179f80f59551216f466f618
    size: 229
  /tailwind.config.js:
    type: content
    content: |
      /** @type {import('tailwindcss').Config} */
      export default {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
        darkMode: 'class', // or 'media' for system preference
      }
    hash: 2daa54594b57830f184c1244224bcdc47f6a439848dde53364f7cbbe1213cb8e
    size: 239
  /vite.config.js:
    type: content
    content: >
      import { defineConfig } from 'vite'

      import react from '@vitejs/plugin-react'

      import tailwindcss from '@tailwindcss/vite'


      // https://vite.dev/config/

      export default defineConfig({
        plugins: [
          react(),
          tailwindcss(),
        ],
        server: {
          port: 5173,
          strictPort: true, // This prevents Vite from trying another port if 5173 is in use
        },
      })
    hash: b4dec545f48a1045b3c0bf448094a60ca2d99356f5c4a1aa2fdb4f1fb1bcf0c8
    size: 353