"use client";
import { useState } from "react";
import Loader from "./Loader";

export default function Chatbot() {
  const [inputText, setInputText] = useState("");
  const [generatedAudio, setGeneratedAudio] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateText = async () => {
    try {
      setLoading(true);
      if (inputText === "") {
        throw new Error("Input Vacio");
      }
      const response = await fetch("/api/generate-audio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputText }),
      });

      const data = await response.arrayBuffer();
      const blob = new Blob([data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);
      setGeneratedAudio(audioUrl);
      setLoading(false);
    } catch (error) {
      setError(`${error}`);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className=" text-heading3-bold">Texto ={">"} Audio</h1>
      <textarea
        className="mt-5 border rounded-lg p-3 resize-none"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Ingresa texto a convertir... (En ingles)"
        rows={8}
        cols={50}
      />
      <br />
      <button
        onClick={handleGenerateText}
        className=" bg-black text-white rounded-lg p-2 hover:text-black hover:bg-white border-black border mt-3"
      >
        Generar Audio
      </button>
      {error && <p className="mt-3 text-red-600">{error}</p>}
      {!generatedAudio && loading && <Loader/>}
      {generatedAudio && (
        <div>
          <h2 className="my-3">Audio Generado:</h2>
          {loading ? (
            <Loader/>
          ) : (
            <audio controls>
              <source id="audio" type="audio/flac" src={generatedAudio!} />
            </audio>
          )}
        </div>
      )}
    </div>
  );
}
