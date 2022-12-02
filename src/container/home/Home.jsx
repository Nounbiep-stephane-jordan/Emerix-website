import React from 'react'
import "./Home.css"
import first from "../../assets/home-img-1.jpg"
import second from "../../assets/home-img-2.jpg"
import acclaim from "../../assets/acclaim-logo.png"
import aventurine from "../../assets/aventurine-logo.png"
import cas from "../../assets/cas-logo.png"
import easy from "../../assets/easy-logo.png"
import pvt from "../../assets/dit-pvt-logo.png"
import maferme from "../../assets/maferme-logo.png"
import magic from "../../assets/magic-logo.png"
import network from "../../assets/network-logo.png"
import smart from "../../assets/smart-logo.png"
import img from "../../assets/home img.jpg"
import {BsChevronBarDown} from "react-icons/bs"
import CTA from '../../component/cta/CTA'
import {motion} from "framer-motion"
import Circular from '../../component/circular/Circular'
const Home = () => {
  return (
   <>
     <motion.div className="home"   >
      <div className="home-bg">
        {/* <img src={img} alt="home-bg"/> */}
        <div className="pulsating">
          <BsChevronBarDown/>
        </div>
      </div>
      <motion.div className="body-text"   >
        <div className="body-banner">
          <p>Located in Toronto Saving All Of Canada these Major Cities : Montreal ,Vancauveur & Calgary</p>
        </div>
        <motion.div className="text" whileInView={{opacity:1,y:10}} initial={{opacity:0,y:-10}}  transition={{duration:1,ease:'easeInOut'}}>
        <h1>Calls and IT Solutions Agency</h1>
       <h1>the Experience You've Always Dreamt Of!</h1>
       <p>Emerik company is a corporation founded in Canada. Its main area of activity is in Business Process
                    Outsourcing. The goal is to enable clients save time and money, so they can focus on their core business
                    activities. These services include; Digital Marketing, Telephone Sales, Contact Center services etc.</p>
                    <p>Reduce business costs and increase profits when using one of our Business Process Outsourcing
                    (BPO) services.</p>

                    <div className="bar"></div>
        </motion.div>
      </motion.div>
    </motion.div>
       
    <Circular
    img={first}
    heading={"Why Use Emerix company"}
    text={` Reduce business costs when using one of our BPO services.
    Save time and focus on your core business
    Increase in productivity and efficiency
    24/7 availability
    Dedicated Account Manager
    Take advantage of our innovative technologies
    We work with you to provide customize solutions to your problems`}
    />

    <div className="circular">
      <motion.div className="right"  whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}}>
        <div className="circular-img">
          {/* <img src={second} alt="home-img 1"/> */}
        </div>
      </motion.div>

      <motion.div className="left"  whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
        <h1 className="h-left">We Provide Customized Solutions To A Wide Range Of Industries</h1>
        <p>Energy and Public Sector
Banking and Financial Services
Insurance
Travel, Transportation and Tourism
Engineering and Technology
Retail and e-Commerce
Healthcare
Automotive</p>
<h1>Our Culture</h1>
<p>Our team is dedicated to providing you with new strategies for customer acquisition and solidify relations with existing customers. We go above and beyond to find solutions right for your business.</p>
<div className="bar  circular-bar"></div>
     
      </motion.div>
    </div>

    
    
    <div className="testimonials">
      <div className="testimonial">
        <div className="test-text">
          <h1>Experienced</h1>
        </div>
         <div className="test-body">
         <p>Professionals</p>
         </div>
      </div>

      <div className="testimonial">
        <div className="test-text test-gold">
          <h1>Family</h1>
        </div>
         <div className="test-body">
         <p>Owned</p>
         </div>
      </div>


      <div className="testimonial">
        <div className="test-text">
          <h1>Available</h1>
        </div>
         <div className="test-body">
         <p>By Appointment</p>
         </div>
      </div>
    </div>
    

    

    <CTA/>

{/* 
  <div className="companies">
    <h1>Companies We Have Worked With</h1>
    <div className='all'>
    <div className="company">
      <img src={acclaim} alt="logo"/>
    </div>
    <div className="company">
      <img src={aventurine} alt="logo"/>
    </div>
    <div className="company">
      <img src={cas} alt="logo"/>
    </div>
    <div className="company">
      <img src={pvt} alt="logo"/>
    </div>
    <div className="company">
      <img src={easy} alt="logo"/>
    </div>
    <div className="company">
      <img src={maferme} alt="logo"/>
    </div>
    <div className="company">
      <img src={magic} alt="logo"/>
    </div>
    <div className="company">
      <img src={network} alt="logo"/>
    </div>
    <div className="company">
      <img src={smart} alt="logo"/>
    </div>
    </div>
  </div> */}
    </>
  )
}

export default Home