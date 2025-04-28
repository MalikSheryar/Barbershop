import React from 'react'
import img7 from "../images/img-7.png"
import img8 from "../images/img-8.png"
import img9 from "../images/img-9.png"
import img10 from "../images/img-10.png"
import img11 from "../images/img-11.png"


export default function CardSection() {
  return (
    <>
    <div className="CardSection  bg-[#111214] pt-20 pb-20">
    <div className="div-1 w-10/12 m-auto flex flex-col gap-5 ">
          <h1 className='text-[#BF1E2E] font-medium font-[Inter] 2xl:text-5xl text-xl md:text-3xl lg:text-3xl xl:text-5xl'>Our Services</h1>
          <p className='text-white font-normal font-[Inter] text-xs md:text-sm lg:text-lg xl:text-2xl 2xl:text-base '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nullam vulputa Morbi donec  </p>
    </div>
        <div class="w-10/12 m-auto p-4 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-28 lg:gap-10  pt-28 md:pt-40">
        <div class="bg-white shadow-lg rounded-lg p-4 gap-5 py-10 flex flex-col items-center text-center cursor-pointer hover:bg-yellow-300 hover:-translate-y-20 transition-transform duration-[500ms] ">
          <img src={img7} alt="" />
          <p class="text-[#BF1E2E] font-medium font-[Inter] ">Beauty Treatment</p>
          <p className='font-normal font-[Inter] text-sm'>The Power of ratio typogrphy cannotbe understated</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-4 gap-5 py-10 flex flex-col items-center text-center cursor-pointer  hover:bg-yellow-300 hover:-translate-y-20 transition-transform duration-[500ms] ">
          <img src={img8} alt="" className="bg-red-500" />
          <p class="text-[#BF1E2E] font-medium font-[Inter]">Permanent Eyeliner</p>
          <p className='font-normal font-[Inter] text-sm'>The Power of ratio typogrphy cannotbe understated</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-4 gap-5 py-10 flex flex-col items-center text-center cursor-pointer  hover:bg-yellow-300 hover:-translate-y-20 transition-transform duration-[500ms] ">
          <img src={img9} alt="" />
          <p class="text-[#BF1E2E] font-medium font-[Inter]">Manicure & Pedicure</p>
          <p className='font-normal font-[Inter] text-sm'>The Power of ratio typogrphy cannotbe understated</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-4 gap-5 py-10 flex flex-col items-center text-center cursor-pointer  hover:bg-yellow-300 hover:-translate-y-20 transition-transform duration-[500ms] ">
          <img src={img10} alt="" />
          <p class="text-[#BF1E2E] font-medium font-[Inter]">Body Massage</p>
          <p className='font-normal font-[Inter] text-sm'>The Power of ratio typogrphy cannotbe understated</p>
        </div>
      </div>
      <div className="arrow w-10/12 m-auto flex justify-center pt-10">
        <img src={img11} alt="" />
      </div>
    </div> 
    </>
  )
}
