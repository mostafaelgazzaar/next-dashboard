"use client";

import AwesomeSlider from "react-awesome-slider";
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
import { User } from "@/app/lib/definitions";

import dynamic from "next/dynamic";
import { postPlayedDuration } from "@/app/lib/actions/module-actions";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { ArrowUpIcon, VideoCameraIcon } from "@heroicons/react/20/solid";
import { BookOpenIcon } from "@heroicons/react/24/outline";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
export default function FullPage({ data, user }: { data: any; user: User }) {
  const [selectedTab, setSelectedTab] = useState("Video");

  const d = data;
  const handlePlayed = async (played: number): Promise<void> => {
    const duration = Math.round(played);
    await postPlayedDuration(duration, user.id);
  };

  return (
    <div>
      <Tab.Group>
        <Tab.List className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
          <Tab
            as="button"
            onClick={() => setSelectedTab("Video")}
            className={`inline-block w-1/3 py-4 px-4 text-md font-medium text-center border-transparent border-b-2  ${
              selectedTab === "Video"
                ? " text-gray-900 border-b-blue-800"
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            } dark:text-gray-400 dark:hover:text-gray-300`}
          >
            Video & Review
            <VideoCameraIcon className="inline-block w-5 h-5 ml-2 -mt-1" />
          </Tab>
          <Tab
            as="button"
            onClick={() => setSelectedTab("test")}
            className={`inline-block w-1/3 py-4 px-4 text-md font-medium text-center border-transparent border-b-2 ${
              selectedTab === "test"
                ? "text-gray-900 border-b-blue-800 "
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            } dark:text-gray-400 dark:hover:text-gray-300`}
          >
            test <BookOpenIcon className="inline-block w-5 h-5 ml-2 -mt-1" />
          </Tab>
          <Tab
            as="button"
            onClick={() => setSelectedTab("upload")}
            className={`inline-block w-1/3 py-4 px-4 text-md  font-medium text-center border-transparent border-b-2  ${
              selectedTab === "upload"
                ? "text-gray-900 border-b-blue-800 "
                : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
            } dark:text-gray-400 dark:hover:text-gray-300`}
          >
            upload <ArrowUpIcon className="inline-block w-5 h-5 ml-2 -mt-1" />
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex justify-center">
              <div key={d.id} className="container pr-10 pl-10 justify-center">
                <h1 className=" text-center italic m-4 text-2xl">{d.title}</h1>
                <div className="flex place-content-center">
                  <ReactPlayer
                    url={d.video}
                    controls={true}
                    playing={true}
                    loop={true}
                    muted={true}
                    width={"100%"}
                    height={550}
                    progressInterval={15000}
                    onProgress={async (state) => {
                      await handlePlayed(state.playedSeconds);
                    }}
                  />
                </div>

                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-2">
                  <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    Review this video
                  </h5>
                  <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                    once you have watched the video, please review it
                    <LikeButton userId={user.id} moduleId={d.id} />
                  </p>
                  <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <Rating value={0} />
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <TestComponent
                questions={d.questions}
                moduleId={d.id}
                userId={user.id}
              />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <FileUploader moduleId={d.id} userId={user.id} />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
