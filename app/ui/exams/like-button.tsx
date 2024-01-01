import {
  addLike,
  handleOpenNextModule,
  updateInteractionCount,
} from "@/app/lib/actions/module-actions";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
export function LikeButton({
  moduleId,
  userId,
  interactionCount,
}: {
  moduleId: number;
  userId: string;
  interactionCount?: number;
}) {
  return (
    <>
      <button
        className="block mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={async () => {
          await addLike(userId, moduleId);
          setTimeout(() => {}, 1000);
          await handleOpenNextModule(userId, moduleId);
          if (interactionCount) {
            await updateInteractionCount(
              userId,
              moduleId,
              interactionCount + 1,
            );
          }
        }}
      >
        <HandThumbUpIcon className="w-6 h-6" />
      </button>
    </>
  );
}
