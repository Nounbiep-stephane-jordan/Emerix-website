import React from 'react'
import CTA from '../../../component/cta/CTA'
import first from "../../../assets/service img.jpg"
import second from "../../../assets/svc-img-2.jpg"
import {motion} from "framer-motion"

const  Marketing = () => {
  return (
    <>
       <div className="main-text">
       <h1>Marketing Services</h1>
       <p> 24/7 Bilingual call center services (English/French)</p>
        </div>
       <div className="circular">
      <motion.div className="left" whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
          <h1>We Take Care Of All Your Business Online Presence</h1>
           <p>Digital marketing is with no doubt one of the most evolving forms of marketing. Marketing as whole is detrimental to a business’s survival. This is because client acquisition is the base for company benefits. Because of the advancement in technology, digital marketing has become one of the most efficient ways to massively reach out to a variety of age groups. The demand for this service has been increasing because of the digital evolution.</p>
           <p>We offer digital marketing services such as video, digital adds on variety of platforms such as Facebook, Instagram, Snapchat, email marketing etc. We will focus on Instagram, Facebook, Twitter, LinkedIn, Snap chat.</p>
           <p>Our job will be marketing on these platforms on behalf of our customers in order to increase convergence.</p>
  <div className="bar  circular-bar"></div>
      </motion.div>

      <motion.div className="right" whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}}>
        <div className="circular-img">
          {/* <img src={first} alt="home-img 1"/> */}
        </div>
      </motion.div>
    </div>

    <div className="circular">
      <motion.div className="right" whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}}>
        <div className="circular-img">
          {/* <img src={second} alt="home-img 1"/> */}
        </div>
      </motion.div>

      <motion.div className="left" whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
      <h1>Website Creation And Maintainance</h1>
    <h1>Leave To Professionals Your Website Handling And Social Media Presence</h1>
    <p>SEM (Search Engine Marketing)
SEO (Search Engine Optimization)</p>
<h1>SMM (Social Media Marketing)</h1>
<p>Facebook, Snapchat, Instagram, Twitter Marketing
Viral Marketing
Influencer Affiliate Marketing
</p>
<h1>Other</h1>
<p>Television advertising
Email Marketing
Mobile Advertising
Radio advertising</p>
          <div className="bar  circular-bar"></div>
      </motion.div>
    </div>

 
       <CTA/>
       </>
  )
}

export default Marketing