import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Title from "./Title";
import CategoryList from "./CategoryList";
import BottomButton from "./BottomButton";
import Date from "./Date";
import { createBoard } from "../../api/board";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EditorPage() {
  const navigation = useNavigate();
  const user = useSelector((state: { user: any }) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectItemList, setSelectItemList] = useState<string[]>([]);
  const [endDate, setEndDate] = useState("");

  const submitHandler = async () => {
    try {
      await createBoard({
        title: title,
        body: content,
        memberId: user.id,
        tags: selectItemList,
        dueDate: endDate,
      });

      alert("등록 완료!");
      navigation("/board", { replace: true });
    } catch (e) {
      alert("등록에 실패했습니다.");
    }
  };

  return (
    <div className="mx-10 pb-24">
      <Title title={title} setTitle={setTitle} />
      <h5 className="mt-5 mb-2 text-xl font-bold dark:text-white">
        글을 작성해주세요.
      </h5>
      <MDEditor
        height={(window.innerHeight * 3) / 5}
        value={content}
        onChange={setContent}
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

export default EditorPage;
