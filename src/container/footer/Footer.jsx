import React from 'react'
import linknow from "../../assets/linknow-logo-white.png"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="blue">
        <p>CAMEROON , ON , M9A 4X7</p>

        <div>
          <p><span className="gold">MON - FRI</span> 7:30-23:00</p>
          <p>Hours</p>
        </div>

        <div>
          <p><span className="gold">SAT - 9:00AM - 3:00PM</span></p>
          <p><span className="gold">SUN</span> Closed</p>
        </div>
      </div>

      <div className="black">
        <p>Copywright 2022 Emerix company. All rights Reserved</p>
       {/* <div className="logo-footer">
        <img src={linknow} alt="logo"/>
       </div> */}
      </div>
    </div>
  )
}

export default Footer