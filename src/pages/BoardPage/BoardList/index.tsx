import BoardItem from "./BoardItem";

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
  }[];
  setTargetId: React.Dispatch<React.SetStateAction<number>>;
}

function BoardList({ boardData, setTargetId }: Props) {
  return (
    <div className="p-4 min-h-screen mb-8 md:ml-64">
      <div className="pt-6 grid gap-4 mb-8 md:mb-12 md:grid-cols-2 xl:grid-cols-3">
        {boardData.map((item) => (
          <BoardItem
            key={item.boardId}
            boardData={item}
            setTargetId={setTargetId}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardList;
