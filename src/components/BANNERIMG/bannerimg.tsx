import React from 'react'
import './bannerimg.css';
import img1 from '../../assets/imgs/bannerimg/S1.jpg'
import img2 from '../../assets/imgs/bannerimg/S2.jpg'

const Bannerimg = () => {
  return (
    <div className='bannerI'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
    </div>
  )
}

export default Bannerimg