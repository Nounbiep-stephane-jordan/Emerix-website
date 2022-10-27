import React from 'react'
import CTA from '../../../component/cta/CTA'
import first from "../../../assets/service img.jpg"
import second from "../../../assets/svc-img-2.jpg"
import Circular from '../../../component/circular/Circular'
import CircularR from '../../../component/circular/circularreverse'
const CALL = () => {
  return (
    <>
       <div className="main-text">
       <h1>Call Center Services</h1>
       <p>24/7 Bilingual call center services (English/French)
Inbound, Outbound and back office services
Dedicated and shared agents when needed</p>
        </div>
  
    <Circular
    img={first}
    heading={"Outbound Call Center Services"}
    text={`Telemarketing Services
    Lead Generation
    Cross Selling and Upselling
    Market Research & Survey
    Appointment Setting`}
    />
 

<CircularR
img={second}
heading={"Inbound Call Center Services"}
text={`Order Taking Services
Email and Chat Support
Helpdesk Solutions
Inquiry Handling/ Answering Service
Customer Service
Tech Support Solutions
Retention Services
Back Office Services (Transcription Services)`}
/>
 
       <CTA/>
       </>
  )
}

export default CALL