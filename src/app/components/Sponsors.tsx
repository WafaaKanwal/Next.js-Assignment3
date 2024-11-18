import Image from 'next/image'
import sponsors from "@/app/Images/sponsors.png"
import React from 'react'

const Sponsors = () => {
  return (
    <div>

      <div className='flex flex-col w-[1920px] h-[538] bg-[#ffffff] justify-center items-center py-[140px] px-[220px] gap-[100px]'>

        <h1 className='w-[1482px] h-[87px] text-center tracking-[-0.02em] text-7xl leading-[87.14px] font-bold justify-center'>
          Our sponsors
        </h1>

        <Image src={sponsors} alt='sponsors' className='w-[1482px] h-[71px]' />

      </div>

    </div>
  )
}


export default Sponsors