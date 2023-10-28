interface Props {
  submitHandler: () => void;
}

function BottomButton({ submitHandler }: Props) {
  return (
    <div className="w-full fixed bottom-0 left-0 py-3 bg-gray-100 dark:bg-gray-700 flex justify-center gap-6 shadow-inner px-5">
      <button
        type="button"
        className="w-40 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        취소
      </button>
      <button
        type="button"
        className="w-40 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        onClick={submitHandler}
      >
        수정하기
      </button>
    </div>
  );
}

export default BottomButton;
