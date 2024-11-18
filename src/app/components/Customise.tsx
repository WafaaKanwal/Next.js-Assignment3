import React from 'react'
import Icon from "@/app/Images/Icon.png";
import Image from 'next/image'

const Customise = () => {
  return (
    <div>
      <div className='w-[1920px] bg-[#ffffff] h-[812.09px] left-[1px] py-[140px] px-[220px] gap-[98px] flex flex-row justify-between'>

        <div className='w-[714px] bg-[#C4DEFD] h-[532.09px]' />

        <div className='my-auto w-[669px] h-[411px] justify-center flex flex-col'>

          <h2 className='w-[669px] h-[174px] font-bold font-inter text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529] pr-[60px]'>
            Customise it to your needs
          </h2>

          <p className='w-[669px] h-[90px] text-[#212529] font-normal font-inter leading-[30px] pr-[70px] tracking-[-0.02em] text-lg justify-start mt-[24px]'>
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>

          <button className='flex flex-row gap-[10px] bg-[#4F9CF9] font-inter py-[20px] px-[40px] justify-center text-lg items-center rounded-lg w-[171px] font-medium mt-[60px] text-[#ffffff] h-[63px] hover:bg-[#2e89af]'>
            Let's go <span><Image src={Icon} alt='Icon' /></span>
          </button>

        </div>

      </div>

    </div>
    
  )
}

export default Customise;