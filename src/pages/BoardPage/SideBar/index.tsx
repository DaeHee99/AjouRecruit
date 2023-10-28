interface Props {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

function SideBar({ category, setCategory }: Props) {
  return (
    <div>
      <aside
        id="matching-sidebar"
        className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 pb-20 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 noScrollBar">
          <div className="sticky top-0 z-50 bg-white">
            <div className="mb-3 flex items-center justify-center outline-none text-xl">
              <img className="mr-2 w-9" src={""} alt="" />
              <span className="text-gray-900 dark:text-white">게시판</span>
            </div>
            <ul className="space-y-2 border-y-2 border-solid border-gray-100 py-3">
              <li>
                <button
                  onClick={() => setCategory("1")}
                  className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                    category === "general"
                      ? "bg-primary-500 text-white hover:bg-primary-700"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <img className="mr-3 w-6" src={""} alt="" />
                  <span>개발</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCategory("2")}
                  className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                    category === "fast"
                      ? "bg-primary-500 text-white hover:bg-primary-700"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <img className="mr-3 w-6" src={""} alt="" />
                  <span>디자인</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
