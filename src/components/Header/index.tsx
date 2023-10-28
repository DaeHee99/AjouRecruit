import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/modules/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const user = useSelector((state: any) => state.user);

  const logoutHandler = () => {
    dispatch(logout());
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
            <img src={Logo} className="h-11" alt="Logo" />
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
                to="/editor"
                className={`
                  ${
                    location.pathname === "/editor"
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
