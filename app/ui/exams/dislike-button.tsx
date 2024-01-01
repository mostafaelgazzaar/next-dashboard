import {
  addDislike,
  handleOpenNextModule,
  updateInteractionCount,
} from "@/app/lib/actions/module-actions";
import { HandThumbDownIcon } from "@heroicons/react/24/outline";

export default function DislikeButton({
  userId,
  moduleId,
  interactionCount,
}: {
  userId: string;
  moduleId: number;
  interactionCount?: number;
}) {
  return (
    <>
      <button
        className="block bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded "
        onClick={async () => {
          await addDislike(userId, moduleId);
          await handleOpenNextModule(userId, moduleId);
          if (interactionCount) {
            await updateInteractionCount(
              userId,
              moduleId,
              interactionCount + 1
            );
          }
        }}
      >
        <HandThumbDownIcon className="w-6 h-6" />
      </button>
    </>
  );
}
