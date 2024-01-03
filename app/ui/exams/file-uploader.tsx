"use client";
import { ChangeEvent, useState } from "react";
import "./file-uploader.css";

export default function FileUploader({
  userId,
  moduleId,
  title,
}: {
  userId: string;
  moduleId: number;
  title: string;
}) {
  const [message, setMessage] = useState<string>("من فضلك اختار الملف");
  const onImageFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      console.warn("لم يتم اختيار الملف");
      setMessage("لم يتم اختيار الملف");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      console.warn("files list is empty");
      setMessage("لم يتم اختيار الملف");
      return;
    }

    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);
    formData.append("moduleId", moduleId.toString());

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        console.error("something went wrong, check your console.");
        setMessage("حدث خطأ ما");
        return;
      }
      setMessage("تم رفع الملف بنجاح");

      const data: { fileUrl: string } = await res.json();
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
        <legend className="text-xl text-center font-semibold mt-3">
          {title}
        </legend>
        <hr className="mt-2 mb-4" />
        <p className="text-center text-gray-500 text-lg">{message}</p>
        <span className="sr-only">من فضلك اختار الملف</span>
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
          placeholder="اختر الملف"
        />
      </label>
    </fieldset>
  );
}
