import {useNavigate} from "react-router-dom"

function LandingPage() { 
  const navigation = useNavigate();

  let obTimeOut = 0;
  let ObjectArray = new Array();
  ObjectArray[1] = "image01.jpg";
  ObjectArray[2] = "image02.jpg";
  ObjectArray[3] = "image03.jpg";
  ObjectArray[4] = "image04.jpg";
  ObjectArray[5] = "image05.jpg";
  ObjectArray[6] = "image06.jpg";
  let nObjectCnt = 0;
  function ShowPicRotate(){
    nObjectCnt++;
    if(nObjectCnt >= ObjectArray.length){
      nObjectCnt = 0;
    }
    if(nObjectCnt < ObjectArray.length){
      document.getElementById("img_id").src = ObjectArray[nObjectCnt];  
      obTimeOut = setTimeout("ShowDefaultRotate()",1000);
    }
    else{
      clearTimeout(obTimeOut);
    }
  }
  function StartAnime(){
    obTimeOut = window.setTimeout(ShowPicRotate,100);
  }
  window.onload = StartAnime;
  
  return <div className="flex h-full">
    <div className="box-content min-h-full w-4/5 p-10px border-[4px]">
      <div>
      <img id="image_id" src = "image01.jpg"></img>
      </div>
    </div>
    <div className="box-border min-h-full sm:w-1/5 p-4 border-[4px] grid place-item-center">
      <button type="button" className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => navigation("/login")}>login</button>
    </div>
  </div>;
  
}


export default LandingPage;
