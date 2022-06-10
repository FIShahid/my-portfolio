import React from 'react'
import './Portfolio.css'
import sunway from '../../assets/sunway.png'
import gadgetmania from '../../assets/gadgetmania.png'
import adventor from '../../assets/adventor.png'
import galaxy from '../../assets/galaxy.png'
import boighor from '../../assets/boighor.png'
import { BiCheck } from 'react-icons/bi'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={sunway} alt="" />
          </div>
          <h3>Sunway Auto Parts</h3>
          <p>Project Details:
            <ul>
              <li><BiCheck className='service__list-icon' /> <small>This is a Full MERN stack Project about Car Parts Manufacturer</small></li>
              <li><BiCheck className='service__list-icon' />
                <small> Authentication System, Admin Panel and Payment Method Implemented</small>
              </li>
              <li><BiCheck className='service__list-icon' />
                <small>User can buy Products, Manage Order and Pay. Admin Can Manage Products.</small>
              </li>
            </ul>
          </p>
          <h4>Technology Used:</h4>
          <div className='tech'>
            <small className='sm'>React JS</small>
            <small className='sm'>Node JS</small>
            <small className='sm'>Express JS</small>
            <small className='sm'>MongoDB</small>
            <small className='sm'>Firebase</small>
            <small className='sm'>DaisyUI</small>
            <small className='sm'>Stripe</small>
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FIShahid/sunway-auto-client" className='btn' target='blank'>Github Client</a>
            <a href="https://github.com/FIShahid/sunway-auto-server" className='btn' target='blank'>Github Server</a>
            <a href="https://sunway-auto-parts.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={gadgetmania} alt="" />
          </div>
          <h3>Warehouse Management System </h3>
          <p>Project Details:
            <ul>
              <li><BiCheck className='service__list-icon' /> <small>This is a Full MERN stack Project about Warehouse Management.</small></li>
              <li><BiCheck className='service__list-icon' />
                <small> Registered Users can Manage and Update Product Stock</small>
              </li>
              <li><BiCheck className='service__list-icon' />
                <small>Firebase Authentication and JWT implemented</small>
              </li>
            </ul>
          </p>
          <h4>Technology Used:</h4>
          <div className='tech'>
            <small className='sm'>React JS</small>
            <small className='sm'>Node JS</small>
            <small className='sm'>Express JS</small>
            <small className='sm'>MongoDB</small>
            <small className='sm'>Firebase</small>
            <small className='sm'>BootStrap</small>

          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FIShahid/gadget-mania-client" className='btn' target='blank'>Github Client</a>
            <a href="https://github.com/FIShahid/gadget-mania-server" className='btn' target='blank'>Github Server</a>
            <a href="https://warehouse-management-c429a.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={adventor} alt="" />
          </div>
          <h3>Adventor.</h3>
          <p>Project Details:
            <ul>
              <li><BiCheck className='service__list-icon' /> <small>This is a Frontend Base Project about Freelance Travel Guide</small></li>
              <li><BiCheck className='service__list-icon' />
                <small> Firebase Authentication System Implemented</small>
              </li>
              <li><BiCheck className='service__list-icon' />
                <small>Different Section Added</small>
              </li>
            </ul>
          </p>
          <h4>Technology Used:</h4>
          <div className='tech'>
            <small className='sm'>React JS</small>
            <small className='sm'>Router</small>
            <small className='sm'>BootStrap</small>
            <small className='sm'>Firebase</small>

          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FIShahid/adventor-firebase" className='btn' target='blank'>Github Link</a>
            <a href="https://adventure-traveller.firebaseapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={galaxy} alt="" />
          </div>
          <h3>Gadget Galaxy</h3>
          <p>Project Details:
            <ul>
              <li><BiCheck className='service__list-icon' /> <small>This is a Front End based project about a Project Details</small></li>
              <li><BiCheck className='service__list-icon' />
                <small> React Routing Implemented</small>
              </li>
              <li><BiCheck className='service__list-icon' />
                <small>Different Section Added</small>
              </li>
            </ul>
          </p>
          <h4>Technology Used:</h4>
          <div className='tech'>
            <small className='sm'>React JS</small>
            <small className='sm'>Router</small>
            <small className='sm'>Tailwind</small>
            <small className='sm'>Firebase</small>

          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FIShahid/gadget-galaxy-router" className='btn' target='blank'>Github Link</a>
            <a href="https://gadget-galaxy.netlify.app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={boighor} alt="" />
          </div>
          <h3>Amar Boi Ghor</h3>
          <p>Project Details:
            <ul>
              <li><BiCheck className='service__list-icon' /> <small>This is a Front End Based Project about a Book Shop</small></li>
              <li><BiCheck className='service__list-icon' />
                <small> React Functionality Used </small>
              </li>
              <li><BiCheck className='service__list-icon' />
                <small>User can buy books, also can randomly pick a book </small>
              </li>
            </ul>
          </p>
          <h4>Technology Used:</h4>
          <div className='tech'>
            <small className='sm'>React JS</small>
            <small className='sm'>BootStrap</small>
            <small className='sm'>HTML5</small>
            <small className='sm'>Vanilla CSS</small>
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FIShahid/amar-boi-ghor-react-spa" className='btn' target='blank'>Github Link</a>
            <a href="https://amar-boi-ghor.netlify.app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>

      </div>
    </section>
  )
}

export default Portfolio