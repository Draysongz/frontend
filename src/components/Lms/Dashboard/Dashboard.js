import React from 'react'
import {
  useNavigate
} from 'react-router-dom';
import {
  getAuth,
  signOut
} from 'firebase/auth'

function dashboard() {

  const auth = getAuth()
  const Logout = () => {
    signOut(auth);
    const navigate = useNavigate()
    navigate('/login')

  };
  return ( 
    <div >
      </div>
  )
}

export default dashboard