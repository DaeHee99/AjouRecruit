interface Props {
  name: string;
  selectItemList: string[];
  setSelectItemList: React.Dispatch<React.SetStateAction<string[]>>;
}

function CategoryItem({ name, selectItemList, setSelectItemList }: Props) {
  const selectStyle =
    "bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-primary-400 border border-primary-400";
  const unSelectStyle =
    "bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500";

  const clickHandler = () => {
    if (selectItemList.indexOf(name) < 0)
      setSelectItemList([...selectItemList, name]);
    else setSelectItemList(selectItemList.filter((item) => item !== name));
  };

  return (
    <button
      className={selectItemList.indexOf(name) < 0 ? unSelectStyle : selectStyle}
      onClick={clickHandler}
    >
      {name}
    </button>
  );
}

export default CategoryItem;
