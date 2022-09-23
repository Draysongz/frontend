import React from 'react'
import { Link } from 'react-router-dom'
import { navbar } from './Navbar'

function Nav() {
  return (
    <div className='nav'>
       <nav className="nav-container">
        <ul className="navlist">
        <h1 className='logo'><span className='tac'>TAC</span>TIVE</h1>
            {navbar.map((e)=>{
                return <li><Link to={e.url} className={e.navclass}>{e.title}</Link></li>
            })}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
