"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

const ImageReader = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleReadText = () => {
    if (image) {
      setLoading(true);
      Tesseract.recognize(image, "eng", {
        logger: (m) => console.log(m), // Optional: For logging progress
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

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Image Text Reader</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <div className="mt-4">
          <img src={image} alt="Uploaded" className="max-w-xs" />
          <button
            onClick={handleReadText}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {loading ? "Reading..." : "Read Text from Image"}
          </button>
        </div>
      )}
      {text && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold">Extracted Text:</h2>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default ImageReader;
