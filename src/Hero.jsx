import React from 'react'
import heroImg from './assets/hero.png'
const Hero = () => {
  return (
    <>
        <div  className='bg-[#f5f5f5] flex items-center justify-center w-[100vw]'>
            <img src={heroImg} className='mt-4 w-full sm:w-[70vw] md:w-[50vw]  lg:w-[60vw]' alt="" />
        </div>
    </>
  )
}

export default Hero