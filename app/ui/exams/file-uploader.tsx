"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import "./file-uploader.css";

export default function FileUploader({
  userId,
  moduleId,
}: {
  userId: string;
  moduleId: string;
}) {
  const [imageUrl, setImageUrl] = useState("/images/placeholder-image.jpg");
  const onImageFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      console.warn("no file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      console.warn("files list is empty");
      return;
    }

    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);
    formData.append("moduleId", moduleId);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        console.error("something went wrong, check your console.");
        return;
      }

      const data: { fileUrl: string } = await res.json();
      console.log(data);
    } catch (error) {
      console.error("something went wrong, check your console.");
    }

    /** Reset file input */
    e.target.type = "text";
    e.target.type = "file";
  };

  return (
    <fieldset className="block">
      <label className="block">
        <legend>please deploy your PDF exercise</legend>
        <hr className="mt-2 mb-4" />

        <span className="sr-only">Choose Files</span>
        <input
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          type="file"
          onChange={onImageFileChange}
        />
      </label>
    </fieldset>
  );
}
