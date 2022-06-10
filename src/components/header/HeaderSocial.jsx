import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>

      <a href="https://www.linkedin.com/in/fokhrul-islam-shahid/" target='blank'><BsLinkedin /></a>
      <a href="https://github.com/FIShahid" target='blank'><FaGithub /></a>
      <a href="https://www.facebook.com/Undefined.sahid" target='blank'><BsFacebook /></a>

    </div>
  )
}

export default HeaderSocial