import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-8">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            The Main Goal
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            the main goal of this project is to create a platform where people
            can share their ideas and get feedback from other people. na allow
            you to have exam and test online and also review your performance
            and also get feedback from your teacher .
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard/exams/1"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <PencilSquareIcon className="w-5 h-5 mr-2" />
              GO TO EXAM
            </a>
            <a
              href="/dashboard/customers"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Go To Dashboard
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-lg"
            src="/hero.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}
