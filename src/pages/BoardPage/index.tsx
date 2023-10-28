import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import BoardList from "./BoardList";
import { getAllBoard, getCategoryBoard } from "../../api/board";
import BoardDetail from "./BoardDetail";

function BoardPage() {
  const [category, setCategory] = useState("all");
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

  const getCategoryBoardFunc = async () => {
    try {
      const result = await getCategoryBoard(category);
      setBoardDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (category === "all") getAllBoardFunc();
    else getCategoryBoardFunc();
  }, [category]);

  useEffect(() => {
    if (targetId === 0) return;
    setShowModal(true);
  }, [targetId]);

  useEffect(() => {
    if (showModal) return;
    setTargetId(0);
  }, [showModal]);

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
