import React from 'react'
import img26 from "../images/img-26.png"
import img28 from "../images/img-28.png"
import img29 from "../images/img-29.png"
import img30 from "../images/img-30.png"
import img31 from "../images/img-31.png"
import img32 from "../images/img-32.png"
import img33 from "../images/img-33.png"

export default function Section7() {
  return (
    <>
    <div className="Section7 bg-[#111214] pt-20 pb-20">
      <div className="div-1 w-10/12 m-auto ">
        <img src={img26} alt="" className='w-full' />
      </div>
      <div className="div-2 w-9/12 m-auto bg-white flex flex-col pt-10  2xl:-mt-96 -mt-28 md:-mt-52 lg:-mt-72 xl:-mt-96 relative z-10  ">
      <div className="img-1 2xl:ml-[1060px] 2xl:-mt-10 ml-56 -mt-8 md:ml-[490px] lg:ml-[680px] xl:ml-[980px]">
                    <img src={img31} alt="" />
        </div>
        <div className="img-1 2xl:-mt-20  md:-mt-24  -mt-24">
                    <img src={img30} alt="" />
        </div>
        <div className="div-1 flex justify-items-center items-center flex-col gap-10 pt-10">
            <img src={img28} alt="" className='mx-auto' />
            <p className='font-medium font[Inter] text-xl lg:text-3xl'>The Menu</p>
        </div>
       
        
        <div className="div-2 w-10/12 m-auto flex  justify-around py-20 flex-wrap md:flex-nowrap gap-10 md:gap-8 ">
            <div className="left flex flex-col gap-10">
                <div className="div1 flex flex-col gap-3 ">
                    <p className='font-bold font-[Inter] text-start lg:text-xl '><span className='text-[#BF1E2E]'>Classic Cut</span> $35</p>
                    <p className='text-start font-[Inter] font-normal text-xs lg:text-sm'>Relax while your barber achieves your <br /> tailored look.barber think about your classic <br /> cut and make your a good vibe</p>
                </div>
                <div className="div1 flex flex-col gap-3 ">
                    <p className='font-bold font-[Inter] text-start lg:text-xl '><span className='text-[#BF1E2E]'>Skin Fade </span> $45</p>
                    <p className='text-start font-[Inter] font-normal text-xs lg:text-sm'>Also known as a bald fade or a zero fade, <br /> this service requires a little extra time. Hair <br /> is faded from skin or “0” length to your <br /> desired length on top</p>
                </div>
                <div className="div1 flex flex-col gap-3 ">
                    <p className='font-bold font-[Inter] text-start lg:text-xl '><span className='text-[#BF1E2E]'>Beard Trim </span> $25</p>
                    <p className='text-start font-[Inter] font-normal text-xs lg:text-sm'>Let your barber apply their artistry to help <br /> you create the perfectly shaped beard or <br /> mustache style you envision.</p>
                </div>
            </div>
            <div className="Right flex flex-col gap-10">
                <div className="div1 flex flex-col gap-3 ">
                    <p className='font-bold font-[Inter] text-start lg:text-xl '><span className='text-[#BF1E2E]'>Classic Cut</span> $35</p>
                    <p className='text-start font-[Inter] font-normal text-xs lg:text-sm'>Ask for a buzz cut if you're looking for a no-  <br />nonsense low maintenance look at a <br /> uniform length as close as you'd like</p>
                </div>
                <div className="div1 flex flex-col gap-3 ">
                    <p className='font-bold font-[Inter] text-start lg:text-xl '><span className='text-[#BF1E2E]'>Skin Fade </span> $45</p>
                    <p className='text-start font-[Inter] font-normal text-xs lg:text-sm'>If your hair is currently past your ear lobes, <br /> this is the service for you; whether you’re <br /> keeping your long locks or chopping them <br /> off for a new look.</p>
                </div>
                <div className="div1 flex flex-col gap-3 ">
                    <p className='font-bold font-[Inter] text-start lg:text-xl '><span className='text-[#BF1E2E]'>Beard Trim </span> $25</p>
                    <p className='text-start font-[Inter] font-normal text-xs lg:text-sm'>Experience a traditional hot towel shave <br /> with a straight razor and warm shaving <br /> cream that will leave your face smooth to <br /> the touch.</p>
                </div>
            </div>
        </div>
        <div className="div-3 w-10/12 m-auto">
          <div className="img flex justify-items-center items-center">
            <img src={img29} alt="" className='mx-auto'/>
          </div>
        </div>
        <div className="img-1 2xl:-mb-2 -mb-20 md:-mb-24 ">
                    <img src={img32} alt="" />
        </div>
        <div className="img-1 2xl:ml-[1050px] 2xl:-mt-20 ml-60 md:-mb-0 md:ml-[480px] lg:ml-[680px] xl:ml-[980px] ">
                    <img src={img33} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
