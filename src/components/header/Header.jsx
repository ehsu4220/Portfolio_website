import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/my-image2.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (

        <header id='home'>
            <div className="container header_container">
                <HeaderSocials/>
                <div className="me">
                    <img src={me} alt='me'/>
                </div>
                    <div className="text_container">
                    <h1>Eric Hsu</h1>
                    <h3 className="text-light">M.S. in Computer Science</h3>
                </div>
                <CTA/>
            </div>

        </header>

    )
}

export default Header
