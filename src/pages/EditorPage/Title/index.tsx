interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

function Title({ title, setTitle }: Props) {
  return (
    <>
      <h5 className="mt-5 mb-2 text-xl font-bold dark:text-white">
        제목을 입력해주세요.
      </h5>
      <div className="w-1/2">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </>
  );
}

export default Title;
