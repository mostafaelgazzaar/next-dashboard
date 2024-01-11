import Image from "next/image";
import { MapIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/20/solid";

export default function MainSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 overflow-hidden">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              الأهداف العامة لموضوعات التعلم:
            </h2>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  التعرف على المفاهيم والمعارف الأساسية المرتبطة بأجهزة العرض
                  الضوئي{" "}
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  التعرف على جهاز كاميرا تصوير سطح المكتب.{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  التعرف على جهاز عرض البيانات.{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  التعرف على جهاز عرض السبورة الذكية.{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  التعرف على جهاز العرض الهولوجرام.
                </span>
              </li>
            </ul>
            <p className="font-light lg:text-xl text-gray-500">
              في النهاية برجاء التوجه الى التعليمات لمعرفة كيفية السير في بيئة
              التعلم ودراسة المحتوى من خلال النقر على زر التعليمات.
            </p>
          </div>
          <Image
            className="hidden  mb-4 rounded-lg lg:mb-0 lg:flex  mr-4"
            src="/goals.png"
            width={300}
            height={200}
            alt="dashboard feature image"
          />

          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard/exams/1"
              className=" ml-3 inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200  bg-white rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <PencilSquareIcon className="w-5 h-5 ml-2" />
              التوجة لدراسة المحتوي
            </a>
            <a
              href="/dashboard/information"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <MapIcon className="w-5 h-5 ml-2" />
              التوجة الي التعليمات{" "}
            </a>
          </div>
        </div>

        {/*<div className="items-center gap-5 lg:grid lg:grid-cols-2 xl:gap-16">*/}
        {/*  <Image*/}
        {/*    className="hidden  mb-4 rounded-lg lg:mb-0 lg:flex"*/}
        {/*    src="/goals.png"*/}
        {/*    width={300}*/}
        {/*    height={200}*/}
        {/*    alt="feature image 2"*/}
        {/*  />*/}
        {/*  <div className="text-gray-500 sm:text-lg dark:text-gray-400">*/}
        {/*    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">*/}
        {/*      تعليمات مقرر أجهزة العروض التعليمية:*/}
        {/*    </h2>*/}
        {/*    <p className="mb-8 font-light lg:text-xl">*/}
        {/*      عزيزي الطالب إليك بعض التعليمات التي تساعدك في دراسة مقرر أجهزة*/}
        {/*      العروض التعليمية داخل بيئة التعلم الالكترونية:*/}
        {/*    </p>*/}
        {/*    <ul*/}
        {/*      role="list"*/}
        {/*      className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"*/}
        {/*    >*/}
        {/*      <li className="flex space-x-3">*/}
        {/*        <svg*/}
        {/*          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"*/}
        {/*          fill="currentColor"*/}
        {/*          viewBox="0 0 20 20"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            fillRule="evenodd"*/}
        {/*            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
        {/*            clipRule="evenodd"*/}
        {/*          ></path>*/}
        {/*        </svg>*/}
        {/*        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">*/}
        {/*          عزيزي الطالب فى البداية بعد تسجيل دخولك إلى بيئة التعلم عليك*/}
        {/*          التوجه لإجراء الاختبارات القبلية الموجودة بتبويب أدوات البحث{" "}*/}
        {/*        </span>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3">*/}
        {/*        <svg*/}
        {/*          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"*/}
        {/*          fill="currentColor"*/}
        {/*          viewBox="0 0 20 20"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            fillRule="evenodd"*/}
        {/*            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
        {/*            clipRule="evenodd"*/}
        {/*          ></path>*/}
        {/*        </svg>*/}
        {/*        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">*/}
        {/*          ثم التوجه الى الموديولات التعليمية حيث يشمل على خمس موديولات*/}
        {/*          يتم دراستها تباعاً من الموديول الاول وصولاً للموديول الخامس قم*/}
        {/*          بالنقر على الموديول الاول لتبدأ رحلة التعلم.{" "}*/}
        {/*        </span>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3">*/}
        {/*        <svg*/}
        {/*          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"*/}
        {/*          fill="currentColor"*/}
        {/*          viewBox="0 0 20 20"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            fillRule="evenodd"*/}
        {/*            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
        {/*            clipRule="evenodd"*/}
        {/*          ></path>*/}
        {/*        </svg>*/}
        {/*        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">*/}
        {/*          لن تتمكن من الانتقال الى الموديول الآخر إلى بعد حصولك على نسبة*/}
        {/*          النجاح وإتقان التعلم فى ذلك الموديول وهي 55%.{" "}*/}
        {/*        </span>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3">*/}
        {/*        <svg*/}
        {/*          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"*/}
        {/*          fill="currentColor"*/}
        {/*          viewBox="0 0 20 20"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            fillRule="evenodd"*/}
        {/*            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
        {/*            clipRule="evenodd"*/}
        {/*          ></path>*/}
        {/*        </svg>*/}
        {/*        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">*/}
        {/*          كل موديول يحتوي على الأهداف التعليمية المتوقع الوصول إليها بعد*/}
        {/*          دراسة المحتوى وكذلك المحتوى التعليمي والاختبارات البنائية*/}
        {/*          للتأكد من إتقان المحتوى والنشاط المطلوب.{" "}*/}
        {/*        </span>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3">*/}
        {/*        <svg*/}
        {/*          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"*/}
        {/*          fill="currentColor"*/}
        {/*          viewBox="0 0 20 20"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            fillRule="evenodd"*/}
        {/*            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
        {/*            clipRule="evenodd"*/}
        {/*          ></path>*/}
        {/*        </svg>*/}
        {/*        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">*/}
        {/*          عليك التعرف على الأهداف التعليمية ثم دراسة المحتوى والقيام*/}
        {/*          بتنفيذ الاختبارات البنائية المطلوبة فى كل موديول ورفع الأنشطة*/}
        {/*          المطلوبة وإرسالها للمعلم.{" "}*/}
        {/*        </span>*/}
        {/*      </li>*/}
        {/*      <li className="flex space-x-3">*/}
        {/*        <svg*/}
        {/*          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"*/}
        {/*          fill="currentColor"*/}
        {/*          viewBox="0 0 20 20"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*            fillRule="evenodd"*/}
        {/*            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"*/}
        {/*            clipRule="evenodd"*/}
        {/*          ></path>*/}
        {/*        </svg>*/}
        {/*        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">*/}
        {/*          بعد دراسة كل موديول سوف تعرض لك لوحة معلومات تعبر عن مؤشرات*/}
        {/*          ادائك وإتقانك فى بيئة التعلم والموديول التعليمي ومن خلالها*/}
        {/*          يسمح لك بالانتقال إلى الموديول التالي إذا كانت معدلات الأداء*/}
        {/*          تعدت 55% أو توجيهك الى إعادة دراسة الموديول إذا كانت اقل من*/}
        {/*          ذلك.*/}
        {/*        </span>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*    <p className="font-light lg:text-xl">*/}
        {/*      فى النهاية نتمنى لك رحلة تعليمية ممتعة فى بيئة التعلم وتحقيق أهداف*/}
        {/*      التعلم.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
