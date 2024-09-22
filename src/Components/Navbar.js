import React from 'react'
import logo from './logo.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div id="header">
            <a href='/' id="logo"><img src={logo} alt='logo'/></a>
        <ul id="navbar">
            
            <li><button>Investors</button></li>
            <li><button>Businesses</button></li>
        </ul>
    </div>
  )
}

export default Navbar