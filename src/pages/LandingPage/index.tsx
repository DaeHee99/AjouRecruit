import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";

const image1 = "/img/resume.jpg"
const image2 = "/img/replace.jpg"

function LandingPage() { 
  const navigation = useNavigate();
  const [imageList] = useState([image1, image2, image1, image2]);
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setImageIdx(imageIdx=> (imageIdx+1) % 4);
    }, 5000)
  }, [])
  
  return <div className="flex">
    <div className="flex box-content  h-screen w-4/5 p-10px items-center justify-center ">
      <div className="box-content flex justify-center">
        <img id="image_id" src={imageList[imageIdx]} alt="no images" className="w-full rounded-lg"></img>
      </div>
    </div>

    <div className="box-border sm:w-1/5 py-1 border-1 grid place-items-center inline-block align-middle">
      <div className="box-border h-1/6 w-full my-0 px-4 grid place-items-center">
        <img className="w-14 h-14 rounded-full " src="/img/exicon.png" alt="Rounded avatar"></img>
        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={() => navigation("/login")}>로그인</button> 
      </div>
      <div className="box-border h-1/6 w-full px-2 grid place-items-center">  
      
      </div>
      <div className="box-border h-3/5"></div>
    </div>
  </div>;
  
}


export default LandingPage;
