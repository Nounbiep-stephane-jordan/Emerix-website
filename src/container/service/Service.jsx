import React from 'react'
import CTA from '../../component/cta/CTA'
import "./Service.css"
import first from "../../assets/service img.jpg"
import second from "../../assets/svc-img-2.jpg"
const Service = () => {
  return (
    <>
       <div className="main-text">
       <h1> Emerik company Specialty Services</h1>
        <p>Running a business is hard work and that is why we are here to help. Businesses want to thrive and not just survive. Why struggle and worry when you don’t have to? No matter what size, or stage of growth your business is at, we will create a unique plan that reflects your needs and results.</p>
       </div>
       <div className="circular">
      <div className="left">
        <h1>Stress-Free Services For Your Business</h1>
        <p>Emerik company can help you focus on what is important for your business’ growth while taking care of the tasks that help you achieve your goals. Tell us all about the special and unique aspects of your company during a free consultation. I am friendly and knowledgeable! We are available to create the service package that is right for your brand. </p>
        <p><span>Basic Service</span>– Our experience offer industry expertise for basic services carried out with a smile and superior customer service!</p>
        <p><span>Complex Service</span> – For more complex projects that require extra planning and support, We provide valuable know-how and technical skills that helps your business stand out in the area.</p>
        <p><span>Full Service</span> – Our finest package with all the frills! Business owners know they can trust our expertise to uphold the highest industry standards.</p>
        <div className="bar  circular-bar"></div>
      </div>

      <div className="right">
        <div className="circular-img">
          <img src={first} alt="home-img 1"/>
        </div>
      </div>
    </div>

    <div className="circular">
      <div className="right">
        <div className="circular-img">
          <img src={second} alt="home-img 1"/>
        </div>
      </div>

      <div className="left">
        <h1 className="h-left">Personalized Service And Industry Expertise</h1>
        <p>As a leading provider of specialty services in the area, Kmer Outsourcing begins the process with a thorough analysis to determine how your company can benefit from our list of services. We will then develop the most cost-effective service plan that includes the most appropriate options and the most practical application.</p>
        <p>We use the latest technologies and make the safety and success of your company our number one priority. Kmer Outsourcing takes great pride in completing each project on-time and within budget, and always in a professional manner. Our agents have received extensive training to ensure your complete satisfaction.</p>
<h1>The Bottom Line</h1>
 <p>Some projects are just too complex to handle on your own and others are too detailed and take up too much time when you could be working on developing your business. This is where we can help. We can provide you with the most valuable resource—time—at rates that suit your budget and your company’s bottom line.</p>
<div className="bar  circular-bar"></div>
     
      </div>
    </div>

    <div className="services">
        <h1>Our Services</h1>
        <p>For many years, local companies have relied on our professionalism to provide:</p>
       <ol>
       {["Complete line of services","Complete company analysis and tailored strategies","Quality control protocols","Regular training upgrades","Efficient and prompt responses to all inquiries","High safety and security standards","Highly rated industry services and practices","Free quotes and consultations"].map(item => <li>{item}</li>)}
       </ol>
       <p>Contact us by phone, email to learn more about my special offers and loyalty discounts!</p>
    </div>
       <CTA/>
       </>
  )
}

export default Service