import { useState, useEffect } from "react";
import { postRecurit } from "../../../../api/recurit";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  boardId: number;
}

function RecuritModal({ showModal, setShowModal, boardId }: Props) {
  const [animation, setAnimation] = useState(false);
  const [message, setMessage] = useState("");

  const messageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message === "") return alert("제안 메시지를 작성해주세요.");

    try {
      await postRecurit({ boardId: boardId, message: message });
      alert("성공적으로 제안을 전송했습니다.");
      setAnimation(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (showModal) setTimeout(() => setAnimation(true), 10);
  }, [showModal]);

  useEffect(() => {
    if (!animation) setTimeout(() => setShowModal(false), 710);
  }, [animation]);

  if (!showModal) return null;
  return (
    <div
      className={`modal-container fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 scale-100 flex transition-opacity duration-700 ${
        animation ? "active opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full max-w-xl max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => {
              document.body.classList.remove("overflow-hidden");
              setAnimation(false);
            }}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
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
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              제안 보내기
            </h3>
            <form className="space-y-6" onSubmit={submitHandler}>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                제안 메시지 <span className="text-red-600 font-bold">*</span>
              </label>
              <textarea
                id="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="제안 메시지를 작성해주세요."
                rows={8}
                value={message}
                onChange={messageHandler}
              />
              <p className={`mt-2 text-sm text-red-600 dark:text-red-500`}>
                <span className="font-medium">
                  제안을 보내면 오너는 당신의 소개를 확인할 수 있습니다.
                </span>
              </p>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                전송
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecuritModal;
