import React from 'react'
import img3 from "../images/img-3.png"
import img4 from "../images/img-4.png"
import img5 from "../images/img-5.png"
import img6 from "../images/img-6.png"

export default function HeroSection() {
  return (
    <>
     <div className="Section2 bg-[#111214] pt-20 pb-20">
        <div className="div-1 w-10/12 m-auto flex flex-col gap-5 ">
          <h1 className='text-[#BF1E2E] font-medium font-[Inter]  text-xl md:text-3xl lg:text-3xl xl:text-4xl'>About Us</h1>
          <p className='text-white font-normal font-[Inter] text-xs md:text-lg lg:text-xl  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
           At nullam vulputa Morbi donec </p>
        </div>
        <div className="div-2 w-10/12 m-auto 2xl:pt-10 pt-20 flex gap-10 flex-wrap lg:flex-nowrap ">
            <div className="left md:pl-20 lg:pl-0">
             <div className="div-1 flex">
                <div className="img1">
                    <img src={img3} alt="" />
                </div>
                <div className="img2 2xl:mt-3">
                    <img src={img4} alt="" />
                </div>
             </div>
             <div className="div-2 flex gap-3">
             <div className="img1">
                    <img src={img5} alt="" />
                </div>
                <div className="img2 2xl:-mt-24 -mt-14 md:-mt-24 lg:-mt-14 xl:-mt-20">
                    <img src={img6} alt="" />
                </div>
             </div>
            </div>
            <div className="right pt-20 lg:pt-8 xl:pt-20 flex  flex-col justify-items-start items-start gap-5 md:pl-20 lg:pl-0">
                <div className="div-1">
                    <h1 className='text-white font-medium font-[Inter] 2xl:text-4xl text-xl md:text-3xl xl:text-4xl  md:text-nowrap'>Connect With Your Dream Style</h1>
                </div>
                <div className="div-2">
                    <p className='text-white text-start text-xs md:text-sm xl:text-lg md:text-nowrap'>"Seed spirit replenish cattle one moved air created. Them fill dont <br /> be fed isnt to he shall god good spirit they are the. Hath Itself <br /> their second ifruitful a moving their creature living every.</p>
                </div>
                <div className="div-3">
                    <p className='text-white text-start text-xs xl:text-lg'>Them fill dont be fed isnt to he shall god good spirit they are the. <br /> Hath Itself their second ifruitful.</p>
                </div>
                <div class="button bg-[#BF1E2E] rounded-md w-28 2xl:h-14 h-10  2xl:pt-2 pt-0   2xl:w-40  text-center " >
                <p class="h-14 text-center text-white font-normal 2xl:font-bold pt-2  text-sm 2xl:text-lg" style={{fontFamily:'Poppins'}} >Learn More</p>
               </div>
            </div>
        </div>
     </div>
    </>
  )
}
