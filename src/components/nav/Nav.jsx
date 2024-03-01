import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { FaBookOpen } from "react-icons/fa";
import { useState } from 'react'




const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    
    <nav>
      
       <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
       <a href="#time" onClick={() => setActiveNav('#')} className={activeNav === '#time' ? 'active': ''}><FaBookOpen/></a>
       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
       <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''}><BiMessageSquareDetail/></a>
      
    </nav>
  )
}

export default Nav