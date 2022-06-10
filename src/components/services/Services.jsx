import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>
     <div className="container services__container">
       <article className='service'>
         <div className="service__head">
           <h3>Front-End Development</h3>
         </div>
         <ul className='service__list'>
         
           <li>
             <BiCheck className='service__list-icon'/>
             <p>HTML and CSS Responsive Web Design</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>React JS Development</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Javascript Development</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Custom Web Apps</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Cross-Platform Development</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>UI/UX Design </p>
           </li>

         </ul>

       </article>

       <article className='service'>
         <div className="service__head">
           <h3>Backend Development</h3>
         </div>
         <ul className='service__list'>
         
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Node JS Development</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>CRUD Operation</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>API Development and Integration</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>SQL and NoSQL Database</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Cross-Platform Development</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Backend Refactoring </p>
           </li>

         </ul>

       </article>

       <article className='service'>
         <div className="service__head">
           <h3>Additional</h3>
         </div>
         <ul className='service__list'>
         
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Researching</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Googling</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Various Tools</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>DSA</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Agile Approach</p>
           </li>
           <li>
             <BiCheck className='service__list-icon'/>
             <p>Soft Skills </p>
           </li>

         </ul>

       </article>
     </div>
      </section>
  )
}

export default Services