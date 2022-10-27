import React from 'react'
import CTA from '../../component/cta/CTA'
import first from "../../assets/aboutpic2.jpg"
import second from "../../assets/aboutpic1.jpg"
import Circular from "../../component/circular/Circular"
import {motion} from "framer-motion"
const AboutUS = () => {
  return (
    <>
       <div className="main-text">
       <h1>Emerik company About Us</h1>
    <p>Kmer Outsourcing knows that as a business owner in the area you require a specialty service that provides an indepth analysis and customized strategy plan that addresses your company's precise needs. We oﬀer qualified, creative and practical technical expertise and skills ensuring that your business reaches its full potential.</p>
        </div>
      

    <Circular
    img={first}
    heading={""}
    text={`Kmer Outsourcing knows that as a business owner in the area you require a specialty service that provides an indepth analysis and customized strategy plan that addresses your company's precise needs. We oﬀer qualified, creative and practical technical expertise and skills ensuring that your business reaches its full potential.`}
    />

    

    <div className="circular">
      <motion.div className="right" whileInView={{opacity:1,x:10}} initial={{opacity:0,x:-20}}  transition={{duration:1,ease:'easeInOut'}}>
        <div className="circular-img">
          <img src={second} alt="home-img 1"/>
        </div>
      </motion.div>

      <motion.div className="left" whileInView={{opacity:1,x:-10}} initial={{opacity:0,x:50}}  transition={{duration:1,ease:'easeInOut'}}>
        <span>Onboarding:</span>
        <p>During this stage we get to know the product and service, customers and potential customers of our partners. We provide suggestions that will bring solutions to the problems we will be solving (lead generation, customer service etc).</p>
  
        <span>CRM set up/Contact list generation:</span>
        <p>After a clear understanding of our partner needs, we go ahead setting up a test campaign. Some partners come along with their own CRM systems. When partners do so, we have to work on implementation or integration with our systems. In the case of sales and lead generation, purchase targeted lists and also have an in-house IT specialist who uses web scraping strategies to build calling lists.</p>
        <span>Test Campaign:</span>
        <p>A test campaign gives us a clear understanding of how clients are responding to our partner's product and services. The time frame for this varies from partner to partner and is dependent on factors such as the type of service we need to deliver.</p>
        <span>Results/ Evaluation:</span>
        <p>After the test campaign, we gather information and data from the campaign and generate a report. At KO, partners have the option of actively taking part in the campaign outreach and monitoring to ensure high success and conversion rates. These results data are then presented to the partner for assessment and evaluation.</p>
         <span>Feedback/ Recommendation:</span>
        <p>After review of campaign details, we go ahead in providing feedback and making recommendations on improvements that could be made to drive better results. From there on we discuss further work agreements with customers if willing to.</p>
        <div className="bar  circular-bar"></div>
      </motion.div>
    </div>

    <div className="services">
     </div>
       <CTA/>
       </>
  )
}

export default AboutUS