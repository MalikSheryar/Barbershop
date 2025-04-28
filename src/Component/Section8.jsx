import React from 'react'
import img34 from "../images/img-34.png"
import img35 from "../images/img-35.png"
import clock from "../images/Clock.png"


export default function Section8() {
  return (
    <>
    <div className="Section8 bg-[#111214] pt-20 pb-20">
    <div className="div-1 w-10/12 m-auto flex flex-col gap-5  ">
    <h1 className='text-[#BF1E2E] font-medium font-[Inter] 2xl:text-4xl text-xl md:text-3xl lg:text-3xl xl:text-5xl'>Request Appointment</h1>
    </div>
    <div className="div-2 w-10/12 m-auto flex gap-20 pt-20 flex-wrap md:flex-nowrap">
        <div className="left flex flex-col gap-10 xl:gap-14">
         <div className="div-1">
            <p className='text-white text-start font-normal font-[Inter] text-xs md:text-[11px] xl:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, <br /> pharetra vel odio aliquet sed ut sit purus </p>
         </div>
         <div className="div-2 flex gap-5 flex-wrap md:flex-nowrap ">
            <div className="Name bg-white 2xl:w-60 w-40  xl:w-60 xl:h-14 2xl:h-10  h-10 p-2 text-start">
            <h1 className='text-[#BF1E2E]'> Your Name </h1>
            </div>
            <div className="Phone bg-white 2xl:w-60 w-40  xl:w-60 xl:h-14 2xl:h-10   h-10 p-2 text-start">
                <h1 className='text-[#BF1E2E] '> Phone Number </h1>
            </div>
         </div>
         <div className="div-3 flex gap-5 flex-wrap md:flex-nowrap">
            <div className="celender flex justify-end bg-white 2xl:w-60 w-40 xl:w-60 xl:h-14 2xl:h-10  h-10  p-2">
                <img src={img35} alt="" />
            </div>
            <div className="Time flex justify-between  bg-white 2xl:w-60 w-40  xl:w-60 xl:h-14 2xl:h-10   h-10 p-2">
                <div className="text">
                    <h1 className='text-[#BF1E2E] '>Time</h1>
                </div>
                <div className="time-img">
                 <img src={clock} alt="" />
                </div>
            </div>
         </div>
         <div className='lg:text-justify text-center'>
                        <textarea placeholder='Your message' className='area placeholder-[#BF1E2E] poppins-regular w-full px-3 py-3' id="" rows="6"></textarea>
                    </div>
         <div className="div-5 flex justify-end">
         <div class="button bg-[#BF1E2E] rounded-md w-28  h-12   pt-2 2xl:pt-4  xl:w-36 xl:h-14   2xl:w-40 text-center " >
         <p class="h-14 text-center text-white font-normal pt-2 2xl:pt-0  text-sm 2xl:text-lg cursor-pointer" style={{fontFamily:'Poppins'}} >Book my table</p>
         </div>
         </div>
         
        </div>
        <div className="Right">
        <img src={img34} alt="" className='h-full' />
        </div>
    </div>
    </div>
    </>
  )
}
