import React from 'react';
import Icon from "@/app/Images/Icon.png";
import Image from 'next/image';

const Extensions = () => {
  return (
    <div>
      <div className='py-[140px] px-[220px] top-[92px] w-[1920px] bg-[#043873] text-[#ffffff] flex items-center justify-between gap-[98px]'>

        <div className='w-[696px] h-[294px]'>

          <h2 className='w-[697px] h-[87px] font-inter text-7xl font-bold'>
            Use as Extension
          </h2>

          <p className='w-[697px] h-[60px] pr-[50px] font-inter leading-[30px] mt-[24px] font-normal text-lg tracking-[-0.02em]'>
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>

          <button className='flex flex-row bg-[#4F9CF9] py-[20px] px-[40px] gap-[10px] font-inter items-center rounded-md justify-centertext-lg font-medium mt-[60px] hover:bg-[#2e89af]'>
            Let's go <span><Image src={Icon} alt='Icon' /></span>
          </button>

        </div>

       <div className='bg-[#C4DEFD] w-[686px] h-[479px]' />

      </div>


    </div>
  )
}

export default Extensions;