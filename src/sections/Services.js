import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col bg-primary justify-center px-16">
      <p className="text-center text-white my-12 max-w-screen-lg mx-auto">
        <span className="font-bold">Chinese Australians have it hard.</span> Our
        mission is to help you understand what supports are out there, how you
        can help yourself or others, and what works well.
      </p>
      <div className="grid grid-cols-3 gap-8 max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center text-center bg-white rounded py-8 px-4 mb-12">
          <div className="mx-auto rounded-full bg-primary w-[80px] h-[80px]"></div>
          <h3 className="text-lg text-primary font-semibold my-4">
            Finding supports and services
          </h3>
          <p className="text-xs">
            Connect with supports and services that understand the unique
            challenges experienced by Chinese Australians
          </p>
          <Link href="#">
            <div className="w-full border-solid border-2 border-primary rounded mt-6 text-xs font-bold text-primary py-2">
              Find help
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center text-center bg-white rounded py-8 px-4 mb-12">
        <div className="mx-auto rounded-full bg-primary w-[80px] h-[80px]"></div>
          <h3 className="text-lg text-primary font-semibold my-4">
            Finding helpful information
          </h3>
          <p className="text-xs">
            Download information that will equip you or your loved ones with the
            right tools to manage your mental health.
          </p>
          <Link href="#">
            <div className="w-full border-solid border-2 border-primary rounded mt-6 text-xs font-bold text-primary py-2">
              Find resources
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center text-center bg-white rounded py-8 px-4 mb-12">
        <div className="mx-auto rounded-full bg-primary w-[80px] h-[80px]"></div>
          <h3 className="text-lg text-primary font-semibold my-4">
            Understanding the evidence
          </h3>
          <p className="text-xs">
            Understand the types of supports and services have been shown to
            work for Chinese Australians
          </p>
          <Link href="#">
            <div className="w-full border-solid border-2 border-primary rounded mt-6 text-xs font-bold text-primary py-2">
              Learn more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
