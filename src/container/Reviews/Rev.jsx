import React, { useState } from 'react'
import {BsStar} from "react-icons/bs"
import CTA from "../../component/cta/CTA"
import { useNavigate} from 'react-router-dom'

import "./Rev.css"
const Rev = () => {

   const [loading,setloading] = useState(false)
   const navigate = useNavigate()
    const [data, setData] = useState({
        name:"",
        email:"",
        body:""
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
    <>
    <div className="rev">
        <h1>Good Reviews</h1>
         <div className="good-rev">
         <div>
            <BsStar/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
            <BsStar/>
        </div>
        <p>December 31 , 2020</p>
         </div>



         <form>
         <label htmlFor="">name</label>
            <input type="text" name="name"  onChange={handleChange}/>

            <label htmlFor="">email</label>
            <input type="text" name="email" onChange={handleChange}/>
            
            <label htmlFor="">Review</label>
            <textarea rows={"10"} name="body" onChange={handleChange}></textarea>
            
            <label htmlFor="">Select Rating</label>
            <select>
    <option value="good">Good</option>
    <option value="excellent">Excellent</option>
    <option value="impressive">Impressive</option>
    <option value="wonderful">Wonderful</option>
 
  </select>
            <button className="btn btn-blue" type="submit" onClick={handleSubmit}>{loading?"loading...":"submit Reveiw"}</button>
         </form>
    </div>
    <CTA/>
    </>
  )
}

export default Rev