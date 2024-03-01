import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {IoIosMail} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>ERIC</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#time">Career</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contacts">Contact</a></li>
        </ul>

        <div className="footer__socials">
        <a href="mailto:erichsu137@hotmail.com" target="_blank" rel='noreferrer' ><IoIosMail/></a>
          <a href="https://www.linkedin.com/in/eric-hsu-234718126/"><BsLinkedin/></a>
          <a href="https://github.com/ehsu4220"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Eric Hsu. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer