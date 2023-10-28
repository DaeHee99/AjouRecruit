import { useSelector } from "react-redux";

interface Props {
  commentData: {
    commentBody: string;
    createdDate: string;
    id: number;
    memberId: number;
    modifiedDate: string;
  };
}

const Bubble = ({ commentData }: Props) => {
  const user = useSelector((state: any) => state.user);
  const isMyMessage = user.id === commentData.memberId;

  const convertTime = (updatedAt: string) => {
    let date = new Date(updatedAt);
    date.setHours(date.getHours() + 9);

    return `${updatedAt.slice(0, 10)} ${
      date.getHours() < 12 ? "오전" : "오후"
    } ${
      (date.getHours() % 12 !== 0 ? date.getHours() % 12 : 12) <= 9
        ? "0" + (date.getHours() % 12 !== 0 ? date.getHours() % 12 : 12)
        : date.getHours() % 12 !== 0
        ? date.getHours() % 12
        : 12
    }:${date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()}`;
  };

  if (commentData.id === 0) return null;
  return (
    <div
      className={`flex my-1 ${isMyMessage ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`${
          isMyMessage
            ? "bg-primary-500 text-white rounded-l-lg rounded-br-lg"
            : "bg-gray-200 dark:text-gray-200 dark:bg-gray-600 rounded-r-lg rounded-bl-lg"
        } p-2 max-w-xs w-48 sm:w-64`}
      >
        <div className={`relative p-1 break-words`}>
          <span className="text-sm">{commentData.commentBody}</span>
        </div>
      </div>
      <div
        className={`mt-auto mx-1 text-xs ${
          isMyMessage ? "ml-auto" : "mr-auto"
        }`}
      >
        <span className="dark:text-gray-400">
          {convertTime(commentData.modifiedDate)}
        </span>
      </div>
    </div>
  );
};

export default Bubble;
