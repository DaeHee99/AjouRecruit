import { useState, useEffect } from "react";
import { sendPasswordEmail, searchPassword } from "../../../../api/users";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchPassword({ showModal, setShowModal }: Props) {
  const [animation, setAnimation] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailDisable, setEmailDisable] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const [emailMessage, setEmailMessage] = useState("");
  const [codeValidation, setCodeValidation] = useState(true);
  const [codeMessage, setCodeMessage] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState("");

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValidation(true);
    setEmail(event.target.value);
  };
  const codeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValidation(true);
    setCode(event.target.value);
  };
  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValidation(true);
    setNewPassword(event.target.value);
  };

  const sendEmailCode = async () => {
    try {
      await sendPasswordEmail(email);
      setEmailDisable(true);
      setEmailValidation(false);
      setEmailMessage("해당 이메일로 인증 코드가 전송되었습니다.");
    } catch (e) {
      setEmailDisable(false);
      setEmailValidation(false);
      setEmailMessage("현재 존재하지 않는 계정입니다.");
    }
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "") {
      setEmailValidation(false);
      setEmailMessage("이메일을 입력해주세요.");
      return;
    }
    if (code === "") {
      setCodeValidation(false);
      setCodeMessage("인증 코드를 입력해주세요.");
      return;
    }
    if (newPassword === "") {
      setPasswordValidation(false);
      setPasswordMessage("비밀번호를 입력해주세요.");
      return;
    }

    try {
      await searchPassword({
        email: email,
        code: code,
        newPassword: newPassword,
      });

      alert("비밀번호 재설정이 완료되었습니다.");
      setShowModal(false);
    } catch (e: any) {
      if (e.response.data.data.errMsg === "잘못된 인증 정보입니다.") {
        setCodeValidation(false);
        setCodeMessage("인증 코드가 잘못 입력되었습니다.");
        return;
      }
      setPasswordValidation(false);
      setPasswordMessage(e.response.data.data.errMsg);
      return;
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
              비밀번호 찾기
            </h3>
            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  이메일 <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="flex flex-row justify-between">
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={emailHandler}
                    disabled={emailDisable}
                  />
                  <button
                    type="button"
                    className={`${
                      emailDisable
                        ? "cursor-not-allowed bg-primary-400 dark:bg-primary-400"
                        : "bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
                    } w-40 ml-2 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800`}
                    disabled={emailDisable}
                    onClick={sendEmailCode}
                  >
                    인증 코드 발송
                  </button>
                </div>
                <p
                  className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                    emailValidation ? "hidden" : "block"
                  }`}
                >
                  <span className="font-medium">{emailMessage}</span>
                </p>
              </div>
              <div>
                <label
                  htmlFor="emailCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  인증 코드 <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="emailCode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="0000"
                  value={code}
                  onChange={codeHandler}
                />
                <p
                  className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                    codeValidation ? "hidden" : "block"
                  }`}
                >
                  <span className="font-medium">{codeMessage}</span>
                </p>
              </div>
              <div>
                <label
                  htmlFor="newPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  새로운 비밀번호{" "}
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="새로운 비밀번호를 입력해주세요."
                  value={newPassword}
                  onChange={passwordHandler}
                />
                <p
                  className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                    passwordValidation ? "hidden" : "block"
                  }`}
                >
                  <span className="font-medium">{passwordMessage}</span>
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                확인
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPassword;
