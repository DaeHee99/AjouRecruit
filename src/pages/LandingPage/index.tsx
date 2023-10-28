import {useNavigate} from "react-router-dom"

function LandingPage() { 
  const navigation = useNavigate();

  let obTimeOut = 0;
  let ObjectArray = new Array();
  ObjectArray[1] = "/img/resume.jpg";
  ObjectArray[2] = "/img/resume.jpg";
  ObjectArray[3] = "/img/resume.jpg";
  ObjectArray[4] = "/img/resume.jpg";
  ObjectArray[5] = "/img/resume.jpg";
  ObjectArray[6] = "/img/resume.jpg";
  let nObjectCnt = 0;
  function ShowPicRotate(){
    nObjectCnt++;
    if(nObjectCnt >= ObjectArray.length){
      nObjectCnt = 0;
    }
    if(nObjectCnt < ObjectArray.length){
      document.getElementById("image_id").src = ObjectArray[nObjectCnt];  
      obTimeOut = setTimeout("ShowDefaultRotate()",1000);
    }
    else{
      clearTimeout(obTimeOut);
    }
  }
  function StartAnime(){
    obTimeOut = window.setTimeout(ShowPicRotate,3000);
  }
  window.onload = StartAnime;
  
  return <div className="flex">
    <div className="flex box-content  h-screen w-4/5 p-10px items-center justify-center ">
      <div className="box-content flex justify-center">
        <img id="image_id" src = "/img/resume.jpg" alt="no images"></img>
      </div>
    </div>

    <div className="box-border sm:w-1/5 py-4 border-4 grid place-items-center inline-block align-middle">
      <div className="box-border h-1/6 my-2 px-4 grid place-items-center">
        <img className="w-14 h-14 rounded-full " src="/img/exicon.png" alt="Rounded avatar"></img>
      </div>
      <div className="box-border h-1/6 w-full px-2 grid place-items-center">  
        <button type="button" className=" w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={() => navigation("/login")}>Login</button>
      </div>
      <div className="box-border h-3/5"></div>
    </div>
  </div>;
  
}


export default LandingPage;
