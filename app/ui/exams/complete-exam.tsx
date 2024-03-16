"use client";
import { handleOpenNextModule } from "@/app/lib/actions/module-actions";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";
export function CompleteExam({
  moduleId,
  userId,
}: {
  moduleId: number;
  userId: string;
}) {
  return (
    <>
      <button
        className="block mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={async () => {
          await handleOpenNextModule(userId, moduleId);
        }}
      >
        <DocumentCheckIcon className="w-5 h-5" />
      </button>
    </>
  );
}
