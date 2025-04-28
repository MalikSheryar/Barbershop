import React from 'react'
import img19 from "../images/img-19.png"
import play from "../images/Play button.png"

export default function Section5() {
  return (
   <>
   <div className="Section-5 h-screen bg-cover bg-center  bg-no-repeat relative " style={{backgroundImage:`url(${img19})`}}>
    <div className="paly-button flex flex-col items-center absolute 2xl:top-48 2xl:left-[680px] left-40 top-60 md:left-80 md:top-80 lg:left-96 lg:top-96 xl:top-[600px] xl:left-[680px]   justify-items-center gap-5 2xl:gap-10">
        <img src={play} alt="" className='h-20 md:h-28 lg:h-48 xl:h-80 2xl:h-40' />
        <p className='text-white lg:text-xl text-xs xl:text-5xl font-bold font-[Inter]'>Tap to play</p>
    </div>
   </div>
   </>
  )
}
