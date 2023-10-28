import Bubble from "./Bubble";

interface Props {
  commentData: {
    commentBody: string;
    createdDate: string;
    id: number;
    memberId: number;
    modifiedDate: string;
  }[];
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentList({ commentData, reload, setReload }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {commentData.map((item) => (
        <Bubble
          key={item.id}
          commentData={item}
          reload={reload}
          setReload={setReload}
        />
      ))}
    </div>
  );
}

export default CommentList;
