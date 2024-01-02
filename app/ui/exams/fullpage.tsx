"use client";
import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import "./fullpage.css";
import TestComponent from "@/app/ui/exams/test-component";
import FileUploader from "@/app/ui/exams/file-uploader";
import { Rating } from "@/app/ui/exams/ratings";
import { LikeButton } from "@/app/ui/exams/like-button";
import { User, UserModules, UserPerformance } from "@/app/lib/definitions";

import dynamic from "next/dynamic";
import {
  postPlayedDuration,
  updateModuleWatchedDuration,
} from "@/app/lib/actions/module-actions";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { ArrowUpIcon, VideoCameraIcon } from "@heroicons/react/20/solid";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import CommentForm from "./comment-form";
import { Module } from "@/app/lib/definitions";
import ReactConfetti from "react-confetti";

import Duration from "@/app/ui/exams/duration";
import DislikeButton from "./dislike-button";
import useWindowSize from "@/app/lib/hooks/use-window";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
export default function FullPage({
  data,
  user,
  userModule,
  userPerformance,
}: {
  data: any;
  user: User;
  userModule: UserModules;
  userPerformance: UserPerformance;
}) {
  const [selectedTab, setSelectedTab] = useState("goals");
  const d: Module = data;
  const completed = userModule.completed;
  const addedLikes = userModule.added_likes || userModule.added_dislike;
  const userWatchingTime = userPerformance.time_on_platform_seconds || 0;

  const handlePlayed = async (played: number): Promise<void> => {
    const duration = Math.round(played);
    if (duration <= userModule.watched_duration) return;
    const totalUserDuration = userWatchingTime + duration;
    await postPlayedDuration(totalUserDuration, user.id);
    await updateModuleWatchedDuration(duration, d.id, user.id, d.duration);
  };
  const width = useWindowSize().width;
  const height = useWindowSize().height;

  return (
    <div>
      <div className="flex justify-center">
        {completed && (
          <ReactConfetti
            width={width}
            height={height}
            numberOfPieces={3000}
            gravity={0.05}
            recycle={false}
            wind={0.01}
          />
        )}
      </div>
      <Tab.Group>
        <Tab.List className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
          <Tab
            as="button"
            onClick={() => setSelectedTab("goals")}
            className={`inline-block w-1/4 py-4 px-4 text-md font-medium text-center border-transparent border-b-2  ${
              selectedTab === "goals"
                ? " text-gray-900 border-b-blue-800"
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            } dark:text-gray-400 dark:hover:text-gray-300`}
          >
            الأهداف
          </Tab>
          <Tab
            as="button"
            onClick={() => setSelectedTab("Video")}
            className={`inline-block w-1/4 py-4 px-4 text-md font-medium text-center border-transparent border-b-2  ${
              selectedTab === "Video"
                ? " text-gray-900 border-b-blue-800"
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            } dark:text-gray-400 dark:hover:text-gray-300`}
          >
            المحتوى
            <VideoCameraIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
          </Tab>
          <Tab
            as="button"
            onClick={() => setSelectedTab("test")}
            className={`inline-block w-1/4 py-4 px-4 text-md font-medium text-center border-transparent border-b-2 ${
              selectedTab === "test"
                ? "text-gray-900 border-b-blue-800 "
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            } dark:text-gray-400 dark:hover:text-gray-300`}
          >
            الاختبار البنائي{" "}
            <BookOpenIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
          </Tab>
          <Tab
            as="button"
            onClick={() => setSelectedTab("upload")}
            className={`inline-block w-1/4 py-4 px-4 text-md  font-medium text-center border-transparent border-b-2  ${
              selectedTab === "upload"
                ? "text-gray-900 border-b-blue-800 "
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            } dark:text-gray-400 dark:hover:text-gray-300`}
          >
            الانشطة <ArrowUpIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex justify-center">
              {completed && (
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white">
                  مكتمل
                </span>
              )}
              {!completed && (
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-300 text-black">
                  جاري التعلم
                </span>
              )}
              {completed === undefined && (
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">
                  لم يتم البدء
                </span>
              )}
            </div>
            <div className="flex flex-col items-start w-full h-full">
              <h3 className="text-3xl text-blue-500 mb-2 "> الهدف العام :</h3>
              <h4 className="text-xl text-black mb-4 font-semibold">
                {d.description}
              </h4>
              <hr className="w-full border-1 border-gray-200 my-4" />
              <h3 className="text-3xl text-blue-500 mb-2">
                الاهداف ألاجرائية :
              </h3>
              <ul className="list-disc list-inside 	 ">
                {d.goals?.goals.map((goal: string, index) => (
                  <li key={"index" + index} className="text-xl text-black mb-4">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex justify-center">
              <div key={d.id} className="container pr-10 pl-10 justify-center">
                <h1 className=" text-center italic m-4 text-2xl">{d.title}</h1>
                <Duration time={userModule.watched_duration} />

                <div className="flex place-content-center">
                  <ReactPlayer
                    url={d.video}
                    controls={true}
                    playing={false}
                    loop={true}
                    muted={true}
                    width={"100%"}
                    height={550}
                    progressInterval={25000}
                    onProgress={async (state) => {
                      await handlePlayed(state.playedSeconds);
                    }}
                  />
                </div>

                <section className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-2">
                  <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    رايك في المحتوى
                  </h5>

                  <div className="divide-y divide-gray-400 w-30 m-2">
                    <div className="  justify-center mt-2">
                      <div className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                        بعد مشاهدة المحتوى يمكنك تقييمه وترك تعليق
                      </div>

                      {!addedLikes && (
                        <div className="flex justify-center">
                          <LikeButton
                            userId={user.id}
                            moduleId={d.id}
                            interactionCount={
                              userPerformance.interactions_count
                            }
                          />
                          <DislikeButton
                            userId={user.id}
                            moduleId={d.id}
                            interactionCount={
                              userPerformance.interactions_count
                            }
                          />
                        </div>
                      )}
                      {addedLikes && (
                        <div className=" justify-center py-3">
                          <h3 className="block text-xl "> اضافة اعجاب</h3>

                          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white">
                            تم التفاعل مع المحتوى
                          </span>
                        </div>
                      )}
                    </div>

                    {userModule.added_comments && (
                      <div className=" justify-center py-3">
                        <h3 className="block text-xl "> اضافة تعليق</h3>
                        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white">
                          تم التعليق على المحتوى
                        </span>
                      </div>
                    )}
                    {!userModule.added_comments && (
                      <div className=" justify-center">
                        <CommentForm
                          moduleId={d.id}
                          userId={user.id}
                          interactionCount={userPerformance.interactions_count}
                        />
                      </div>
                    )}

                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mt-2">
                      <Rating value={0} disabled={false} />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <TestComponent
                questions={d.questions}
                moduleId={d.id}
                userId={user.id}
                userPerformance={userPerformance}
              />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <FileUploader
                moduleId={d.id}
                userId={user.id}
                title={d.assignment_title}
              />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
