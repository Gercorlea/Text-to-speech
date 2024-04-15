import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { inputText } = await req.json();
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/fastspeech2-en-ljspeech",
      {
        headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}` },
        method: "POST",
        body: JSON.stringify(inputText),
      }
    );

    if (!response.ok) {
      throw new Error("Request Failed");
    }
    const audioData = await response.arrayBuffer();

    return new NextResponse(audioData, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    console.log("generate-audio_POST");
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
};
