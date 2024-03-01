import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {IoIosMail} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">
        <a href="mailto:erichsu137@hotmail.com" target="_blank" rel='noreferrer' style={{ fontSize: '28px' }}><IoIosMail/></a>
        <a href="https://www.linkedin.com/in/eric-hsu-234718126/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/ehsu4220" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials