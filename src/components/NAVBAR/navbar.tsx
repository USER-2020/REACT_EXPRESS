import React from 'react'
import './navbar.css'
import logo from '../../assets/imgs/logo/Noble.png'

const Navbar = () => {
  return (
    <div className='navb'>
      <div className="navba">
        <div className="links">
          <h1 className="colec"><a href="#">COLECCIONES</a></h1>
          <h1 className="allp"><a href="#">TODOS LOS PRODUCTOS</a></h1>
        </div>
        <div className="logo">
          <a href="#"><img src={logo} alt="Noble de la montaña"/></a>
        </div>
        <div className="links">
          <h1 className="cart"><a href="#">CART</a></h1>
          <h1 className="user"><a href="#">USER</a></h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar