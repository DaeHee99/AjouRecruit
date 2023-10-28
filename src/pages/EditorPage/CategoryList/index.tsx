import { useState } from "react";
import CategoryItem from "./CategoryItem";

interface Props {
  selectItemList: string[];
  setSelectItemList: React.Dispatch<React.SetStateAction<string[]>>;
}

function CategoryList({ selectItemList, setSelectItemList }: Props) {
  // itemList 상태 변경 가능하게 수정
  const [itemList, setItemList] = useState([
    "개발",
    "디자인",
    "기획",
    "마케팅",
    "코딩",
    "파이썬",
    "자바",
    "운동",
  ]);

  // 새로운 상태 추가
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      inputValue &&
      !selectItemList.includes(inputValue)
    ) {
      setSelectItemList((prev) => [...prev, inputValue]);
      setItemList((prev) => [...prev, inputValue]); // itemList에 추가
      setInputValue(""); // 입력 상자 초기화
    }
  };

  return (
    <>
      <h5 className="mt-5 mb-2 text-xl font-bold dark:text-white">
        카테고리를 선택해주세요.
      </h5>
      <div className="flex gap-5">
        {itemList.map((item, index) => (
          <CategoryItem
            name={item}
            key={index}
            selectItemList={selectItemList}
            setSelectItemList={setSelectItemList}
          />
        ))}
      </div>
      <h5 className="mt-5 mb-2 text-xl font-bold dark:text-white">
        카테고리를 직접 입력해주세요.
      </h5>
      <div className="w-1/2">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="카테고리를 직접 입력해주세요. ex) 개발을 입력하고 엔터를 치시면 개발 카테고리가 추가됩니다."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
}

export default CategoryList;
