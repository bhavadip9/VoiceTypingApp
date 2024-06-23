

import 'regenerator-runtime/runtime';
import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () => {
    try {
      console.log("Starting speech recognition");  // Debugging line
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    } catch (error) {
      console.error("Error starting speech recognition:", error);
    }
  };

  const Consolmethod = () => {
    console.log("Code is working");  // Debugging line
  }

  const TwoMethod = () => {
    startListening();
    Consolmethod();
  }

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <div>Browser does not support speech recognition.</div>;
  }

  return (
    <>
      <div className="container">
        <h2>Voice to Text Converter</h2>
        <br />
        <p>
          This Website works on Voice to Text Converter.
        </p>

        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
          <button onClick={TwoMethod}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
