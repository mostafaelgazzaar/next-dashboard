"use client";
import { useState } from "react";
import { handleOpenNextModule } from "@/app/lib/actions/module-actions";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";

export function CompleteExam({
  moduleId,
  userId,
}: {
  moduleId: number;
  userId: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <div className="relative inline-block">
        <button
          className="block mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl mt-2"
          onClick={async () => {
            await handleOpenNextModule(userId, moduleId);
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <DocumentCheckIcon className="w-5 h-5 text-white" />
        </button>
        {showTooltip && (
          <div className="absolute bottom-full mb-2 w-max bg-gray-700 text-white text-xs rounded py-1 px-2">
            أكمل الامتحان ( في حالة لم يتم استكمال الامتحان بشكل اوتماتيك)
          </div>
        )}
      </div>
    </>
  );
}
