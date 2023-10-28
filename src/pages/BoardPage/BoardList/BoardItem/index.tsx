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
}

function BoardItem({ boardData }: Props) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {boardData.title}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {boardData.body}
      </p>
      <p className="inline-flex items-center text-blue-600">{`조회수 ${boardData.viewCount}`}</p>
    </div>
  );
}

export default BoardItem;
