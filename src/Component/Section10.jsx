import React from 'react'

export default function Section10() {
  return (
    <>
    <div className="Section10 bg-[#111214] pt-10 pb-20">
    <div className='bg-white w-10/12 m-auto rounded-md flex lg:flex-row flex-col items-center lg:justify-around justify-center py-14 lg:gap-y-0 gap-y-10'>
                <div className="left lg:text-justify text-center">
                    <h1 className='text-[#BF1E2E] xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl text-xl font-bold font-[Roboto]'>Get in touch</h1>
                    <p className='text-[#111214]  xl:w-[330px] lg:w-[330px] mt-2 xl:text-base lg:text-base md:text-sm md:w-[600px] sm:text-sm sm:w-[480px] text-xs w-[230px] leading-relaxed font-[Inter]'>Nemo enim ipsam boluptatem quia voluptas sit aspernatur aut aut fugit, sed quia consequuntur magni dolires eos qui ratione.</p>
                </div>
                <div className="right">
                    <div className='relative'>
                        <input type="email" placeholder='Enter your email address' className='placeholder-[#BF1E2E] contact sm:px-5 px-2 py-3 xl:w-96 lg:w-80 md:w-96  w-64 rounded-md text-xs md:text-lg' style={{boxShadow: "0px 4px 27px 0px #00000012"}} />
                        <div>
                         <button className='bg-[#BF1E2E] text-white px-5 py-2  rounded-r-md roboto-medium absolute right-0 text-sm sm:text-sm top-[3px] md:top-2 2xl:py-2.5'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}
