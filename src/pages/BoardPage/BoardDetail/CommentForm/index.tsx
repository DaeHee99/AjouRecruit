import { useState } from "react";
import { useSelector } from "react-redux";
import { createComment } from "../../../../api/comment";

interface Props {
  targetId: number;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentForm({ targetId, reload, setReload }: Props) {
  const user = useSelector((state: { user: any }) => state.user);
  const [comment, setComment] = useState("");

  const sendComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (comment === "") return alert("댓글을 입력해주세요.");

    try {
      await createComment({
        boardId: targetId,
        memberId: user.id,
        commentBody: comment,
      });

      setComment("");
      setReload(!reload);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={sendComment}>
      <div className="flex items-center px-3 py-2 rounded-lg bg-primary-200 dark:bg-gray-700">
        <input
          type="text"
          className="block mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="댓글을 입력해주세요.."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-primary-600 rounded-full cursor-pointer hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            className="w-7 h-7 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
