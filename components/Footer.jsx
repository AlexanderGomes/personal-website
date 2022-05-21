import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='app__footer__main'>
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
  )
}

export default Footer