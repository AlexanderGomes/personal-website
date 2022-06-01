import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import Link from 'next/link'

const About = () => {
  return (
    <div className='everything'>

    <div className='app__about__main'>
    <div className='app__main__navbar'>
   
    <div className='app__name__navbar'>
      Gom<span className='span__name'>ES</span>
    </div>
    <div className='app__navbar__links'>
     <ul className='app__ul__links'>
     <a className='link_1' href='tel:+1 (510) 630-5188'><li>Contact</li></a>
     <Link className='link_2' href={'/'}>
     <li className='cc'>Go Back</li>
     </Link>
     </ul>
    </div>
    </div>
{/* main sections */}



<div className='app__main__about'>
<div className='app__whole'>
<h2 className='app__main__text'>Brief</h2>
<div className='p__tag'>
<p className='p__1'>I'm a self-taught Full-Stack Developer, Most part of my knowledge comes from free online resources and a few paid courses for deeper understanding</p>
<p>I studied about how bootcamps teach and took the same approach to my learning journey</p>
<p>It took me three months to be able to build full stack applications with confidence, and took me a week to realize that stackoverflow was now part of my life forever</p>
<p>This site is my way of showing all the improvement since my first project ultil where my skills are at right now, all my projects will be listed here</p>
<p>I'm focused on Javascript, and my favorite tech stack is MEARN,  but I can work with many different stacks</p>
</div>
</div>
<div className='app__move'>
<div className='app__white' />
</div>
</div>
<div className='a' />


{/* footer */}
    <div className='app__footer__about'>
      <p className='app__footer__text'>Follow me on social medias</p>
      <div className='app__footer__icons'>
      <a href="">
       <AiFillGithub className='app__git__footer' size={30} />
      </a>
      <a href="">
        <AiFillInstagram className='app__inst__footer' size={30}/>
      </a>
      <a href=""  className='app__linkd__footer'>
        <AiFillLinkedin size={30} />
      </a>
      </div>
    </div>

    </div>
    </div>
  )
}

export default About