import { addDislike, addLike } from "@/app/lib/actions/module-actions";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbDownIcon } from "@heroicons/react/24/solid";
export function LikeButton({
  moduleId,
  userId,
}: {
  moduleId: number;
  userId: string;
}) {
  return (
    <>
      <button
        className="block bg-red-400   hover:bg-red-600 text-white font-bold py-2 px-4 rounded "
        onClick={async () => {
          await addDislike(userId, moduleId);
        }}
      >
        <HandThumbDownIcon className="w-6 h-6" />
      </button>
      <button
        className="block mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={async () => {
          await addLike(userId, moduleId);
        }}
      >
        <HandThumbUpIcon className="w-6 h-6" />
      </button>
    </>
  );
}
