import { Storage } from '@google-cloud/storage';
import mime from "mime";
import { NextRequest, NextResponse } from "next/server";
import { updatePdf } from "@/app/lib/actions";
import fs from "fs";
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const file = formData.get("file") as Blob | null;
  const userId = formData.get("userId") as string;
  const moduleId = Number(formData.get("moduleId"));
  if (!file) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 },
    );
  }

  
  
  const buffer = Buffer.from(await file.arrayBuffer());
  const storage = new Storage();
  const bucketName = 'cloud-storage-85036.appspot.com'; // replace with your bucket name

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${file.name.replace(/\.[^/.]+$/, "")}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
    const blob = storage.bucket(bucketName).file(filename);
    const blobStream = blob.createWriteStream();

  return new Promise((resolve, reject) => {
    blobStream.on('error', (err:string) => {
      console.error('Error while trying to upload a file\n', err);
      return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    });
console.log(blob.name);

    blobStream.on('finish', async () => {
      const url = `https://storage.googleapis.com/${bucketName}/${blob.name}`;
      await updatePdf(url, userId, moduleId);
      resolve(NextResponse.json({ fileUrl: url }));
    });
    blobStream.end(buffer);

  });

  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}