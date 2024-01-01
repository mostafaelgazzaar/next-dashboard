import {
  addComment,
  handleOpenNextModule,
  updateInteractionCount,
} from "@/app/lib/actions/module-actions";
import { useRef } from "react";
import { useFormState } from "react-dom";

export default function CommentForm({
  moduleId,
  userId,
  interactionCount,
}: {
  moduleId: number;
  userId: string;
  interactionCount?: number;
}) {
  const initialState = { message: "", errors: {} };
  // @ts-ignore
  const [state, dispatch] = useFormState(addComment, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex justify-center mt-2" dir="rtl">
      <form
        className="w-full max-w-sm"
        action={async (formData) => {
          await addComment(state, formData);
          await handleOpenNextModule(userId, moduleId);
          if (interactionCount) {
            await updateInteractionCount(
              userId,
              moduleId,
              interactionCount + 1
            );
          }

          formRef.current?.reset();
        }}
        ref={formRef}
      >
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="moduleId" value={moduleId} />
        <div className="relative mb-3 mt-3" data-te-input-wrapper-init="">
          <textarea
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea1"
            rows={3}
            name="comment"
            placeholder="Your message"
          ></textarea>

          <label
            htmlFor="exampleFormControlTextarea1"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            اترك تعليقك
          </label>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-sans py-2 px-4 rounded"
              type="submit"
            >
              ارسال
            </button>
            <button
              type="reset"
              className="mr-2 shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-sans py-2 px-4 rounded"
            >
              اعادة تعيين
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
