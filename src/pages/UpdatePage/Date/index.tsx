interface Props {
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

function Date({ endDate, setEndDate }: Props) {
  const endDateHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEndDate(event.target.value);

  return (
    <>
      <h5 className="mt-5 mb-2 text-xl font-bold dark:text-white">
        마감 날짜를 선택해주세요.
      </h5>
      <div className="w-1/2">
        <input
          type="date"
          id="endDate"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          value={endDate}
          onChange={endDateHandler}
        />
      </div>
    </>
  );
}

export default Date;
