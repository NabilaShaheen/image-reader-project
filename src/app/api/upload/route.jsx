// app/api/upload/route.js
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req) {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), 'public/uploads');
  form.keepExtensions = true;

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(new Response('Error uploading file', { status: 500 }));
      }

      const file = files.file[0];
      resolve(new Response(JSON.stringify({ filePath: file.filepath }), { status: 200 }));
    });
  });
}
