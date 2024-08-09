"use client";

const ExtractedText = ({ text }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold">Extracted Text:</h2>
      <p>{text}</p>
    </div>
  );
};

export default ExtractedText;
