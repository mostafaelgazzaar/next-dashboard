import {
  BookOpenIcon,
  MapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { PhoneArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import HomeImage from "../../../public/features/home.png";
import InstructionImage from "../../../public/features/instructions.png";
import ContactImage from "../../../public/features/contact.png";
import AboutImage from "../../../public/features/about.png";
import DashboardImage from "../../../public/features/dashboard.png";
import ExamsImage from "../../../public/features/exams.png";

export default function Features() {
  return (
    <section className="flex items-center justify-center bg-gray-50 dark:bg-gray-800">
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="max-w-xl mx-auto">
          <h1 className="mb-4 text-3xl font-bold text-center dark:text-white">
            ثانياً: ادوات الإبحار والتنقل داخل البيئة{" "}
          </h1>
          <p className="mb-16 text-base text-center text-gray-500 text-justify">
            اليك بعض المميزات التي تقدمها لك منصة الكترونية للتعليم الالكتروني
            والتي من خلالها يمكنك الاستفادة من الدورات التدريبية والمحاضرات
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <MapIcon className="w-6 h-6 text-white fill-current" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              الصفحة الرئيسية
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              تعرف على الصفحة الرئيسية للمنصة والتي تحتوي على المقدمة والاهداف
            </p>
            <div className="flex justify-center w-full mt-2">
              <Image src={HomeImage} alt="home" width="250" />
            </div>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              التعليمات
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              تعرف على التعليمات الخاصة بالمنصة وكيفية الاستفادة منها وتعرف ايضا
              علي كل ما يخص المنصة من معلومات
            </p>
            <div className="flex justify-center w-full">
              <Image src={InstructionImage} alt="home" width="250" />
            </div>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <UserGroupIcon className="w-6 h-6 text-white fill-current" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              لوحة المعلومات
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              تعرف على لوحة المعلومات والتي تحتوي على كل ما يخصك من معلومات
              ونتائخ الاختبارات والمحاضرات
            </p>
            <div className="flex justify-center w-full mt-3 ">
              <Image src={DashboardImage} alt="home" width="250" />
            </div>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <BookOpenIcon className="w-6 h-6 text-white fill-current" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              الموديولات
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              تعرف على الموديولات المتاحة والتي تحتوي على محاضرات واختبارات
              ومحتويات متنوعة وتتكون من 5 موديلات مختلفة
            </p>
            <div className="flex justify-center w-full mx-2">
              <Image src={ExamsImage} alt="home" width="250" />
            </div>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <UserGroupIcon className="w-6 h-6 text-white fill-current" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              من نحن{" "}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              من خلال هذه الصفحة يمكنك التعرف على القائمين على المنصة والمشرفين
            </p>
            <div className="flex justify-center w-full mt-3">
              <Image src={AboutImage} alt="home" width="250" />
            </div>
          </div>
          <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg ">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <PhoneArrowUpRightIcon className="w-6 h-6 text-white fill-current" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              تواصل معنا
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              يمكنك التواصل معنا من خلال هذه الصفحة وارسال اي استفسارات او مشاكل
              تواجهك عن طريق البريد الالكتروني او الواتساب او فيس بوك
            </p>
            <div className="flex  justify-center w-full my-2">
              <Image src={ContactImage} alt="home" width="250" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
