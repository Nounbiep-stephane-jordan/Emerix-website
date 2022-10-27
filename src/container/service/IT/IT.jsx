import React from 'react'
import CTA from '../../../component/cta/CTA'
import first from "../../../assets/IT 1.jpg"
import second from "../../../assets/IT 2.jpg"
import third from "../../../assets/IT 3.jpg"
import four from "../../../assets/IT 4.jpg"
import "./it.css"
import {motion} from "framer-motion"
const  IT = () => {
  return (
    <>
       <div className="main-text">
       <h1>IT Solutions</h1>
        </div>
       <div className="circular it">
      <motion.div className="left"  whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}} >
        <h1>Managed IT</h1>
        <p>A managed IT service provider is a company that takes care of your IT needs remotely for a fraction of the expense of hiring an in-house team. Operating with a managed service provider enables knowledgeable specialists to work proactively to maintain your IT needs as well as assist in the development of an ongoing plan to ensure your infrastructure, systems, and security remain in perfect working order.</p>
        <p>Kmer Outsourcing's Managed Service Provider (MSP) programs can assist organizations of all sizes in this area. Our MSP plan makes skilled IT management teams' experience, technology, and training available to organizations of all sizes.</p>
        <ul>
            {[`Dedicated IT services`,`
Complete IT services`,`
Essential IT Services`,`
Remote IT Services`,`
IT Consulting`,`
Managed IT`].map(item => <li>{item}</li>)}
        </ul>
      </motion.div>

      <motion.div className="right" whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
        <div className="circular-img">
          <img src={first} alt="home-img 1"/>
        </div>
      </motion.div>
    </div>

    <div className="circular it">
      <motion.div className="right" whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
        <div className="circular-img">
          <img src={second} alt="home-img 1"/>
        </div>
      </motion.div>

      <motion.div className="left"  whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}}>
    <h1>Cloud Services</h1>
    <p>Many businesses are opting for cloud service providers. Cloud computing is highly available and scalable with minimal downtime. Kmer outsourcing Inc provides the following cloud services.</p>
    <ul>
            {[`Infrastructure as a Service Iaas`,` 
Virtual Desktop Infrastructure`,` 
Cloud & Hosted IT Services`,` 
Virtualization Services`].map(item => <li>{item}</li>)}
        </ul>
      </motion.div>
    </div>


    <div className="circular it">
    <motion.div className="left"  whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}} >
    <h1>Cyber Security Services</h1>
    <p>Our Cyber Security Support Services offers desktop technical support, network maintenance, and application support around the clock support, 24 hours a day, 7 days a week – 365 days per year.</p>
    <ul>
            {[`Cybersecurity Assessment Services`,`
Cybersecurity 24hr/ Support`,` 
Cybersecurity Monitoring`,` 
Cybersecurity Overview`].map(item => <li>{item}</li>)}
        </ul>
      </motion.div>
      <motion.div className="right" whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
        <div className="circular-img">
          <img src={third} alt="home-img 1"/>
        </div>
      </motion.div>
    </div>

    <div className="circular it">
      <motion.div className="right"  whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}}>
        <div className="circular-img">
          <img src={four} alt="home-img 1"/>
        </div>
      </motion.div>

      <motion.div className="left" whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
    <h1>Data Science And Analytics Services</h1>
    <p>Today’s business performance strongly depends on the business ability to collect and process data in order to make smart business decisions. Take advantage of our team of experts who can help your business make the most out of its data.</p>
     <ul>
            {[` Real time data analysis and predictive expertise`,`
Data Management, Visualization and insights`,` 
Big Data Analysis and Behavioral Analytics`,`
AI & ML – Powered Analytics`,` 
Business Intelligence`].map(item => <li>{item}</li>)}
        </ul>
      </motion.div>
    </div>
 
       <CTA/>
       </>
  )
}

export default IT