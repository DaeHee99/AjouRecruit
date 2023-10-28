import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/modules/userSlice";

function LandingPage() {
  const user = useSelector((state: { user: any }) => state.user);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-32">
      <div>{user.auth ? "로그인O" : "로그인X"}</div>
      {user.auth && (
        <div>
          {user.email}
          <br />
          {user.username}
        </div>
      )}
      {user.auth ? (
        <button
          onClick={() => dispatch(logout())}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          로그아웃
        </button>
      ) : (
        <button
          onClick={() => navigation("/login")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          로그인
        </button>
      )}
    </div>
  );
}

export default LandingPage;
