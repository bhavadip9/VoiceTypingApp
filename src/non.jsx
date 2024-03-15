// import React from "react";
// // {
// //   "presets": ["@babel/preset-env"],
// //   "plugins": ["@babel/plugin-transform-runtime"]
// // }
// import SpeechRecognition, { useSpeechRecognition, } from "react-speech-recognition";
// import useClipboard from "react-use-clipboard";
// //import { CopyToClipboard } from "react-copy-to-clipboard";

// import "./App.css";
// import { useState } from "react";
// const App = () => {
//   const [textTocopy, settextTocopy] = useState();
//   const [isCopied, setCopied] = useClipboard(textTocopy);
//   const speechStart = () =>
//     SpeechRecognition.startListening({
//       continuous: true,
//       language: "en-IN",
//     });
//   const { transcript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();
//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <>
//       <div className="Container">
//         <div className="top-text">
//           <h1>Speech To Text Converter</h1>
//           <p>Hello I am happy to ues my app Thank you so much 😊</p>
//         </div>
//         <div className="main-content" onClick={() => settextTocopy(transcript)}>
//           {transcript}
//         </div>
//         <div className="btn-style">
//           <button onClick={setCopied}>{isCopied ? "Copy" : "Nope"}</button>
//           <button onClick={speechStart}>Start Listening</button>
//           <button onClick={SpeechRecognition.stopListening}>
//             Stop Listening
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;