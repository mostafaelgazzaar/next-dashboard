import {
  ArrowPathIcon,
  ArrowUpIcon,
  BookOpenIcon,
  CursorArrowRippleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Instructions() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <h2 className="text-4xl font-bold p-2 mr-5">التعليمات</h2>
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-5 lg:grid lg:justify-stretch lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-bold  text-gray-900 dark:text-white">
              أولاً : التعليمات العامة لسهولة دراسة المحتوى فى بيئة التعلم
              الالكترونية
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              عزيزي الطالب إليك بعض التعليمات التي تساعدك في السير داخل البيئة
              ودراسة أجهزة العرض التعليمية ببيئة التعلم الالكترونية:
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400  ml-2"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white text-justify">
                  عزيزي الطالب فى البداية بعد تسجيل دخولك إلى بيئة التعلم سوف
                  تتواجد في الصفحة الرئيسية التي من خلالها سوف تتعرف على مقدمة
                  عامة والتعريف ببيئة التعلم الالكترونية والاهداف العامة للمحتوى
                  وتوجيهك الى التعليمات.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 ml-2"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white text-justify">
                  سوف تتوجه الأن الى تبويب موديولات والذي يشمل على خمس موديولات
                  يتم دراستها تباعاً من الموديول الاول وصولاً للموديول الخامس قم
                  بالنقر على الموديول الاول لتبدأ رحلة التعلم.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 ml-2"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white text-justify">
                  عليك معرفة انه لن تتمكن من الانتقال الى الموديول الآخر إلى بعد
                  حصولك على نسبة النجاح وإتقان التعلم فى ذلك الموديول وهي 55%
                  والتي تظهر على لوحة المعلومات.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 ml-2"
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
                  كل موديول يحتوي على أربع أقسام وهي:
                  <ul role="list" className="flex pt-3 gap-8">
                    <li className="flex space-x-3">
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        الأهداف{" "}
                        <CursorArrowRippleIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        المحتوى
                        <VideoCameraIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        الاختبار البنائي{" "}
                        <BookOpenIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        الانشطة{" "}
                        <ArrowUpIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
                      </span>
                    </li>
                  </ul>
                  <ul className="list-disc py-3 px-5">
                    <li>
                      {" "}
                      الأهداف: تشمل على الهدف العام والأهداف الإجرائية للموديول.
                    </li>
                    <li className="text-justify">
                      المحتوى: يشمل على ملف فيديو يشرح المحتوى الخاص بالموديول
                      وسوف يتم تسجيل مدة مشاهدتك للفيديو ويظهر لك أيضاً التعليق
                      والاعجاب بالمحتوى ليمكنك التفاعل مع المحتوى وتقيمك له
                      بالنجوم وعليك معرفة ان قيامك بذلك سوف يظهر على لوحة
                      المعلومات لتقييم أدائك.
                    </li>
                    <li className="text-justify">
                      الاختبارات: بعد دراسة المحتوى عليك التوجه الى الاختبارات
                      والتي تشمل على خمس أسئلة اختيار من متعدد عليك الإجابة عنها
                      والنقر على زر{" "}
                      <button className="rounded-md bg-blue-400 mx-2 p-3">
                        تأكيد
                      </button>
                      بعد الانتهاء لتسجيل اجابتك وإظهار الدرجة التي حصلت عليها
                      كما يمكنك إعادة لاختبار للتحسين بالنقر على علامة{" "}
                      <ArrowPathIcon className="w-6 h-6 text-green-500 inline" />
                    </li>
                    <li>
                      الأنشطة: عليك التوجه الى النشاط المطلوب ورفعه على البيئة
                      من خلال النقر على{" "}
                      <span className="border border-purple-400 rounded-md ">
                        Choose file
                      </span>{" "}
                      موافق ليتم الرفع.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 ml-2"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white text-justify">
                  بعد دراسة كل موديول والانتهاء من الاختبارات والأنشطة المطلوبة
                  عليك التوجه الى لوحة معلومات للتعرف على مؤشرات ادائك وإتقانك
                  فى الموديول التعليمي ومن خلالها يسمح لك بالانتقال إلى الموديول
                  التالي إذا كانت معدلات الأداء تعدت 55% أو إعادة دراسة الموديول
                  إذا كانت اقل من ذلك ولن يفتح لك الموديول التالي، ملحوظة في
                  حالة الوصول الى النسبة المطلوبة فأعلي سوف يظهر بجوار الموديول
                  مكتمل باللون الأخضر وعند الدخول اليه مرة أخرى يظهر تأثير بصرى
                  مبهج علامة على الانتهاء منه وعندما يكون النسبة أقل من النسبة
                  المطلوبة سوف تظهر غير مكتمل باللون الأحمر والموديول التالي له
                  يظهر بجانبه مغلق.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400 ml-2"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white text-justify">
                  ملحوظة إذا كنت من طلاب بيئة التعلم المستوى الأول سوف تظهر
                  مؤشرات ادائك على لوحة المعلومات في شكل دائري بالنسبة المئوية
                  التي حصلت عليها بشكل مختصر واعطائك تقيم نجمي للأداء كمحفز، أما
                  إذا كنت من طلاب ببيئة المستوى الثاني سوف يتم عرض مؤشرات أدائك
                  على لوحة المعلومات بشكل أكثر تفصيلا من خلال النسبة المئوية
                  التي حصلت عليها والتقييم النجمي وكذلك مخطط بياني للمقارنة بين
                  أدائك في الموديولات التي قمت بدراستها وكذلك معدل أدائك في كل
                  مهامه من المهمات المطلوبة بالتفصيل، أما إذا كنت من طلاب ببيئة
                  المستوى الثالث سوف يتم عرض مؤشرات أدائك على لوحة المعلومات
                  بشكل أكثر تفصيلا موجها بمعني عرض النسبة المئوية التي حصلت
                  عليها والتقييم النجمي وكذلك مخطط بياني للمقانة بين أدائك في
                  الموديولات التي قمت بدراستها وكذلك معدل أدائك في كل مهامه من
                  المهمات المطلوبة بالتفصيل وتوجهيك الى المهمات التي لم تنجزها
                  على أكمل وجه للتحسين من أدائك النقر عليها والانتقال اليها
                  واتمامها كذلك عرض المحتوى بطريقة أخرى في شكل ملف pdf يمكنك
                  قراءته وتحميله.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400  ml-2"
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
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white text-justify">
                  وفى حالة وجود أي استفسار يمكن التواصل مع المعلم من خلال سبل
                  التواصل المختلفة الموجودة في تبويب تواصل معنا وسوف يتم الرد
                  على استفساراتك.{" "}
                </span>
              </li>
            </ul>
            <p className="font-light lg:text-xl">
              فى النهاية نتمنى لك رحلة تعليمية ممتعة فى بيئة التعلم وتحقيق أهداف
              التعلم.
            </p>
          </div>
          <Image
            className="hidden  mb-4 rounded-lg lg:mb-0 lg:flex mr-20"
            src="/goals.png"
            width={400}
            height={200}
            alt="feature image 2"
          />
        </div>
      </div>
    </section>
  );
}
