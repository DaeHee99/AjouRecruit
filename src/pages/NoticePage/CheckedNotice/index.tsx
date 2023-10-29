interface Props {
  setShowIntroduce: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  showIntroduce: boolean;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  data: {
    challengerId: number;
    challengerWriterId: number;
    email: string;
    isChecked: boolean;
    message: string;
  };
}

function Notice({
  setShowIntroduce,
  userId,
  setUserId,
  data,
  showIntroduce,
}: Props) {
  return (
    <div className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800">
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <h3 className="text-lg font-medium">{data.email}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{data.message}</div>
      <div className="flex">
        <button
          type="button"
          className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => {
            if (showIntroduce && data.challengerWriterId === userId)
              setShowIntroduce(false);
            else {
              setShowIntroduce(true);
              setUserId(data.challengerWriterId);
            }
          }}
        >
          <svg
            className="-ml-0.5 mr-2 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          소개 보기
        </button>
      </div>
    </div>
  );
}

export default Notice;
