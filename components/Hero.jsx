import React from 'react'
import {motion} from 'framer-motion'
import {Three} from '../components'
import Image from 'next/image'
const Hero = () => {
  return (
   
     
    <div className='app__main__hero'>  
     <div className='app__hero__heading'>
     <Three />     
     <div className='app__hero__move'>
      <h1 className='app__h1'>I'm Alexsander Gom<span className='span__name'>es</span></h1>
      <h3 className='app__h3'>The perfect full stack developer</h3>
      <h4 className='app__h4'>For your bussiness</h4>
       <div className='app__contact'>
        <a href="mailto:sander.alex0909@gmail.com" target='_blank' rel="noreferrer" className='app__contact__text'>Email</a>
        <a href="tel:+1 (510) 630-5188"   className='app__contact__call'>Text me</a>
       </div>
     </div>
      <div className='app__left__text'>
        <img className='app__left__img' src={'/bulb.svg'} alt=""  height={50} width={50}/>
        <div className='app__left__move'>
        <h4 className='app__left__h4'>One Step Away</h4>
        <h5 className='app__left__h5'>From Giving Life</h5>
        <h6 className='app__left__h6'>To Your Idea</h6>
        </div>
      </div>
      <div className='app__right__text'>
         <img className='app__right__img' src={'/face.svg'} alt="" height={50} width={50} />
         <div className='app__right__move'>
           <h4 className='app__right__h4'>Your Satisfaction</h4>
           <h5 className='app__right__h5'>Is My Number One</h5>
           <h6 className='app__right__h6'>Priority</h6>
         </div>
      </div>

     </div>
     {/* <Image className='img__app' src="" alt="" /> */}
    </div>
     
  )
}

export default Hero