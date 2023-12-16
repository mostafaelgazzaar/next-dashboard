import { addLike } from "@/app/lib/actions/module-actions";
export function LikeButton({
  moduleId,
  userId,
}: {
  moduleId: number;
  userId: string;
}) {
  return (
    <button
      className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-pulse"
      onClick={async () => {
        await addLike(userId, moduleId);
      }}
    >
      <span>🎉</span>
      <span>Like</span>
    </button>
  );
}
