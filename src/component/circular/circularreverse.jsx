import React from 'react'
import {motion} from "framer-motion"
const CircularR = ({img,heading,text}) => {
  return (
    <div className="circular">

<motion.div className="right"  whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}}>
      <div className="circular-img">
        <img src={img} alt="home-img 1"/>
      </div>
    </motion.div>
    <motion.div className="left"  whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
      <h1>{heading}</h1>
      <p>{text}</p>
      <div className="bar  circular-bar"></div>
    </motion.div>
  </div>
  )
}

export default CircularR