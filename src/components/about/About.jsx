import React from 'react'
import './about.css'
import myImage from '../../assets/profile.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

                <article className='about__card'>
                    <GiGraduateCap className='about__icon'/>
                    <h5>Degrees</h5>
                    <small>B.S. / M.S. Computer Science,<br /><i>University of Massachusetts, Amherst.</i></small>
                </article>

                <article className='about__card'>
                    <BsBookmarkStar className='about__icon'/>
                    <h5>GPAs</h5>
                    <small>3.503 / 3.827 out of 4.0</small>
                </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>AI/ML Data Processing</li>
                      <li>Mobile Applications</li>
                      <li>Applied Computer Science</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            I am a <b>Computer Science M.S. Graduate</b> from the University of Massachusetts, Amherst. As a self-starter and driven-to-learn software developer, I am actively seeking internship and full-time opportunities to further immerse myself in the dynamic world of technology and gain valuable industry experience. 
            
            <br/><br/>
            My academic journey has equipped me with a solid foundation in software development, augmented by my passion for exploring the intersection of machine learning with disciplines such as psychology and neurology. 
            I am enthusiastic about applying these interdisciplinary insights to tackle complex real-world challenges and contribute meaningfully to innovative projects.
                    
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About