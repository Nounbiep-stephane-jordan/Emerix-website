import React from 'react'
import "./header.css"
import Logo from "../../assets/logo.jpg"
import {FiFacebook} from "react-icons/fi"
import {BsInstagram,BsTwitter,BsLinkedin} from "react-icons/bs"
import {GoLocation} from "react-icons/go"
 import {FaPhoneVolume} from "react-icons/fa"
import {motion} from "framer-motion"
 const Header = () => {

  return (
    <motion.div className="header" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delayChildren:1,ease:"easeIn"}}>
      <div className="logo">
        <div className="img">
          <img src={Logo} alt="logo"/>
        </div>
      </div>
         <div className="tel none">
          <FaPhoneVolume className="phone-volume"/>
        <div className="tel-text">
          <p>contact@Emerix.com</p>
        </div>
      </div>

      <div className="icons none">
        <FiFacebook/>
        <GoLocation/>
        <BsInstagram/>
        <BsTwitter/>
        <BsLinkedin/>
      </div>

      <div className="header-button none">
        <button className="btn btn-gold">Get Started</button>
      </div>

      <p className="para">Hamilton Call Center Emerix company services and Call Center Outsourcing Company</p>
    </motion.div>
  )
}

export default Header