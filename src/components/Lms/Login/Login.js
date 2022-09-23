import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiShow} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import log from '../Utilities/log.png'
import '../Login/Login.css'
import {toast} from 'react-toastify'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../config/Firebase'



const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] =useState({

    email: '',
    password: '',
  })
  const {email, password} =formData

const navigate= useNavigate()

const onChange = (e)=>{

  setFormData( (prevState)=> ({
    
    ...prevState,
    [e.target.id]:e.target.value,
  }))
}



const onsubmit = async (e)=>{
  e.preventDefault()
  try {
    await signInWithEmailAndPassword(auth, email, password)
    toast('successful')
    navigate('/dashboard')
  } catch (error) {
    console.log(error);
    toast.error(error.message)
  }
}
  return (
    <div className='con'>
  <div className='Login'>
      <div className= "left">
          <h3>Lorem ipsum dolor elit sit amet, incididunt consectetur adipiscing elit.</h3>
          <p>Incididunt ut labore et dolore magna aliqua.</p>
          <img src={log}/>
        </div>
        <div className='Right'>
          <div className='Header'>
          <h1 className='head logo'><span className='tac'>TAC</span>TIVE</h1>
          </div>
          <form action="" onSubmit={onsubmit}>
          <p>Welcome, Please login to your account</p>
          <div className='log-box btn btn-outline-primary'>
            <FcGoogle className='google'/> Log in with google
            </div>
          <div className='user'>
            <div className='line1'></div>login for external user 
            <div className='line2'></div>
          </div>
          <div className='login-Input'>
            Email
            <input type="text" placeholder="Enter your email" id='email' value={email} 
            onChange={onChange} autoComplete='off'/>
            Password
            <input type={showPassword? 'text' : 'password'} placeholder='Enter your password'  id='password' value={password} onChange={onChange} autoComplete='off'/>
            <BiShow className="showPassword" onClick={()=>setShowPassword((prevState)=> !prevState)}/>
          </div>
          <div className="forgot">
          <Link to='/forgot' className='forgotPasswordLink'>
          Forgot Password ?
        </Link> 
        </div>
          <button className='btn btn-outline-primary'>Log in</button>
          
          </form>
          <div className='register'>  <p>
            Don't have an account ?<Link to='/signup' className='registerLink'> Sign Up</Link></p></div>
      
          </div>
        </div>
       
    </div>
  )}


export default Login;
