import { useState } from "react";
import SideBar from "./SideBar";

function BoardPage() {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <SideBar category={category} setCategory={setCategory} />
    </div>
  );
}

export default BoardPage;
