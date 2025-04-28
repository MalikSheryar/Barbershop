import React from 'react'
import img11 from "../images/img-11.png"
import img12 from "../images/img-12.png"
import img13 from "../images/img-13.png"
import img14 from "../images/img-14.png"
import img15 from "../images/img-15.png"
import img16 from "../images/img-16.png"
import img17 from "../images/img-17.png"
import line from "../images/line.png"

export default function Section4() {
  return (
    <>
    <div className="Section4 bg-[#111214] pt-20 pb-20">
    <div className="div-1 w-10/12 m-auto flex flex-col gap-5 ">
     <h1 className='text-[#BF1E2E] font-medium font-[Inter] 2xl:text-4xl text-xl md:text-3xl lg:text-3xl xl:text-5xl'>What we do</h1>
     <p className='text-white font-normal font-[Inter] text-xs md:text-sm lg:text-lg xl:text-2xl 2xl:text-base '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nullam vulputa Morbi donec  </p>
    </div>
    <div className="div-2 w-10/12 m-auto flex gap-10 justify-items-center items-center pt-20">
    <div class="button bg-[#BF1E2E] rounded-md w-28  h-10   pt-0   2xl:w-28  text-center " >
     <p class="h-14 text-center text-white font-normal pt-2  text-sm 2xl:text-lg" style={{fontFamily:'Poppins'}} >All</p>
    </div>
    <div className="para">
        <p className='text-[#BF1E2E] font-medium font-[Inter] text-sm text-nowrap md:text-lg lg:text-xl '>Beauty Treatment</p>
    </div>
    <div className="para">
        <p className='text-[#BF1E2E] font-medium font-[Inter] text-sm text-nowrap md:text-lg lg:text-xl '>Beauty Interiors</p>
    </div>
    </div>
    <div className="div-3 w-10/12 m-auto grid grid-cols-1 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-20  pt-20   ">
    <div class=" shadow-lg rounded-lg  cursor-pointer">
          <img src={img12} alt="" />
    </div>
    <div class=" shadow-lg rounded-lg   cursor-pointer" style={{backgroundImage:`url(${img13})`}}>
    <div className="par flex flex-col justify-items-center items-center pt-28 font-medium font-[Inter] gap-8">
        <p className='text-white'>Beauty Treatment</p>
        <img src={line} alt="" />
        <p className='text-white text-xs'>The Power of ratio typogrphy cannotbe <br /> understated</p>
    </div>
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer ">
          <img src={img14} alt="" />
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer ">
          <img src={img15} alt="" />
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer ">
          <img src={img16} alt="" />
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer ">
          <img src={img17} alt="" />
    </div>
    </div>
    <div className="arrow w-10/12 m-auto flex justify-center pt-10">
        <img src={img11} alt="" />
      </div>
    </div>
    
    </>
  )
}
