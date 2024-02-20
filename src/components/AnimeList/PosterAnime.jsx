"use client"

import { Zoom } from "react-slideshow-image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";


const AnimePoster = async() => {

  const Image = [
    "Image/1.webp",
    "Image/2.webp",
    "Image/3.webp",
    "Image/4.webp",
    "Image/5.webp",
    "Image/6.webp",
    "Image/7.webp",
    "Image/8.webp",
  ];

  const [images, setImages] = useState(Image);

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    // Mengacak array gambar saat komponen pertama kali dimuat
    setImages(shuffleArray(Image));
  }, []);
  

  const zoomInProperties = {
    indicators: true,
    duration: 5000,
    transitionDuration: 500,
    Infinite: true,
    Zindex: 22,

    prevArrow: (
      <div className="">
        <CaretLeft size={32} className="absolute left-0 2xl:ml-[22rem] xl:ml-[15rem]" />
      </div>
    ),
    nextArrow: (
      <div className="">
        <CaretRight size={32} className="absolute right-0 2xl:mr-[22rem] xl:mr-[15rem]" />
      </div>
    ),
  };

  return (
    <div className=" home-image py-4 md:py-0">

    <div className="">
      <div className="w-full h-full fixed lg:pt-12 md:pt-20 pt-28">
        <img src="/Image/poster-anime-1.webp" alt="" className="w-[250vh] md:top-0 top-4 justify-center items-center object-cover z-0 relative" />
        <div className="overlay dark:bg-colos-primary bg-colos-accent bg-opacity-40 dark:bg-opacity-60"></div>
      </div>
     <div className="flex justify-center items-start md:pt-12 xl:pt-6 2xl:pt-12 md:py-0 py-4">
        <h1 className="font-bold md:text-[26px] text-xl gap-0 items-start z-10">Nonton Anime ya disini🔥</h1>
    </div>
        <Zoom {...zoomInProperties} className="inline-block align-middle relative">
				{images.map((each, index) => (
					<div key={index} className="flex md:p-10 relative justify-center md:mt-12 xl:mt-2 p-4">
            <div className="">
						<img
							className="2xl:w-[70rem] xl:w-[45rem] md:w-[52rem] w-[42rem] xl:h-[25rem] 2xl:h-[38rem] md:h-[27rem] h-[14rem] shadow-xl dark:shadow-lg rounded-xl dark:shadow-colos-accent"
							src={each}
						/>
            </div>
					</div>
				))}
             
			</Zoom>

       </div>
    </div>
    )
};

export default AnimePoster;
