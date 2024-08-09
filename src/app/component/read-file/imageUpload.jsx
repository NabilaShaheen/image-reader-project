"use client";

const ImageUpload = ({ handleImageUpload }) => {
  return (
    <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full sm:w-auto" />
  );
};

export default ImageUpload;
