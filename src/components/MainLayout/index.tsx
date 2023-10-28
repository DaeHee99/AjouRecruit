import { Outlet } from "react-router-dom";
import Header from "../Header";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="h-16"></div>
      <Outlet />
    </>
  );
}

export default MainLayout;
