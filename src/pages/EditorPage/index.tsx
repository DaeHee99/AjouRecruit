import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import CategoryList from "./CategoryList";
import BottomButton from "./BottomButton";

function EditorPage() {
  const [content, setContent] = useState("");

  return (
    <div className="mx-10 mb-20">
      <h5 className="mt-5 mb-2 text-xl font-bold dark:text-white">
        글을 작성해주세요.
      </h5>
      <MDEditor
        height={(window.innerHeight * 3) / 5}
        value={content}
        onChange={setContent}
      />
      <CategoryList />
      <BottomButton />
    </div>
  );
}

export default EditorPage;
