import { useState } from "react";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const [itemList] = useState([
    "개발",
    "디자인",
    "기획",
    "코딩",
    "파이썬",
    "자바",
    "마케팅",
    "운동",
  ]);
  const [selectItemList, setSelectItemList] = useState<string[]>([]);

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
    </>
  );
}

export default CategoryList;
