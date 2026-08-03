import React from 'react'
import logo from "../../assets/images/logo.png"

import "../Navbar/Navbar.css"
const Navbar = () => {
  return (
 <>
 <div className='Navbar'>
   
        <img src={logo} alt="" />
        <h1>Awesome App</h1>
    
    <li  >Home</li>
     <li >Features</li>
     <li >Pricing</li>
     <button className='btn'>Download now</button>
     
 </div>
 
 
 </>
  )
}

export default Navbar
