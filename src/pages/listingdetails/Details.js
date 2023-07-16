import React from 'react'
import './Details.css'
import ListingDetail from '../../components/listing-detail/ListingDetail'
import Sidebar from '../../components/sidebar/Sidebar'

function Details() {
  return (
    <div className='detail-page'>
        <ListingDetail />
        <Sidebar />
    </div>
  )
}

export default Details