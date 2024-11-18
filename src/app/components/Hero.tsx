const Hero = () => {
  return (
    <div>
      <div className='py-[140px] px-[220px] top-[92px] w-[1920px] bg-[#043873] text-white flex items-center'>

        <div className='w-[656px] h-[361px]'>

          <div className='w-[656px] h-[238px]'>
            <h2 className='mb-6 leading[77.45px] font-inter tracking-[-0.02em] font-bold text-[64px]'>
              Get More Done with whitepace
            </h2>
            <p className='pr-[40px] leading-[30px] font-inter tracking-[-0.02em] font-normal text-lg'>
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
            </p>
            <button className='w-[219px] text-lg font-normal font-inter h-[63px] bg-[#4F9CF9] rounded-lg flex flex-row gap-[10px] p-5 items-center mt-[60px] hover:bg-[#2e89af]'>
              <p>
                Try Whitepace free &#8594;
              </p>
            </button>
          </div>

        </div>

       <div className='bg-[#C4DEFD] w-[824px] h-[549px]'></div>

      </div>

    </div>
  )
}


export default Hero;