import mainVideo from "../../assets/Video/video.mp4"

function LandingPage() { 
  return (
    <div className='absolute top-0 left-0 w-full h-full z-0'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full object-cover'
      >
        <source src={mainVideo} type='video/mp4' />
      </video>
    </div>


  );
}  
  


export default LandingPage;
