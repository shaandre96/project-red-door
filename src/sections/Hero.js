import React from "react";
import heroImage from "../../public/heroImage.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-[-2] w-full">
        {/* <Image
          src={heroImage}
          alt="RedDoorProject"
          className="w-full object-cover"
        /> */}
      </div>
      <div className="flex flex-col px-32 py-48">
        <h1 className="text-5xl text-primary font-medium my-4">Red Door Project</h1>
        <h2 className="text-4xl text-primary my-4">项目红门</h2>
        <p className="my-2">Improving the mental health of Chinese Australians</p>
        <p className="my-2">改善澳大利亚华人的心理健康</p>
      </div>
    </div>
  );
};

export default Hero;
