import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import Notice from "./Notice";
import CheckedNotice from "./CheckedNotice";
import { useSelector } from "react-redux";
import { getRecuritData } from "../../api/recurit";
import { getPresentation } from "../../api/presentation";

function NoticePage() {
  const user = useSelector((state: any) => state.user);
  const [userId, setUserId] = useState(0);
  const [reload, setReload] = useState(false);
  const [showIntroduce, setShowIntroduce] = useState(false);
  const [userIntroduce, setUserIntroduce] = useState("");
  const [noticeData, setNoticeData] = useState([
    {
      challengerId: 0,
      challengerWriterId: 0,
      email: "",
      isChecked: false,
      message: "",
    },
  ]);

  const getPresentationFunc = async () => {
    try {
      const result = await getPresentation(userId);
      setUserIntroduce(result.data.body);
    } catch (e) {
      console.log(e);
    }
  };

  const getRecuritDataFunc = async () => {
    try {
      const result = await getRecuritData(user.id);
      setNoticeData(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRecuritDataFunc();
  }, [reload]);

  useEffect(() => {
    if (userId === 0) return;
    getPresentationFunc();
  }, [userId]);

  return (
    <div className="mx-10 h-screen overflow-hidden">
      <h4 className="mt-5 mb-3 text-2xl font-bold dark:text-white">
        나에게 보낸 제안을 확인하세요.
      </h4>
      <div className="w-full flex gap-10">
        <div className="w-full">
          {noticeData.map((item) => {
            if (item.isChecked)
              return (
                <CheckedNotice
                  key={item.challengerId}
                  userId={userId}
                  setUserId={setUserId}
                  showIntroduce={showIntroduce}
                  setShowIntroduce={setShowIntroduce}
                  data={item}
                />
              );
            else
              return (
                <Notice
                  key={item.challengerId}
                  userId={userId}
                  setUserId={setUserId}
                  showIntroduce={showIntroduce}
                  setShowIntroduce={setShowIntroduce}
                  data={item}
                  reload={reload}
                  setReload={setReload}
                />
              );
          })}
        </div>
        <div
          className={`trasition-all duration-700 transition-all w-full ${
            showIntroduce ? "translate-x-0" : "translate-x-full w-0"
          }`}
        >
          <MDEditor.Markdown
            source={userIntroduce}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
      </div>
    </div>
  );
}

export default NoticePage;
