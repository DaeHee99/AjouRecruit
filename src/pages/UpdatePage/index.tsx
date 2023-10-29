import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import Title from "./Title";
import CategoryList from "./CategoryList";
import BottomButton from "./BottomButton";
import Date from "./Date";
import { updateBoard, getTargetBoard } from "../../api/board";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePage() {
  const navigation = useNavigate();
  const user = useSelector((state: { user: any }) => state.user);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectItemList, setSelectItemList] = useState<string[]>([]);
  const [endDate, setEndDate] = useState("");

  const submitHandler = async () => {
    try {
      await updateBoard({
        title: title,
        body: content,
        boardId: Number(id),
        tags: selectItemList,
        dueDate: endDate,
      });

      alert("수정 완료!");
      navigation(-1);
    } catch (e) {
      alert("수정에 실패했습니다.");
    }
  };

  const getTargetBoardFunc = async () => {
    try {
      const result = await getTargetBoard(Number(id));
      if (result.data.memberId !== user.id) navigation(-1);
      setTitle(result.data.title);
      setContent(result.data.body);
      setSelectItemList(result.data.tags);
      setEndDate(result.data.dueDate.slice(0, 10));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTargetBoardFunc();
  }, [id]);

  return (
    <div className="mx-10 pb-24">
      <Title title={title} setTitle={setTitle} />
      <h5 className="mt-5 mb-2 text-xl font-bold dark:text-white">
        글을 작성해주세요.
      </h5>
      <MDEditor
        height={(window.innerHeight * 3) / 5}
        value={content}
        onChange={(value) => {
          if (typeof value === "string") {
            setContent(value);
          }
        }}
      />
      <CategoryList
        selectItemList={selectItemList}
        setSelectItemList={setSelectItemList}
      />
      <Date endDate={endDate} setEndDate={setEndDate} />
      <BottomButton submitHandler={submitHandler} />
    </div>
  );
}

export default UpdatePage;
