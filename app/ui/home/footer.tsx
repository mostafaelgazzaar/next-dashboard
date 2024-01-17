import Image from "next/image";
import LogoImage from "../../../public/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            أجهزة العرض التعليمية
            <Image
              src={LogoImage}
              width={36}
              height={36}
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2023-2024 . All Rights Reserved. Built by Aya Ahmed
          </span>
        </div>
      </div>
    </footer>
  );
}
