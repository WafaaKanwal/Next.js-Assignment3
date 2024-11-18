import React from 'react'
import Logo from '@/app/Images/Logo.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <div className='w-[1920px] h-[461px] bg-[#043873] text-white left-[1px] gap-[200px] py-[140px] px-[220px]'>

                <div className='w-[1480px] h-[289px] flex flex-col gap-[100px]'>
                    
                    <div className='flex flex-row justify-between w-[1480px] h-[169px] gap-[100px]'>

                        <div className='flex flex-col w-[295px] h-[169px] gap-[15px]'>
                            <Image src={Logo} alt='Logo' className='w-[191px] h-[34px]' />
                            <p className='w-[240px] h-[120px] text-lg font-normal font-inter leading-[30px] tracking-[-0.02em] pr-[20px]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                        </div>

                        <div className='flex flex-col w-[295px] h-[127px] gap-[15px]'>
                            <h2 className='w-[68px] h-[22px] text-lg font-bold font-inter leading-[21.78px] tracking-[-0.02em]'>Product</h2>
                            <p className='w-[70px] h-[20px] font-normal text-[#FFE492] font-inter text-base hover:cursor-pointer hover:text-emerald-400'>Overview</p>
                            <p className='w-[128px] h-[20px] font-normal text-base font-inter hover:cursor-pointer hover:text-emerald-400'>Pricing</p>
                            <p className='w-[177px] h-[20px] font-normal text-base font-inter hover:cursor-pointer hover:text-emerald-400'>Customer stories</p>
                        </div>

                        <div className='flex flex-col w-[295px] h-[127px] gap-[15px]'>
                            <h2 className='w-[68px] h-[22px] text-lg font-bold font-inter leading-[21.78px] tracking-[-0.02em]'>Resources</h2>
                            <p className='w-[70px] h-[20px] font-normal text-base font-inter hover:cursor-pointer hover:text-emerald-400'>Blog</p>
                            <p className='w-[128px] h-[20px] font-normal text-base font-inter hover:cursor-pointer hover:text-emerald-400'>Guides & tutorial</p>
                            <p className='w-[177px] h-[20px] font-normal text-base font-inter hover:cursor-pointer hover:text-emerald-400'>Help center</p>
                        </div>

                        <div className='flex flex-col w-[295px] h-[127px] gap-[15px]'>
                            <h2 className='w-[68px] h-[22px] text-lg font-bold font-inter leading-[21.78px] tracking-[-0.02em]'>Company</h2>
                            <p className='w-[70px] h-[20px] font-normal font-inter text-base hover:cursor-pointer hover:text-emerald-400'>About us</p>
                            <p className='w-[128px] h-[20px] font-normal text-base font-inter hover:cursor-pointer hover:text-emerald-400'>Careers</p>
                            <p className='w-[177px] h-[20px] font-normal font-inter text-base hover:cursor-pointer hover:text-emerald-400'>Media kit</p>
                        </div>

                    </div>

                    <div className='flex justify-center items-center w-[1480px] h-[20px]'>
                        <p>©2021 Whitepace LLC.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default Footer;