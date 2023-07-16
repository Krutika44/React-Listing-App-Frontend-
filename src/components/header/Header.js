import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header-section">
        <div className="hero-text">
          <span className='hero-text-title'>Marketplace</span>
          <span className='hero-text-subtitle'>Property Listing</span>
        </div>
        <img className='hero-img' src="https://images.pexels.com/photos/365633/pexels-photo-365633.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
    </div>
  )
}

export default Header