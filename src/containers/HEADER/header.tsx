import React, { useEffect, useState } from 'react'
import Navbar from '../../components/NAVBAR/navbar'
import './header.css'
import { Fab, Fade, Grow } from '@mui/material'
import { ArrowDownward, Navigation } from '@mui/icons-material'

const Header = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleWindowScroll = (e) => {
    console.log(e.clientY);
    const newY = window.scrollY + e.clientY + 100; // Ajusta según sea necesario
    window.scrollTo({
      top: newY,
      behavior: 'smooth', // Agrega 'smooth' para un desplazamiento suave
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 3000);
  }, []);


  return (
    <div>
      <Navbar />
      <div className='section'>
        <h1 className='puff-in-center'>RENDER DE CAMISA</h1>
      </div>
    </div>
  )
}

export default Header