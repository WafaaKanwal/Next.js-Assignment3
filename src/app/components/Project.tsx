import React from "react";
import work from "@/app/Images/work.png"
import Image from "next/image";


const Project = () => {
  return (
    <div>
      <div className="bg-white px-[240px] py-[140px]">

        <div className="flex flex-row justify-between w-[1480px] h-[547px]">

          <div className="flex flex-col py-[68px]">

            <h2 className="w-[672px] h-[174px] font-bold leading-[87.74px] tracking-[-0.02em] font-inter text-7xl text-[#212529]">
              Project Management
            </h2>

            <p className="text-lg font-normal w-[672px] h-[90px] leading-[30px] font-inter tracking-[-0.02em] text-[#212529] pt-6 pr-[50px]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>

            <button className="w-[201px] h-[63px] rounded-md mt-[60px] bg-[#4F9CF9] font-inter text-[#FFFFFF] text-lg px-5 flex flex-row justify-center font-medium items-center gap-[10px] hover:bg-[#325580]">
              Get Started &#8594;
            </button>

          </div>

          <div className="bg-[#C4DEFD] w-[748px] h-[547px]" />

        </div>

        <div className="flex flex-row bg-white mt-[100px] w-[1480px] h-[661px] gap-[100px] items-center">

          <div className="flex relative w-[710px] h-[661px]">
            <Image src={work} alt="work together" className="w-[710px] h-[661px]" />
          </div>

          <div className="gap-[60px] items-center w-[670px] h-[294px]">

            <h2 className="w-[670px] h-[87px]text-7xl leading-[87.14px] font-bold font-inter">
              Work together
            </h2>

            <p className="w-[670px] h-[60px] tracking-[-0.02em] pt-6 pr-[40px] font-normal font-inter text-lg leading-[30px]">
              With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
            </p>

            <button className="bg-[#4F9CF9] w-[186px] h-[63px] rounded-md mt-[90px] flex flex-row justify-center items-center gap-[10px] text-white py-[20px] px-[36px] font-medium text-lg hover:bg-[#2e89af]">
              Try it now &#8594;
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};


export default Project;