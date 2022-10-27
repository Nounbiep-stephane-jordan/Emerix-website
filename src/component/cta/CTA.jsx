import React from 'react'
import {motion} from "framer-motion"
const CTA = () => {
  return (
    
    <>
    < div className="cta"  >
      <motion.h1  whileInView={{opacity:1,y:10}} initial={{opacity:0,y:-10}}  transition={{duration:1,ease:'easeInOut'}}>Don’t Wait Until Tomorrow — Contact Us Today</motion.h1>
      <motion.p  whileInView={{opacity:1,y:10}} initial={{opacity:0,y:-10}}  transition={{duration:1,ease:'easeInOut'}}>We want you to be able to reach us in whatever way is most convenient for you. We are available during regular business hours via the following methods below. Click the button below to contact us now!</motion.p>
  <motion.div classNmae="buttons"  whileInView={{opacity:1,y:10}} initial={{opacity:0,y:-10}}  transition={{duration:1,ease:'easeInOut'}}>      
  <button className="btn btn-blue">Call Us At (514) 467-4067</button>
      <button className="btn btn-blue">Contact Us Online Today</button>
 </motion.div>
    </ div>
    </>
  )
}

export default CTA