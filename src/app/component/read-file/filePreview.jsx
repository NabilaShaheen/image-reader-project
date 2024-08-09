"use client";

const FilePreview = ({ fileContent }) => {
  return (
    <pre className="mt-4 p-2 border border-gray-300 rounded-lg whitespace-pre-wrap">
      {fileContent}
    </pre>
  );
};

export default FilePreview;
