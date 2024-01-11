import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ChartBarIcon } from "@heroicons/react/20/solid";
import IntroImage from "../../../public/images/intro.jpeg";

export default function Banner() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-8">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-xl font-bold  tracking-normal md:text-xl xl:text-4xl dark:text-white">
            مقدمة عامة للتعريف ببيئة التعلم:
          </h1>
          <p className="max-w-2xl mb-2 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            عزيزي الطالب/الطالبة: اهلاً ومرحبا بك في بيئة التعلم الالكترونية
            لدراسة موضوعات أجهزة العروض التعليمية نتمنى لك رحلة تعليمية ممتعة
            سوف نتعرف معاً الاَن على:
          </p>
          <ul className="list-disc px-10 mb-3">
            <li>مقدمة عامة عن البيئة</li>
            <li>التعريف ببيئة التعلم الالكترونية</li>
            <li>الأهداف العامة لموضوعات التعلم </li>
          </ul>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-lg"
            src={IntroImage}
            alt="intro image"
          />
        </div>
      </div>
    </section>
  );
}
