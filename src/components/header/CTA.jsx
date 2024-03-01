import React from 'react'
import cv from '../../assets/Hsu-Eric_Resume.pdf'

const CTA = () => {

    return (

        <div className="cta">
        
            <a href={cv} download className='btn'>Download Resume</a>
            <a href="#contacts" className='btn btn-primary'>Contact Me</a>
        
        </div>
    )
}

export default CTA