import 'regenerator-runtime/runtime';
import "./App.css";
import SpeechRecognition, { useSpeechRecognition, } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  // const startListening = () =>
  //   SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const startListening = () => {
    try {
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    } catch (error) {
      console.error("Error starting speech recognition:", error);
    }
  };
  const Consolmethod = () => {
    console.log("Code is working");
  }
  const TwoMethod = () => {
    startListening,
      Consolmethod
  }

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Voice to Text Converter</h2>
        <br />
        <p>
          This Website working on Voice to Text Converter .
        </p>

        {/* <input type='text' className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </input> */}
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

// import React from "react";
// import { Mic, MicOff } from "lucide-react";
// import { useVoiceToText } from "react-speakup";

// const VoiceToText = () => {
//   const { startListening, stopListening, transcript } = useVoiceToText({
//     continuous: true,
//     lang: "en-US",
//   });

//   return (
//     <div className="flex flex-col gap-6">
//       {" "}
//       <div className="flex gap-6">
//         <Mic onClick={startListening} role="button" />
//         <MicOff onClick={stopListening} role="button" />
//       </div>
//       <h2>{transcript}</h2>
//     </div>
//   );
// };

// export default VoiceToText;
