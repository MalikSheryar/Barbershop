import React from 'react'
import img41 from "../images/img-41.png" 
import img42 from "../images/img-42.png" 
import img43 from "../images/img-43.png" 
import img44 from "../images/img-44.png" 
import img45 from "../images/img-45.png" 
import img46 from "../images/img-46.png" 
import img47 from "../images/img-47.png" 
import img48 from "../images/img-48.png" 

export default function Section11() {
  return (
   <>
   <div className="Section11 bg-[#111214] pt-20 pb-10 md:pt-40 md:pb-20 lg:pt-60 ">
   <div className='grid grid-cols-6 xl:gap-x-0 lg:gap-x-3 md:gap-x-3 sm:gap-x-3 gap-x-2 w-10/12 m-auto'>
          <div className='col-span-1'>
            <div><img src={img41} alt="" /></div>
          </div>
          <div className='col-span-2'>
            <div><img src={img42} className='xl:-mt-16 lg:-mt-16 md:-mt-12 sm:-mt-11 -mt-5' /></div>
            <div className='flex sm:gap-x-4 gap-x-2'>
              <div><img src={img43} className='xl:mt-6 lg:mt-5 md:mt-5 sm:mt-4 mt-2' /></div>
              <div><img src={img44} className='xl:mt-6 lg:mt-5 md:mt-5 sm:mt-4 mt-2' /></div>
            </div>
          </div>
          <div className='col-span-1'>
            <div><img src={img45} className='xl:-mt-36 lg:-mt-36 md:-mt-24 sm:-mt-20 -mt-10' /></div>
            <div><img src={img46} className='xl:mt-5 lg:mt-5 md:mt-3 sm:mt-3 mt-2' /></div>
          </div>
          <div className='col-span-1'>
            <div><img src={img47} className='xl:-mt-14 lg:-mt-16 md:-mt-11 sm:-mt-9 -mt-5' /></div>
          </div>
          <div className='col-span-1'>
            <div><img src={img48} className='xl:mt-8 lg:mt-3 md:mt-2 sm:mt-2' /></div>
          </div>
          
        </div>
   </div>

   </>
  )
}
