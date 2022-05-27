import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='app__footer__main'>
      <p className='app__footer__text'>Follow Me On Social Medias</p>
      <div className='app__footer__icons'>
      <a href="https://github.com/AlexanderGomes" target='_blank'>
       <AiFillGithub className='app__git__footer' size={30} />
      </a>
      <a href="https://www.instagram.com/alexsandergomess07" target='_blank'>
        <AiFillInstagram className='app__inst__footer' size={30}/>
      </a>
      <a href="https://www.linkedin.com/in/alexsander-hamir-79ab051a4" target='_blank'  className='app__linkd__footer'>
        <AiFillLinkedin size={30} />
      </a>
      </div>
    </div>
  )
}

export default Footer