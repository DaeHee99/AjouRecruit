import mainVideo from "../../assets/Video/video.mp4"
import { useEffect, useRef, useState } from 'react';

function LandingPage() {
  const videoRef = useRef(null);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if(videoRef.current) videoRef.current.play();
    }, 3000);

    setTimeout(() => {
      setShowText(false);
    }, 3000);
  }, []);

  const handleButtonClick = () => {
    location.href = '/editor';
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <video
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        ref={videoRef}
      >
        <source src={mainVideo} type="video/mp4" />
      </video>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${showText ? '' : 'fade-out'}`}>
        <h1 className="text-8xl font-bold text-white mb-4">
          Ajou Recruit
        </h1>
        <div className="flex justify-center">
          <button className="mt-4 px-8 py-5 text-3xl text-white font-bold bg-blue-600 hover:bg-blue-700 rounded" onClick={handleButtonClick}>
            지금 모집하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;