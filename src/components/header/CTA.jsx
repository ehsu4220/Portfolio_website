import React, { useState } from 'react';
import resume from '../../assets/Hsu-Eric_Resume.pdf';
import narrative_cv from '../../assets/2024.06_Narrative-CV.pdf';

const CTA = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (

        <div className="cta">
            <div>
                <a href="#" onClick={toggleOptions} className='btn btn-primary'>
                    Resume/CV
                </a>
                {showOptions && (
                    <div className='bubble'>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                        <a href={narrative_cv} target="_blank" rel="noopener noreferrer">
                            Narrative CV
                        </a>
                    </div>
                )}
            </div>
            <a href="#contacts" className='btn'>Contact Me</a>
        
        </div>
    )
}

export default CTA
