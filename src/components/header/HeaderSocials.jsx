import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <div className="social_icons">
        <a href="mailto:erichsu137@hotmail.com" target="_blank" rel='noreferrer'><TfiEmail/></a>
        <a href="https://www.linkedin.com/in/eric-hsu-234718126/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/ehsu4220" target="_blank" rel='noreferrer'><BsGithub/></a>
      </div>
    </div>
  )
}

export default HeaderSocials