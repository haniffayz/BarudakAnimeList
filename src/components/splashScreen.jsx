"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4500); // durasi splash screen (dalam milidetik)
    
    return () => clearTimeout(timer)
  }, []);

  return showSplash ? (
    <div className="splash-screen bg-colos-accent dark:bg-colos-primary">
      <Image src={'/splash-screen.png'} width={250} height={250} alt='' className='scale-animation'/>
    </div>
  ) : null
};

export default SplashScreen

