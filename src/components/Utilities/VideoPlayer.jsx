"use client"
import YouTube from "react-youtube"
import { XCircle } from "@phosphor-icons/react/dist/ssr"
import { useState, useEffect } from "react"
import { PlayCircle } from "@phosphor-icons/react/dist/ssr"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos"

AOS.init()

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setOpen] = useState(true)

  const handleVideoPlayer = () => {
    setOpen((prevState) => !prevState);
  }


  const Player = () => {
    return (
      <button
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
      data-aos-offset="600"
        className="rounded-2xl fixed bottom-16 right-5 text-colos-dark w-36 flex justify-center items-center border text-colos-accent border-colos-primary bg-colos-button hover:bg-colos-secondary hover:text-colos-primary transition-all shadow-xl p-2 gap-1 z-50"
        onClick={handleVideoPlayer}
      >
        Watch Trailer <PlayCircle size={28} />
      </button>
    )
  }

  const ButtonOpen = () => {
    return (
      <div className="fixed bottom-2 right-2 z-40">
        <button
          className="text-colos-primary float-right"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} className="text-colos-primary dark:text-colos-accent" weight="fill"/>
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          className="w-full Youtube z-[99999999999999]"
        />
      </div>
    )
  }

  return isOpen ? <Player /> : <ButtonOpen />
}

export default VideoPlayer;
