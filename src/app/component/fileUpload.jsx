// "use client";

// import { useState } from "react";
// import Tesseract from "tesseract.js";

// const ImageReader = () => {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [language, setLanguage] = useState("eng"); // Default language

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleReadText = () => {
//     if (image) {
//       setLoading(true);
//       Tesseract.recognize(image, language, {
//         logger: (m) => console.log(m), // Optional: For logging progress
//       })
//         .then(({ data: { text } }) => {
//           setText(text);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error(err);
//           setLoading(false);
//         });
//     }
//   };

//   return (
//     <div className="p-4 md:p-8 bg-gray-50 rounded-lg shadow-lg">
//       <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">Image Text Reader</h1>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
//       />
      
//       <div className="mt-4">
//         <label htmlFor="language" className="mr-2 text-sm md:text-base">Select Language:</label>
//         <select 
//           id="language" 
//           value={language} 
//           onChange={(e) => setLanguage(e.target.value)} 
//           className="px-2 py-1 border border-gray-300 rounded-lg w-full md:w-auto"
//         >
//           <option value="eng">English</option>
//           <option value="spa">Spanish</option>
//           <option value="fra">French</option>
//           <option value="deu">German</option>
//           <option value="chi_sim">Chinese (Simplified)</option>
//           <option value="ara">Arabic</option>
//           <option value="rus">Russian</option>
//           <option value="urd">Urdu</option> {/* Added Urdu */}
//           {/* Add more languages as needed */}
//         </select>
//       </div>

//       {image && (
//         <div className="mt-4">
//           <img src={image} alt="Uploaded" className="max-w-full h-auto rounded-lg shadow-md" />
//           <button
//             onClick={handleReadText}
//             className="mt-4 w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//           >
//             {loading ? "Reading..." : "Read Text from Image"}
//           </button>
//         </div>
//       )}
//       {text && (
//         <div className="mt-4 p-4 bg-gray-100 rounded-lg">
//           <h2 className="text-lg font-semibold">Extracted Text:</h2>
//           <p className="whitespace-pre-wrap">{text}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageReader;


// // "use client";

// // import { useState } from "react";
// // import Tesseract from "tesseract.js";

// // const ImageReader = () => {
// //   const [image, setImage] = useState(null);
// //   const [text, setText] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [language, setLanguage] = useState("eng"); // Default language

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setImage(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleReadText = () => {
// //     if (image) {
// //       setLoading(true);
// //       Tesseract.recognize(image, language, {
// //         logger: (m) => console.log(m), // Optional: For logging progress
// //       })
// //         .then(({ data: { text } }) => {
// //           setText(text);
// //           setLoading(false);
// //         })
// //         .catch((err) => {
// //           console.error(err);
// //           setLoading(false);
// //         });
// //     }
// //   };

// //   return (
// //     <div className="p-8">
// //       <h1 className="text-xl font-bold mb-4">Image Text Reader</h1>
// //       <input type="file" accept="image/*" onChange={handleImageUpload} />
      
// //       <div className="mt-4">
// //         <label htmlFor="language" className="mr-2">Select Language:</label>
// //         <select 
// //           id="language" 
// //           value={language} 
// //           onChange={(e) => setLanguage(e.target.value)} 
// //           className="px-2 py-1 border rounded"
// //         >
// //           <option value="eng">English</option>
// //           <option value="spa">Spanish</option>
// //           <option value="fra">French</option>
// //           <option value="deu">German</option>
// //           <option value="chi_sim">Chinese (Simplified)</option>
// //           <option value="ara">Arabic</option>
// //           <option value="rus">Russian</option>
// //           <option value="urd">Urdu</option> {/* Added Urdu */}
// //           {/* Add more languages as needed */}
// //         </select>
// //       </div>

// //       {image && (
// //         <div className="mt-4">
// //           <img src={image} alt="Uploaded" className="max-w-xs" />
// //           <button
// //             onClick={handleReadText}
// //             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
// //           >
// //             {loading ? "Reading..." : "Read Text from Image"}
// //           </button>
// //         </div>
// //       )}
// //       {text && (
// //         <div className="mt-4 p-4 bg-gray-100 rounded">
// //           <h2 className="text-lg font-semibold">Extracted Text:</h2>
// //           <p>{text}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ImageReader;



// // // app/components/FileUpload.js
// // 'use client';

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const FileUpload = () => {
// //   const [fileContent, setFileContent] = useState('');
// //   const [file, setFile] = useState(null);

// //   const handleFileChange = (event) => {
// //     const selectedFile = event.target.files[0];
// //     if (selectedFile) {
// //       setFile(selectedFile);

// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setFileContent(e.target.result);
// //       };
// //       reader.readAsText(selectedFile);
// //     }
// //   };

// //   const handleUpload = async () => {
// //     if (file) {
// //       const formData = new FormData();
// //       formData.append('file', file);

// //       try {
// //         const response = await axios.post('/api/upload', formData, {
// //           headers: {
// //             'Content-Type': 'multipart/form-data',
// //           },
// //         });
// //         console.log('File uploaded:', response.data);
// //       } catch (error) {
// //         console.error('Error uploading file:', error);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
// //       <h1 className="text-2xl font-bold mb-4 text-center">Upload and Read File</h1>
// //       <input
// //         type="file"
// //         onChange={handleFileChange}
// //         className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
// //       />
// //       <button
// //         onClick={handleUpload}
// //         className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
// //       >
// //         Upload
// //       </button>
// //       <pre className="mt-4 p-2 border border-gray-300 rounded-lg whitespace-pre-wrap">{fileContent}</pre>
// //     </div>
// //   );
// // };

// // export default FileUpload;
