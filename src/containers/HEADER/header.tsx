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
  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 3000);
  }, []);
  return (
    <div>
      <Navbar />
      <div className='section'>
        RENDER DE SEBASTIÁN
      </div>
      <div className="fab-container">
        <Grow in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Fab variant="extended" onClick={() => console.log('Hiciste clic en el Fab')}>
            <ArrowDownward sx={{ mr: 1 }} />
            Navigate
          </Fab>

        </Grow>

      </div>
    </div>
  )
}

export default Header