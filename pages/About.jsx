import React from 'react'
import Head from 'next/head'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'

const About = () => {
  return (
    // navbar
    <div className='app__about__main'>
    <div className='app__main__navbar'>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Roboto&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Permanent+Marker&family=Roboto&display=swap" rel="stylesheet"/>
    </Head>
    <div className='app__navbar__name'>
      Gom<span className='span__name'>ES</span>
    </div>
    <div className='app__navbar__links'>
     <ul className='app__ul__links'>
     <a className='link_1' href='tel:+1 (510) 630-5188'><li>Contact</li></a>
     <Link className='link_2' href='/'><li>Go Back</li></Link>
     </ul>
    </div>
    </div>
{/* main sections */}



<div className='app__main__about'>
<div className='app__whole'>
<h2 className='app__main__text'>Brief</h2>
<p>I'm a self-taught Full-Stack Developer, </p>
<p>Most part of my knowledge comes from free online resources,</p>
<p>and a few paid courses for deeper understanding, </p>
<p>I studied about how bootcamps teach and took the same</p>
<p> approach to my learning journey,</p>
<p>It took me three months to be able to build full stack</p>
<p> applications with confidence, and took me a week to realize</p>
<p> that stackoverflow was now part of my life forever.</p>
<p>This site is my way of showing all the improvement, since my first</p>
<p>project ultil where my skills are at right now.</p>
</div>
</div>

<div className='app__move'>
<div className='app__white' />
</div>


{/* footer */}
    <div className='app__footer__main  footer__about'>
      <p className='app__footer__text'>2022 Alexsander Gomes All rights reserved</p>
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
  )
}

export default About