import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-section'>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>About Me</span>
            <img className='sidebar-img' src={require('E:/Udemy courses/React-Listing-App/react-listing-app/src/images/prof.png')} alt='profile' />
            <p>Entrepreneurship is the process of identifying opportunities, taking risks, and creating innovative solutions to address market needs. </p>
        </div>

        <div className='sidebar-subsection'>
          <span className='sidebar-title'>Categories</span>
          <ul className='sidebar-categories'>
              <li className='sidebar-category'>Buy</li>
              <li className='sidebar-category'>Sell</li>
              <li className='sidebar-category'>Rent</li>
              <li className='sidebar-category'>Hostel</li>
              <li className='sidebar-category'>B & B</li>
              <li className='sidebar-category'>Hotel</li>
          </ul>
        </div>

        <div className='sidebar-subsection'>
          <span className='sidebar-title'>Follow Us</span>
          <div className='sidebar-social-icons'>
            <i className="sidebar-social-icon fab fa-instagram"></i>
            <i className="sidebar-social-icon fab fa-facebook"></i>
            <i className="sidebar-social-icon fab fa-linkedin"></i>
            <i className="sidebar-social-icon fab fa-twitter"></i>
          </div>
        </div>
    </div>
  )
}

export default Sidebar