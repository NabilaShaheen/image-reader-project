"use client";

const FileInput = ({ handleFileChange }) => {
  return (
    <input
      type="file"
      onChange={handleFileChange}
      className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
    />
  );
};

export default FileInput;
