import React from 'react'
import './Home.css'
import vector from '../Utilities/vector.png'
import vector1 from '../Utilities/vector1.png'
import Vector2 from '../Utilities/Vector2.png'
import Group from '../Utilities/Group.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick =()=>{
    navigate('/signup')
  }

  return (
    <div className='home'>
      <div className="hero">
        <div className="left">
        <h2 className='main-header'>Online <br /> Education</h2>
        <p className="hero-text">Online learning gives educators an opportunity
        to reach students who may be able <br />to enrol in a traditional classroom course and supports 
        students who need to work on <br /> 
        their own schedule and at their own pace</p>
        <button onClick={handleClick} className='startbtn' type='button'>Start Now</button>
        </div>
            <img src={vector} alt="vectore" className="vector" />
            <img src={vector1} alt="vectore" className="vector1" />
            <img src={Vector2} alt="vectore" className="vector2" />
            <img src={Group} alt="vectore" className="group" />
            
      </div>
    </div>
  )
}

export default Home
