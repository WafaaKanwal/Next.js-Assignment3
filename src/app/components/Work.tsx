import React from 'react'

const Work = () => {
  return (
    <div>

      <div className='w-[1920px] h-[574px] bg-[#043873] py-[140px] px-[220px] left-[1px] text-[#ffffff]'>

        <div className='w-[1481px] h-[294px] flex flex-col justify-center items-center' >

          <h2 className='w-[1064px] h-[87px]  font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-center'>
            Your work, everywhere you are
          </h2>

          <p className='w-[1064px] h-[60px] items-center font-normal text-lg leading-[30px] tracking-[-0.02em] justify-center text-center mt-[24px]'>
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>

          <button className='flex flex-row items-center justify-center w-[195px] h-[63px] rounded-lg py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9] mt-[60px] hover:bg-[#2e89af]'>
            Try Taskey &#8594;
          </button>

        </div>

      </div>

    </div>
  )
}

export default Work