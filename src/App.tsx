import { useEffect, useState } from 'react'
import './App.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Banner from './containers/BANNER/banner'
import Carrousel from './containers/CARROUSEL/carrousel'
import Footer from './containers/FOOTER/footer'
import Header from './containers/HEADER/header'
import Newsletter from './containers/NEWSLETTER/newsletter'
import Products from './containers/PRODUCTS/products'
import Script from './containers/SCRIPT/script'
import { Fab, Grow } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';


function App() {
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
    <>
      <div>
        <section><Header /></section>
        <section><Banner /></section>
        <section><Carrousel /></section>
        <section><Script /></section>
        <section><Products /></section>
        <section><Newsletter /></section>
        <section><Footer /></section>
        <div className="fab-container">
          <Grow in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}>
            <Fab variant="extended" onClick={(e) => handleWindowScroll(e)}>
              <ArrowDownward sx={{ mr: 1 }} />
              Navigate
            </Fab>

          </Grow>

        </div>
      </div>
    </>
  )
}

export default App
