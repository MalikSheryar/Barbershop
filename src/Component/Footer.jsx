import React from 'react'
import img40 from "../images/img-40.png"
import img41 from "../images/Location.png"
import img42 from "../images/Calling.png"
import img43 from "../images/Message.png"

export default function Footer() {
  return (
   <>
   <footer className="bg-[#0B1020] text-white py-10">
    <div className="flex gap-10   md:gap-16 lg:gap-32 xl:gap-40 2xl:gap-52 flex-wrap lg:flex-nowrap w-10/12 m-auto md:flex-row flex-col justify-center items-center">

      <div className="left flex flex-col gap-5 justify-center items-center lg:items-start lg:justify-start">
        <div className="para-img flex gap-5 ">
            <div className="para flex items-center  font-[Inter]">
            <h2 className="text-center">Beauty</h2>
            </div>
        </div>
        <div className="para">
            <p className="font-[Inter] text-white text-center">
            Follow us:
            </p>
        </div>
        <div className="img cursor-pointer">
            <img src={img40} alt="" />
            </div>
      </div>
    

     <div className="right flex gap-14  md:gap-14 2xl:gap-36 lg:gap-10  xl:gap-28  md:flex-nowrap flex-col md:flex-row">
     <div className='flex flex-col items-center md:items-star  text-nowrapt'>
            <h2 className="font-medium  mb-4 text-nowrap text-start ">Home</h2>
            <ul className="space-y-2 text-xs  text-center md:text-start   font-[Poppins]">
                <li className='hover:underline hover:text-red-600  '><a href="#">About Us</a></li>
                <li className='hover:underline  hover:text-red-600 '><a href="#">Intro</a></li>
                <li className='hover:underline  hover:text-red-600  '><a href="#">Features</a></li>
                <li className='hover:underline  hover:text-red-600  '><a href="#">Pricing</a></li>
            </ul>
        </div>

        <div className='flex flex-col items-center md:items-start  text-nowrap'>
            <h2 className="font-medium  mb-4 text-start">Suppor</h2>
            <ul className="space-y-2 text-xs text-center md:text-start font-[Poppins] ">
                <li className='hover:underline  hover:text-red-600  '><a href="#">Shipping & Returns</a></li>
                <li className='hover:underline  hover:text-red-600 '><a href="#">Contact Us</a></li>
                <li className='hover:underline  hover:text-red-600  '><a href="#">Our Partners</a></li>
            </ul>
        </div>

        
        <div className='flex flex-col items-center md:items-start  text-nowrap'>
            <h2 className="font-medium  text-start mb-4">Resources</h2>
            <ul className="space-y-2 text-xs   text-start font-[Poppins]">
                <li className='hover:underline  hover:text-red-600 '><a href="#">Our Work</a></li>
                <li className='hover:underline  hover:text-red-600 '><a href="#">Servicrs</a></li>
                <li className='hover:underline  hover:text-red-600 '><a href="#">FAQ</a></li>
            </ul>
        </div>

        <div className='flex flex-col items-center md:items-start'>
            <h2 className=" text-start font-medium mb-4">Contact Us</h2>
            <ul className="space-y-3 text-xs  font-[Poppins]">
                <li className='hover:underline hover:text-red-600 flex items-center  text-nowrap'>
                <img src={img41} alt="Icon" className='w-6 h-6 mr-2' />
                <a href="#">C928+9J9, Shafi Mel Selfie mal </a>
                </li>
                <li className='hover:underline hover:text-red-600 flex items-center'>
                <img src={img42} alt="Icon" className='w-6 h-6 mr-2' />
                <a href="#">+123456789 </a>
                </li>
                <li className='hover:underline hover:text-red-600 flex items-center'>
                <img src={img43} alt="Icon" className='w-6 h-6 mr-2' />
                <a href="#">mahmudului11@gmail.com </a>
                </li>
            </ul>
        </div>

     </div>
       
    </div>

    <div className="text-center mt-20 text-sm">
        <p>(c) 2022 Delicious, All rights reserved.</p>
    </div>
</footer>
   </>
  )
}
