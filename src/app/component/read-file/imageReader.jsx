"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";
import LanguageSelector from "./languageSelector";
import ImageUpload from "./imageUpload";
import ExtractedText from "./extractedText";

const ImageReader = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("eng");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleReadText = () => {
    if (image) {
      setLoading(true);
      Tesseract.recognize(image, language, {
        logger: (m) => console.log(m),
      })
        .then(({ data: { text } }) => {
          setText(text);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "extracted-text.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Image Text Reader</h1>
      <ImageUpload handleImageUpload={handleImageUpload} />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      {image && (
        <div className="mt-4">
          <img src={image} alt="Uploaded" className="max-w-full h-auto mx-auto" />
          <button
            onClick={handleReadText}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full sm:w-auto"
          >
            {loading ? "Reading..." : "Read Text from Image"}
          </button>
          {text && (
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Download Text
            </button>
          )}
        </div>
      )}
      {text && <ExtractedText text={text} />}
    </div>
  );
};

export default ImageReader;
