import React from 'react'
import Navbar from './Navbar'
import img1 from "../images/img-1.png"
import img2 from "../images/img-2.png"

export default function Section1() {
  return (
    <>
    <div className="Section1 bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${img1})` }} >
    <Navbar/>
    <div className="main flex flex-col justify-items-start items-center md:items-start w-10/12 m-auto  pt-32 md:pt-20 lg:pt-10 pb-20 lg:pb-40 2xl:pb-64  gap-10">
      <div className="div-1">
        <p className='text-white text-start font-bold font-[Inter] md:text-4xl lg:text-5xl xl:text-6xl leading-5 2xl:leading-snug '>Experience the Best <br />  <span className='text-red-600'>Beauty</span>  Services.</p>
      </div>
      <div className="div-2 text-white md:text-start text-center w-60 md:w-96 xl:w-[500px] font-normal font-[Inter] text-xs md:text-sm xl:text-lg ">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nullam vulputate consectetur eget. Morbi donec </p>
      </div>
      <div className="div-3 flex gap-10 ">
      <div class="button bg-[#BF1E2E] rounded-md w-28  h-10   2xl:w-40  text-center cursor-pointer " >
             <p class="h-14 text-center text-white font-normal pt-2  text-sm" style={{fontFamily:'Poppins'}} >Contact Us</p>
      </div>
      <div className="video flex gap-5 justify-center items-center cursor-pointer">
        <div className="img">
            <img src={img2} alt="" />
        </div>
        <div className="text text-white text-nowrap font-[Poppins]">
            <p>View Video</p>
        </div>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

