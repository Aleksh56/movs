import Header from "./Header";
import { useState } from "react";
import video from "../assets/videos/video-1.mp4";

const Hero = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(true);

  const toggleVideo = () => {
    const video = document.getElementById("hero-video");
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        id="hero-video"
        className="w-full h-screen object-cover"
        src={video}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <Header />
      <div
        className="absolute inset-y-1/2 md:inset-y-1/2 left-0 transform -translate-y-1/2 p-8 text-white"
        style={{ marginLeft: "10%", maxWidth: "80%" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Кафедра МОВС</h1>
        <p className="text-lg md:text-xl mb-8">
          Найди своё направление обучения в мире математического обеспечения
          вычислительных систем
        </p>
      </div>
      <button
        className="absolute bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        onClick={toggleVideo}
      >
        {isVideoPlaying ? "Пауза" : "Воспроизвести"}
      </button>
    </div>
  );
};

export default Hero;
