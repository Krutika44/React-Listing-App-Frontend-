import React from 'react'
import './TopBar.css'
import {NavLink} from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='topbar'>
        <div className='topbar-left'>
            <i className="topbar-social-icon fab fa-instagram"></i>
            <i className="topbar-social-icon fab fa-facebook"></i>
            <i className="topbar-social-icon fab fa-linkedin"></i>
            <i className="topbar-social-icon fab fa-twitter"></i>
        </div>
        <div className='topbar-center'>
            <ul className='topbar-list'>
                <li className='topbar-list-item'>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li className='topbar-list-item'>ABOUT</li>
                <li className='topbar-list-item'>CONTACT</li>
                <li className='topbar-list-item'>
                    <NavLink to="/create">CREATE PROPERTY</NavLink>
                </li>
                <li className='topbar-list-item'>LOGOUT</li>

            </ul>
        </div>
        <div className='topbar-right'>
            <img className="topbar-profile-pic" src={require('E:/Udemy courses/React-Listing-App/react-listing-app/src/images/prof.png')} alt='profile'/>
            <i className='topbar-search fas fa-search'></i>
        </div>
    </div>
  )
}

export default TopBar