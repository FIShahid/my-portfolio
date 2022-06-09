import React from 'react'
import './About.css'
import shahid from '../../assets/shahid.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
     <h5>Get to Know </h5>
     <h2>About Me</h2>
     <div className="container about__container">
       <div className="about__me">
      <div className="about__me-image">
        <img src={shahid} alt="" />
      </div>
       </div>
       <div className="about__content">
         <div className="about__cards">
           <article className='about__card'>
             <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
           </article>
           <article className='about__card'>
             <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ worldwide</small>
           </article>
           <article className='about__card'>
             <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed Projects</small>
           </article>
         </div>
        <p>I am skilled and well-organized computer science graduate with a BSc in CSE from IIUC, Eager to join in a reputed company and gain exciting experience in the field of Software Engineering. I have experience
working with JavaScript, React JS, Node JS, Express JS, MongoDB and so on...</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>
      </section>
  )
}

export default About