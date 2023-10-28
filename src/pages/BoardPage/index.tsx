import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import BoardList from "./BoardList";
import { getAllBoard } from "../../api/board";

function BoardPage() {
  const [category, setCategory] = useState("개발");
  const [boardData, setBoardDate] = useState([]);

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

  return (
    <div>
      <SideBar category={category} setCategory={setCategory} />
      <BoardList boardData={boardData} />
    </div>
  );
}

export default BoardPage;
