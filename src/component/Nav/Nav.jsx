import React, { useState } from 'react'
import "./Nav.css"
import {NavLink} from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiScissors,FiChevronDown} from "react-icons/fi"
import {motion} from "framer-motion"
 
const Nav = () => {
  const [togglemenu, setTogglemenu] = useState(false)
  const handleNav = () => setTogglemenu(false)
  return (
   <>
     <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5,delayChildren:1,ease:"easeIn"}} >
      <NavLink to="/"  exact="true"  activeclassname="active">Home</NavLink >
      <div className="dropdown">
      <NavLink to="/service" exact="true"  activeclassname="active">Services<span className="chevron"><FiChevronDown/></span></NavLink >  
    <div className="dropdown-content">
      <NavLink to="/call" exact="true"  activeclassname="active">Call center Service</NavLink >
      <NavLink to="/marketing" exact="true"  activeclassname="active">Marketing Services</NavLink >
      <NavLink to="/digitalization" exact="true"  activeclassname="active">Digitization</NavLink >
      <NavLink to="/it" exact="true"  activeclassname="active">IT Solutions</NavLink >
    </div>
  </div>
      <NavLink to="/about" exact="true" activeclassname="active">About</NavLink >
      <NavLink to="/contact" exact="true"  activeclassname="active">Contact</NavLink >
      </motion.nav> 
      
        <GiHamburgerMenu className="mobile-menu" onClick={() =>  setTogglemenu(true)}/>
        <div className="blue-banner"><p>Call Us at (514) 467-4067</p></div>
        {togglemenu && (
          <>
          
     <motion.div className="mobile-menu-conatainer">
      <FiScissors className="close" onClick={handleNav}/>
     <NavLink to="/" onClick={handleNav} exact="true"  activeclassname="active">Home</NavLink >
       <div className="dropdown">
      <NavLink to="/service" exact="true"  activeclassname="active">Services<span className="chevron"><FiChevronDown/></span></NavLink >  
    <div className="dropdown-content">
      <NavLink to="/call" exact="true" onClick={handleNav} >Call center Service</NavLink >
      <NavLink to="/marketing" exact="true" onClick={handleNav} >Marketing Services</NavLink >
      <NavLink to="/digitalization" exact="true" onClick={handleNav}>Digitization</NavLink >
      <NavLink to="/it" exact="true" onClick={handleNav} >IT Solutions</NavLink >
    </div>
  </div>
      <NavLink to="/about" onClick={handleNav} exact="true" activeclassname="active">About</NavLink >
      <NavLink to="/contact" onClick={handleNav} exact="true"  activeclassname="active">Contact</NavLink >
   <button className="btn outline-blue">Get Started</button>
     </motion.div>
          </>
        )}
      
      </>
  )
}

export default Nav