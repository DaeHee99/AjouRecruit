interface Props {
  boardData: {
    boardId: number;
    body: string;
    dueDate: string;
    isFinished: boolean;
    memberId: number;
    tags: string[];
    title: string;
    viewCount: number;
  };
  setTargetId: React.Dispatch<React.SetStateAction<number>>;
}

function BoardItem({ boardData, setTargetId }: Props) {
  return (
    <div
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={() => setTargetId(boardData.boardId)}
    >
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-between">
        {boardData.title}
        {boardData.isFinished && (
          <span className="flex justify-center items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
            모집 완료
          </span>
        )}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {boardData.body}
      </p>
      <p className="inline-flex items-center text-blue-600">{`조회수 ${boardData.viewCount}`}</p>
    </div>
  );
}

export default BoardItem;
