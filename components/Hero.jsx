import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
const Hero = () => {
  return (
   
     
    <div className='app__main__hero'>  
      <div className='app__div'>
        <h4 className='app__hero'> <span className=''>I'm</span> Alexsander Gom<span className='span__name'>es</span></h4>
        <h5 className='app__hero__2'>The best Full-Stack developer</h5>
        <h6 className='app__hero__3'>for your bussines</h6>
        <div className='btns'>
       <a href="tel:+1 (510) 630-5188" > <button className='btn__1'>Call</button> </a>
        <a href="mailto: sander.alex0909@gmail.com"><button className='btn__2'>email me</button></a>
        </div>
      </div>
    </div>
     
  )
}

export default Hero