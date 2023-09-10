"use client";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [doorOpen, setDoorOpen] = useState(false);

  const toggleDoor = () => {
    setDoorOpen(!doorOpen);
  };

  return (
    <div className="relative overflow-hidden px-16 py-8">
      <div className="absolute w-full z-[-2]"></div>
      <div className="flex max-w-screen-lg mx-auto">
        <div className="flex flex-col py-32 w-1/2">
          <h1 className="text-5xl text-primary font-medium my-4">
            Red Door Project
          </h1>
          <h2 className="text-4xl text-primary my-4">项目红门</h2>
          <p className="my-2">
            Improving the mental health of Chinese Australians
          </p>
          <p className="my-2">改善澳大利亚华人的心理健康</p>
        </div>
        <div className="w-1/2 flex flex-end justify-center items-center">
          <Image src="/heroImage.png" width={200} height={200}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
