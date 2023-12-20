import React, { useEffect, useState } from 'react'
import Bannerimg from '../../components/BANNERIMG/bannerimg'
import Bannertext from '../../components/BANNERTEXT/bannertext'
import './banner.css'
import { useInView } from 'react-intersection-observer'

const Banner = () => {

  


  return (
    <div className='banner'>
      <Bannerimg  />
      <Bannertext />
    </div>
  )
}

export default Banner