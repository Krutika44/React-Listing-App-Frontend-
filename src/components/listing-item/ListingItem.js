import React from 'react'
import './ListingItem.css'
import { Link } from 'react-router-dom'

function ListingItem() {
  return (
    <div className='listing-item'>
        <img className="listing-img" alt="img" src='https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600' />
        <div className='listing-details'>
            <div className='listing-categories'>
                <span className='listing-category'>Buy</span>
                <span className='listing-category'>Sell</span>
            </div>
            <Link to='/detail'><span className='listing-title'>Awesome Property Available.</span></Link>
            <hr />
            <span className='listing-time'>2 days ago</span>
            <p className='listing-description'>Entrepreneurship is the process of identifying opportunities, taking risks, and creating innovative solutions to address market needs.Entrepreneurship is the process of identifying opportunities, taking risks, and creating innovative solutions to address market needs.Entrepreneurship is the process of identifying opportunities, taking risks, and creating innovative solutions to address market needs. </p>
        </div>
    </div>
  )
}

export default ListingItem