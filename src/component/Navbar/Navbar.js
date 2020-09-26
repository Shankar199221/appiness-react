/* eslint-disable jsx-a11y/img-redundant-alt */


import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import {useSelector} from 'react-redux'
// import {useHistory} from 'react-router-dom'


function Navbar() {
  
  // const history =useHistory();
  const loginData =useSelector(state => state.loginData)
  //  let loginCr = sessionStorage.getItem("key")

  useEffect(()=>{
    
    console.log("navbar is  running")
    
  },[])

    return (
        <div className="navbar">
            <div>
              <Link  to='/'><img src={logo} alt="no image" width="70rem" height="60rem" className="borderimg" /> </Link>
            </div>
         <div>
          <h2>Hi,{loginData.loginData.user}</h2>
           
          </div>
           
        </div>
    )
}

export default Navbar
