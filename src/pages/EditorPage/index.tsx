import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import CategoryList from "./CategoryList";
import BottomButton from "./BottomButton";
import Date from "./Date";

function EditorPage() {
  const [content, setContent] = useState("");
  const [selectItemList, setSelectItemList] = useState<string[]>([]);
  const [endDate, setEndDate] = useState("");

  return (
    <div className="mx-10 mb-24">
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
      <BottomButton />
    </div>
  );
}

export default EditorPage;
