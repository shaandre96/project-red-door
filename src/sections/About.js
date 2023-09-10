import React from "react";

const About = () => {
  return (
    <div className="px-16 py-8">
      <h2 className="text-xl font-bold my-8">
        We know that for Chinese Australians...
      </h2>
      <div className="grid grid-rows-3 gap-8">
        <div className="flex border-solid border-primary border-2 px-4 py-4">
          <div className="w-5/6 flex flex-col justify-center">
            <h3 className="text-md font-bold text-primary my-2">
              It can be hard to access and navigate the mental health system
            </h3>
            <p className="text-sm">
              We know there are language and cultural barriers that might stop
              you or your loved ones from finding the help you need. We are here
              to help you access the right services.
            </p>
          </div>
          <div className="w-1/6 flex items-center justify-center">
            <div className="h-[80px] w-[80px] border-solid border-primary border-2 rounded-full"></div>
          </div>
        </div>
        <div className="flex border-solid border-primary border-2 px-4 py-4">
          <div className="w-5/6 flex flex-col justify-center">
            <h3 className="text-md font-bold text-primary my-2">
              It can be hard to know how you can help your own mental health
            </h3>
            <p className="text-sm">
              We know that it is not easy to find mental health resources that
              are culturally sensitive. Finding helpful information will help
              you improve your capacity to manage your own mental health.
            </p>
          </div>
          <div className="w-1/6 flex items-center justify-center">
            <div className="h-[80px] w-[80px] border-solid border-primary border-2 rounded-full"></div>
          </div>
        </div>
        <div className="flex border-solid border-primary border-2 px-4 py-4">
          <div className="w-5/6 flex flex-col justify-center">
            <h3 className="text-md font-bold text-primary my-2">
              It can be hard to talk about mental health with your friends and
              family
            </h3>
            <p className="text-sm">
              We know that mental health is stigmatised within many Chinese
              communities and there is real pressure to conform to traditional
              expectations of resilience and self-reliance. Understanding the
              evidence will help you improve your awareness of mental health.
            </p>
          </div>
          <div className="w-1/6 flex items-center justify-center">
            <div className="h-[80px] w-[80px] border-solid border-primary border-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
