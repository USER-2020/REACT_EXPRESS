import React from 'react'
import Bannerimg from '../../components/BANNERIMG/bannerimg'
import Bannertext from '../../components/BANNERTEXT/bannertext'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <Bannerimg/>
      <Bannertext/>
    </div>
  )
}

export default Banner