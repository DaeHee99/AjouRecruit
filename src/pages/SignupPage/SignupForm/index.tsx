import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import Loading from "../../../components/Loading";
import Stepper from "./Stepper";
import studentImage from "../../../assets/images/student.png";
import professorImage from "../../../assets/images/professor.png";
import { signup } from "../../../api/users";

function SignupForm() {
  const navigation = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("0");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [roleCheck, setRoleCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [confirmPasswordCheck, setConfirmPasswordCheck] = useState(true);
  const [nickNameCheck, setNickNameCheck] = useState(true);
  const [errorCheck, setErrorCheck] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailCheck(true);
    setEmail(event.target.value);
  };
  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(true);
    setPassword(event.target.value);
  };
  const confirmPasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPasswordCheck(true);
    setConfirmPassword(event.target.value);
  };
  const nickNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickNameCheck(true);
    setNickName(event.target.value);
  };
  const roleHandler = () => {
    const selected = (
      document.querySelector(
        "input[type=radio][name=role]:checked"
      ) as HTMLInputElement | null
    )?.value;

    if (!selected) return setRoleCheck(false);

    setRole(selected);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "") return setEmailCheck(false);
    if (password === "") return setPasswordCheck(false);
    if (confirmPassword === "" || password !== confirmPassword)
      return setConfirmPasswordCheck(false);
    if (nickName === "") return setNickNameCheck(false);

    console.log(role);
    setLoading(true);

    try {
      await signup({
        email: email,
        password: password,
        username: nickName,
      });

      navigation("/login", { replace: true });
    } catch (e: any) {
      setErrorMsg(e.response.data.data.errMsg);
      setErrorCheck(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center py-8 mx-auto lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img src={Logo} onClick={()=>navigation("/")}className="h-12 hidden md:block" alt="Header_Icon" />
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              회원가입
            </h1>
            <Stepper step={step} />
            {step === 1 ? (
              <div className="space-y-4 md:space-y-6">
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  당신은 누구인가요?{" "}
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <ul className="flex flex-row justify-between w-full gap-2">
                  <li className="w-full">
                    <input
                      type="radio"
                      id="student"
                      name="role"
                      value="0"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="student"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="w-full text-md text-center">
                        <img
                          className="w-full mt-3"
                          src={studentImage}
                          alt="studentImage"
                        />
                        <h5 className="mt-8 text-xl font-medium text-gray-900 dark:text-white">
                          학생
                        </h5>
                      </div>
                    </label>
                  </li>
                  <li className="w-full">
                    <input
                      type="radio"
                      id="professor"
                      name="role"
                      value="1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="professor"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="w-full text-md text-center">
                        <img
                          className="w-full mt-3"
                          src={professorImage}
                          alt="professorImage"
                        />
                        <h5 className="mt-8 text-xl font-medium text-gray-900 dark:text-white">
                          교수
                        </h5>
                      </div>
                    </label>
                  </li>
                </ul>
                <p
                  className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                    roleCheck ? "hidden" : "block"
                  }`}
                >
                  <span className="font-medium">
                    학생 또는 교수를 선택해주세요.
                  </span>
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={roleHandler}
                >
                  다음
                </button>
              </div>
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="signupEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    이메일 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    id="signupEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="example@ajou.ac.kr"
                    value={email}
                    onChange={emailHandler}
                  />
                  <p
                    className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                      emailCheck ? "hidden" : "block"
                    }`}
                  >
                    <span className="font-medium">이메일을 입력해주세요.</span>
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="signupPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="password"
                    id="signupPassword"
                    placeholder="••••••••"
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={password}
                    onChange={passwordHandler}
                  />
                  <p
                    className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                      passwordCheck ? "hidden" : "block"
                    }`}
                  >
                    <span className="font-medium">
                      비밀번호를 입력해주세요.
                    </span>
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호 확인{" "}
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={confirmPassword}
                    onChange={confirmPasswordHandler}
                  />
                  <p
                    className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                      confirmPasswordCheck ? "hidden" : "block"
                    }`}
                  >
                    <span className="font-medium">
                      비밀번호를 다시 확인해주세요!
                    </span>
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    닉네임 <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="김아주"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={nickName}
                    onChange={nickNameHandler}
                  />
                  <p
                    className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                      nickNameCheck ? "hidden" : "block"
                    }`}
                  >
                    <span className="font-medium">닉네임을 입력해주세요.</span>
                  </p>
                </div>
                <p
                  className={`mt-2 text-sm text-red-600 dark:text-red-500 ${
                    errorCheck ? "hidden" : "block"
                  }`}
                >
                  <span className="font-medium">{errorMsg}</span>
                </p>
                {loading ? (
                  <Loading full={false} />
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    회원가입
                  </button>
                )}
              </form>
            )}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {"이미 계정이 있으신가요? "}
              <button
                onClick={() => {
                  navigation("/login", { replace: true });
                }}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                로그인
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
