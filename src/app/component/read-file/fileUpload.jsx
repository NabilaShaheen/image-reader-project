"use client";

import { useState } from "react";
import axios from "axios";
import FileInput from "./FileInput";
import FilePreview from "./FilePreview";

const FileUpload = () => {
  const [fileContent, setFileContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("File uploaded:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleDownload = () => {
    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file ? file.name : "download.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Upload and Read File</h1>
      <FileInput handleFileChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition mb-2"
      >
        Upload
      </button>
      <FilePreview fileContent={fileContent} />
      {fileContent && (
        <button
          onClick={handleDownload}
          className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
        >
          Download Content
        </button>
      )}
    </div>
  );
};

export default FileUpload;
