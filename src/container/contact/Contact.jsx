import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'

import "./Contact.css"
const Contact = () => {
    const [loading,setloading] = useState(false)
   const navigate = useNavigate()
    const [data, setData] = useState({
        name:"",
        email:"",
        tel:"",
        message:""
    })

    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
     } 


     const handleSubmit = (e) => {
        e.preventDefault()
        setloading(true)
        navigate("/")
     }

  return (
    <div className='contact'>
    <form action="">
    <h1>Contact Us</h1>
        {/* <h1>Contact Us Online</h1>
        <p><span>Canada Office</span></p>
        <p><span>Location:</span> Toronto. ON</p>
    <p><span>Director of Sales and Marketing:</span> Eddy Willy Lah: +1 514 228 4591</p>
    <p><span>Account Manager: Emmanuel Landry Sah:</span> +1 647 495 3636</p>
    <p><span>Email:</span> contact@kmeroutsourcing.com</p>
    <p><span>Cameroon Oﬃce:</span></p>
    <p><span>Location:</span> Yaounde, Essos.</p>
    <p><span>Email:</span> info@kmeroutsourcing.com</p> */}

            <div className="input-box">
            <label htmlFor="">full name</label>
            <input type="text" name="name"  onChange={handleChange}/>
            </div>
            
             <div className="input-box">
             <label htmlFor="">email</label>
            <input type="email" name="email" onChange={handleChange}/>
             </div>
             
             <div className="input-box">
             <label htmlFor="">tel</label>
            <input type="tel" name="tel" onChange={handleChange}/>
             </div>
             
             <div className="input-box">
             <label htmlFor="">message</label>
            <textarea name="message" onChange={handleChange}></textarea>
             </div>
     
            <button className="btn form-btn" type="submit" onClick={handleSubmit}>{loading?"loading...":"submit query"}</button>
    </form>
    </div>
  )
}

export default Contact