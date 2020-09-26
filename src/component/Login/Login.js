import React,{ useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import fetchLoginData from '../../action/fetchLoginData'
import './index.css'
import {useHistory} from 'react-router-dom'

function Login() {

   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')
   const [emailerror,setEmailerror]= useState(false)
   const [volidCr,setVolidCr]= useState(false)
   const [passworderror,setPassworderror]= useState(false)
   const history =useHistory();


    const loginData =useSelector(state => state.loginData)
    const dispatch = useDispatch()
     const getData = ()=> dispatch(fetchLoginData())


     useEffect(()=>{
         getData()
         // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
  
   

   const handleSubmit =(e)=>{
        e.preventDefault();
          if(email === loginData.loginData.username && password ===  loginData.loginData.password ){
              setVolidCr(false)
              history.push('/employeedata')
              sessionStorage.setItem("key","data")
            
          } else  setVolidCr(true)
            if(email === '' || (!/\S+@\S+\.\S+/.test(email)) ){
                setEmailerror(true)
            } else setEmailerror(false)
            if(password === '' || password.length < 8 ){
                setPassworderror(true)
            } else setPassworderror(false)     
   }
    return (
       
           <form onSubmit={handleSubmit} className="form " autoComplete="off">
              <span className="form__header">Login Form</span>
            <div className="form__mail">
              <span >Email :</span>
                <input type="text"
                 value={email}
                 name="email" 
                 onChange={(e)=>setEmail(e.target.value)}  
                   />
            </div> 
               <div className="form__errors">
                 {emailerror ? <span >Please enter valid email format</span>: ''}
               </div> 
         
               
            
            <div className="form__password">
              <span >Password:</span>
                <input type="password" 
                value={password}
                 name="password"  
                 onChange={(e)=>setPassword(e.target.value)} />
             </div>
             <div className="form__errors"> {passworderror ? <span > minimum 8 characters are Requied</span>: ''}  </div> 
            
            
            <button type="submit" className="btn btn-primary">Submit</button>
            <div className="form__errors">{volidCr ? <span >Please enter valid Credentials</span>: ''} </div>
              
            </form>
  
    )
}

export default Login
