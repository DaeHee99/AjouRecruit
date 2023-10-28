import board from "../../../assets/images/board.png";
import all from "../../../assets/images/all.png";
import developer from "../../../assets/images/develop.png";
import designer from "../../../assets/images/designer.png";
import idea from "../../../assets/images/idea.png";
import marketing from "../../../assets/images/marketing.png";
import coding from "../../../assets/images/coding.png";
import python from "../../../assets/images/python.png";
import java from "../../../assets/images/java.png";
import health from "../../../assets/images/health.png";
import { useState, useEffect } from "react";
import { getAllTag } from "../../../api/board";

interface Props {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const tagList = [
  {
    name: "개발",
    img: developer,
  },
  {
    name: "디자인",
    img: designer,
  },
  {
    name: "기획",
    img: idea,
  },
  {
    name: "마케팅",
    img: marketing,
  },
  {
    name: "코딩",
    img: coding,
  },
  {
    name: "파이썬",
    img: python,
  },
  {
    name: "자바",
    img: java,
  },
  {
    name: "운동",
    img: health,
  },
];

function SideBar({ category, setCategory }: Props) {
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setCategory("all");
      setSearchText(event.target.value);
      return;
    }
    setSearchText(event.target.value);
    setCategory(event.target.value);
  };

  const handleTagButtonClick = (tag: string) => {
    setCategory(tag);
    setSearchText("");
  };

  const getAllTarget = async () => {
    try {
      const result = await getAllTag();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllTarget();
  }, []);

  //   "기획",
  //   "마케팅",
  //   "코딩",
  //   "파이썬",
  //   "자바",
  //   "운동",

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
              <img className="mr-2 w-9" src={board} alt="게시판" />
              <span className="text-gray-900 dark:text-white">게시판</span>
            </div>
            <input
              type="text"
              placeholder="태그 검색"
              onChange={handleSearchInput}
              value={searchText}
              className="w-full p-2 mb-4 border-2 rounded"
            />
            <div className="space-y-2 border-y-2 border-solid border-gray-100 py-3">
              <button
                onClick={() => handleTagButtonClick("all")}
                className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                  category === "all"
                    ? "bg-primary-500 text-white hover:bg-primary-700"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                <img className="mr-3 w-6" src={all} alt="all" />
                <span>모든 카테고리</span>
              </button>

              {tagList.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleTagButtonClick(item.name)}
                  className={`w-full flex items-center justify-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:bg-gray-700 group ${
                    category === item.name
                      ? "bg-primary-500 text-white hover:bg-primary-700"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <img className="mr-3 w-6" src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
