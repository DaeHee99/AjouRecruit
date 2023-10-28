import { useSelector } from "react-redux";

interface Props {
  message: string;
}

const Bubble = ({ message }: Props) => {
  const user = useSelector((state: any) => state.user);
  const isMyMessage = true;

  return (
    <div
      className={`flex my-1 ${isMyMessage ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`${
          isMyMessage
            ? "bg-primary-500 text-white"
            : "bg-gray-200 dark:text-gray-200 dark:bg-gray-600"
        } p-2 rounded-lg max-w-xs w-48 sm:w-64`}
      >
        <div className={`relative p-1 break-words`}>
          <span className="text-sm">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
