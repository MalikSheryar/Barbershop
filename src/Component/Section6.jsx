import React from 'react'
import img20 from  "../images/img-20.png"
import img21 from  "../images/img-21.png"
import img22 from  "../images/img-22.png"
import img23 from  "../images/img-23.png"
import img24 from  "../images/img-24.png"
import img25 from  "../images/img-25.png"

export default function Section6() {
  return (
    <>
    <div className="Section6 bg-[#111214] pt-20 pb-20">
    <div className="div-1 w-10/12 m-auto flex flex-col gap-5 ">
     <h1 className='text-[#BF1E2E] font-medium font-[Inter] 2xl:text-4xl text-xl md:text-3xl lg:text-3xl xl:text-5xl'>Meet Our Experts</h1>
     <p className='text-white font-normal font-[Inter] text-xs  lg:text-sm xl:text-xl 2xl:text-base '>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards <br /> by lorem ipsum and certified by dolor set amet. </p>
    </div>
    <div className="div-3 w-10/12 m-auto grid grid-cols-1 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-20  pt-20   ">
    <div class=" shadow-lg rounded-lg  cursor-pointer  ">
          <img src={img20} alt="" />
          <p className='text-[#BF1E2E] font-medium font-[Inter] text-start py-2 px-5 bg-white'>Tasfiya</p>
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer  ">
          <img src={img21} alt="" />
          <p className='text-[#BF1E2E] font-medium font-[Inter] text-start py-2 px-5 bg-white'>Salina Gomej</p>
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer  ">
          <img src={img22} alt="" />
          <p className='text-[#BF1E2E] font-medium font-[Inter] text-start py-2 px-5 bg-white'>Julia Shorez</p>
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer  ">
          <img src={img23} alt="" />
          <p className='text-[#BF1E2E] font-medium font-[Inter] text-start py-2 px-5 bg-white'>Tasfiya</p>
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer  ">
          <img src={img24} alt="" />
          <p className='text-[#BF1E2E] font-medium font-[Inter] text-start py-2 px-5 bg-white'>Salina Gomej</p>
    </div>
    <div class=" shadow-lg rounded-lg  cursor-pointer  ">
          <img src={img25} alt="" />
          <p className='text-[#BF1E2E] font-medium font-[Inter] text-start py-2 px-5 bg-white'>Julia Shorez</p>
    </div>
    <div className="  pl-32 md:pl-72 lg:pl-96 xl:pl-[550px] 2xl:pl-[550px]">
    <div class="button bg-[#BF1E2E] rounded-md w-28  h-12   pt-2    2xl:w-40 text-center " >
     <p class="h-14 text-center text-white font-normal pt-2 2xl:pt-0  text-sm 2xl:text-lg cursor-pointer" style={{fontFamily:'Poppins'}} >Contact Us</p>
    </div>
    </div>
    
    </div>
    
    </div>
    
    </>
  )
}
