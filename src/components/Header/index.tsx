import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/modules/userSlice";
import { darkMode } from "../../utils";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const user = useSelector((state: any) => state.user);
  const [mode, setMode] = useState(localStorage.getItem("color-theme"));

  const logoutHandler = () => {
    dispatch(logout());
  };

  const changeMode = () => {
    if (mode === "dark") {
      localStorage.setItem("color-theme", "light");
      setMode("light");
    } else {
      localStorage.setItem("color-theme", "dark");
      setMode("dark");
    }

    darkMode();
  };

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  return (
    <header className="fixed w-full z-40 top-0 left-0">
      <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <button
            className="flex items-center md:hidden dark:text-gray-400"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft size={20} />
          </button>
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-11 mr-2" alt="Logo" />
            <span className="text-gray-800 dark:text-white text-xl font-bold">
              Ajou Recruit
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            {!user.auth ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 hover:text-primary-700 border-2 border-white dark:border-gray-800 hover:border-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 hidden md:block"
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 hidden md:block"
                >
                  회원가입
                </Link>
              </>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-800 dark:text-white text-lg font-bold mr-4">
                  반가워요 {user.username} 님
                </span>
                <button
                  onClick={logoutHandler}
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 hidden md:block"
                >
                  로그아웃
                </button>
              </div>
            )}
            <button onClick={changeMode} className="ml-2">
              {mode === "light" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 8.53678C14.4412 9.26539 13.1583 9.6919 11.7758 9.6919C8.14313 9.6919 5.19826 6.747 5.19826 3.11429C5.19826 2.25049 5.36476 1.42559 5.66742 0.669922C2.66658 1.65657 0.5 4.48159 0.5 7.81264C0.5 11.9643 3.86557 15.3299 8.01721 15.3299C11.9246 15.3299 15.1357 12.3487 15.5 8.53678Z"
                    fill="#6B6B6B"
                  ></path>
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.58807 10.4119C6.25284 11.0767 7.05682 11.4091 8 11.4091C8.94318 11.4091 9.74716 11.0767 10.4119 10.4119C11.0767 9.74716 11.4091 8.94318 11.4091 8C11.4091 7.05682 11.0767 6.25284 10.4119 5.58807C9.74716 4.9233 8.94318 4.59091 8 4.59091C7.05682 4.59091 6.25284 4.9233 5.58807 5.58807C4.9233 6.25284 4.59091 7.05682 4.59091 8C4.59091 8.94318 4.9233 9.74716 5.58807 10.4119Z"
                    fill="#6B6B6B"
                  ></path>
                  <path
                    d="M0.5 7.48864V8.51136H3.22727V7.48864H0.5Z"
                    fill="#6B6B6B"
                  ></path>
                  <path
                    d="M15.5 7.48864H12.7727V8.51136H15.5V7.48864Z"
                    fill="#6B6B6B"
                  ></path>
                  <path
                    d="M7.48864 0.5V3.22727H8.51136V0.5H7.48864Z"
                    fill="#6B6B6B"
                  ></path>
                  <path
                    d="M7.48864 12.7727V15.5H8.51136V12.7727H7.48864Z"
                    fill="#6B6B6B"
                  ></path>
                  <path
                    d="M2.57955 3.29545L4.26705 4.98295L4.98295 4.26705L3.29545 2.57955L2.57955 3.29545Z"
                    fill="#6B6B6B"
                  ></path>
                  <path
                    d="M11.017 11.733L12.7045 13.4205L13.4205 12.7045L11.733 11.017L11.017 11.733Z"
                    fill="#6B6B6B"
                  ></path>
                  <path
                    d="M11.017 4.26705L11.733 4.98295L13.4205 3.29545L12.7045 2.57955L11.017 4.26705Z"
                    fill="#6B6B6B"
                  ></path>
                  <path
                    d="M2.57955 12.7045L3.29545 13.4205L4.98295 11.733L4.26705 11.017L2.57955 12.7045Z"
                    fill="#6B6B6B"
                  ></path>
                </svg>
              )}
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              !mobileMenu && "hidden"
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <div className="flex flex-col mt-4 font-bold md:flex-row md:space-x-8 md:mt-0">
              <Link
                to="/"
                className={`
                  ${
                    location.pathname === "/"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
              >
                홈
              </Link>
              <Link
                to="/board"
                className={`
                  ${
                    location.pathname === "/board"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
              >
                게시판
              </Link>
              <Link
                to="/editor"
                className={`
                  ${
                    location.pathname === "/editor" ||
                    location.pathname.slice(0, 7) === "/update"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
              >
                글 작성
              </Link>
              <Link
                to="/"
                className={`
                  ${
                    location.pathname === "/item"
                      ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"
                      : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
              >
                item
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
