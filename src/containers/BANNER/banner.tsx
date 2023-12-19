import React, { useEffect, useState } from 'react'
import Bannerimg from '../../components/BANNERIMG/bannerimg'
import Bannertext from '../../components/BANNERTEXT/bannertext'
import './banner.css'
import { useInView } from 'react-intersection-observer'

const Banner = ({ prevSection }) => {

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    console.log("Desde el: ", prevSection);
    // if(prevSection  "banner"){
    //   setShowAnimation(true);
    // }
  }, [])
  return (
    <div className='banner'>
      <Bannerimg showanimation={showAnimation} />
      <Bannertext />
    </div>
  )
}

export default Banner