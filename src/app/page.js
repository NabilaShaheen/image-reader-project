import Image from "next/image";
import Link from "next/link";
// import FileUpload from "./component/fileUpload";
import ImageReader from "./component/read-file/imageReader";
import FileUpload from "./component/read-file/fileUpload";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       {/* <div className="flex justify-evenly w-full">
        <Link href="/upload-button">Upload Button</Link>
        <Link href="/upload-dnd">Drag n Drop Button</Link>
      </div> */}
      <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
       
        <div className="flex container mx-auto p-4">
          <ImageReader />
          <FileUpload />
        </div>
      
    </main>
  );
}
