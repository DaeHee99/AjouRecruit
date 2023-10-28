import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import BoardList from "./BoardList";
import { getAllBoard } from "../../api/board";
import BoardDetail from "./BoardDetail";

function BoardPage() {
  const [category, setCategory] = useState("개발");
  const [boardData, setBoardDate] = useState([]);
  const [targetId, setTargetId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const getAllBoardFunc = async () => {
    try {
      const result = await getAllBoard();
      setBoardDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllBoardFunc();
  }, []);

  useEffect(() => {
    if (targetId === 0) return;
    setShowModal(true);
  }, [targetId]);

  return (
    <div>
      <SideBar category={category} setCategory={setCategory} />
      <BoardList boardData={boardData} setTargetId={setTargetId} />
      <BoardDetail
        showModal={showModal}
        setShowModal={setShowModal}
        targetId={targetId}
      />
    </div>
  );
}

export default BoardPage;
