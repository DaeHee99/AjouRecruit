import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import BottomButton from "./BottomButton";
import { getPresentation, updatePresentation } from "../../api/presentation";
import { useSelector } from "react-redux";

function UserPage() {
  const { id } = useParams();
  const user = useSelector((state: { user: any }) => state.user);
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState("");

  const submitHandler = async () => {
    try {
      await updatePresentation({ body: content });
      alert("내 소개 수정 완료!");
      setEdit(false);
      getPresentationFunc();
    } catch (e) {
      console.log(e);
    }
  };

  const getPresentationFunc = async () => {
    try {
      const result = await getPresentation(Number(id));
      setContent(result.data.body);
      setUserName(result.data.username);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPresentationFunc();
  }, [id]);

  return (
    <div className="mx-10 h-screen">
      <h4 className="mt-5 mb-2 text-2xl font-bold dark:text-white">
        {`${userName}님 소개`}
      </h4>
      <MDEditor
        height={(window.innerHeight * 3) / 5}
        value={content}
        onChange={setContent}
        preview={edit ? "live" : "preview"}
      />
      {user.id === Number(id) && (
        <BottomButton
          submitHandler={submitHandler}
          edit={edit}
          setEdit={setEdit}
        />
      )}
    </div>
  );
}

export default UserPage;
