import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword,} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {BiShow} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'
import log from '../Utilities/log.png'
import '../Login/Login.css'
import {toast} from 'react-toastify'
import {auth, db} from '../config/Firebase'
import {ref, set, get, update, remove,child} from 'firebase/database'




const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] =useState({
    email: '',
    password: '',
    
  })
  const {  email, password} =formData

const navigate= useNavigate()

const onChange = (e)=>{

  setFormData( (prevState)=> ({
    
    ...prevState,
    [e.target.id]:e.target.value,
  }))
}
const onSubmit = async (e)=>{
  e.preventDefault()

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth, email, password
    )
   
    const user= userCredential.user
    await set(ref(db), {
      user
    })
    
   
    navigate('/login')
  } catch (error) {
    console.log(error);
    toast.error('something went wrong');
    toast.error(error.message)
  }
}
  return (
    <div>
       
    <div className='login'>
      <div className="left-div">
        <h1 className='senator'>Senator Abiru Innovation Lab</h1>
        <small>powered by tactive</small>
        <img src={log} alt="login" className='log' />
      </div>,
      <div className="right">
      <h1 className='mylogo'><span className='tac'>TAC</span>TIVE</h1>
      <p className="welcome-message">Welcome, Please login to your account.</p>
      <div className="google" >
        <p className='search'><FcGoogle/></p>
        <h3 className="oauth"> Register with Google</h3>
      </div>
        <div className="external-user">
        LOGIN FOR EXTERNAL USER
        </div>
        <main>
      <form action="POST" onSubmit={onSubmit} >
      <label htmlFor="email" className='email-label'>Username or Email</label>
        <input type="email" className="email" 
        placeholder='email' id='email' value={email} onChange={onChange} autoComplete='off' />

        <div className="passwordInput">
          <input type={showPassword? 'text' : 'password'} className='password'
          placeholder='password' id='password' value={password} onChange={onChange} autoComplete='off' />
          <BiShow className="showPassword" onClick={()=>setShowPassword((prevState)=> !prevState)}/>
        </div>
        <Link to='/forgot' className='forgotPasswordLink'>
          Forgot Password
        </Link>

        <div className="signUpBar">
          <button className="signUpButton">
            Sign Up
          </button>
        </div>
      </form>
      {/* Google Oauth */}

      <Link to='/login' className='registerLink'>
        Sign in
      </Link>
    </main>
       </div>
    </div>
    </div>
  )
}

export default SignUp
