import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const image1 = "/img/resume.jpg";
const image2 = "/img/replace.jpg";

function LandingPage() {
  const navigation = useNavigate();
  const [imageList] = useState([image1, image2, image1, image2]);
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    //  setInterval(() => {
    //    setImageIdx(imageIdx=> (imageIdx+1) % 4);
    //  }, 6000)
  }, []);

  return (
    <div className="flex-wrap m-6 ">
      <div className="w-screen text-4xl text-center mb-5">
        인삿말 줄바꿈이 일어날떄까지 쓰는 말{" "}
      </div>
      <div className="h-96">
        <img
          id="image_id"
          src={imageList[imageIdx]}
          alt="no images"
          className="max-w-sm rounded-lg"
        />
      </div>
      <div className="h-96"></div>
    </div>
  );
}

export default LandingPage;
