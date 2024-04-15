This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repository:
`https://github.com/Gercorlea/Text-to-speech.git`

Second, run the command:
```bash
npm install
```

Third, create a file named `.env.local` on the route folder and add your [Hugging Face](https://huggingface.co/settings/tokens) Access Token

Last, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Model

[facebook/fastspeech2-en-ljspeech](https://huggingface.co/facebook/fastspeech2-en-ljspeech) - Implemented using [Hugging Face](https://huggingface.co/)

[FastSpeech 2](https://arxiv.org/abs/2006.04558) text-to-speech model from fairseq S^2 ([paper](https://arxiv.org/abs/2109.06912)/[code](https://github.com/pytorch/fairseq/tree/main/examples/speech_synthesis)):
- English
- Single-speaker female voice
- Trained on [LJSpeech](https://keithito.com/LJ-Speech-Dataset/)

#### The LJ Speech Dataset

This is a public domain speech dataset consisting of 13,100 short audio clips of a single speaker reading passages from 7 non-fiction books. A transcription is provided for each clip. Clips vary in length from 1 to 10 seconds and have a total length of approximately 24 hours.

## Views
![View Before Converting](https://github.com/Gercorlea/Text-to-speech/blob/master/public/ViewBefore.png?raw=true)
![View While Loading](https://github.com/Gercorlea/Text-to-speech/blob/master/public/ViewLoading.png?raw=true)
![View While Loading 2](https://github.com/Gercorlea/Text-to-speech/blob/master/public/ViewLoading2.png?raw=true)
![View After Converting](https://github.com/Gercorlea/Text-to-speech/blob/master/public/ViewAfter.png?raw=true)
