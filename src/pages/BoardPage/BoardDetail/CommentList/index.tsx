import Bubble from "./Bubble";

interface Props {
  commentData: {
    commentBody: string;
    createdDate: string;
    id: number;
    memberId: number;
    modifiedDate: string;
  }[];
}

function CommentList({ commentData }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {commentData.map((item) => (
        <Bubble key={item.id} commentData={item} />
      ))}
    </div>
  );
}

export default CommentList;
