import React from 'react'
import CTA from '../../../component/cta/CTA'
import first from "../../../assets/service img.jpg"
import second from "../../../assets/svc-img-2.jpg"
import Circular from '../../../component/circular/Circular'
const  Dig = () => {
  return (
    <>
       <div className="main-text">
       <h1>Digitization</h1>
    </div>
 
<Circular 
img={first}
heading={"Digitization"}
text={"Many companies operating in developing countries such as Cameroon still use paper archiving of important information. We will provide services in order for these companies to store all that important data digitally so they can save on money, time and space."}/>
 
       <CTA/>
       </>
  )
}

export default Dig