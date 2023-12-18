import { useState } from 'react'
import './App.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Banner from './containers/BANNER/banner'
import Carrousel from './containers/CARROUSEL/carrousel'
import Footer from './containers/FOOTER/footer'
import Header from './containers/HEADER/header'
import Newsletter from './containers/NEWSLETTER/newsletter'
import Products from './containers/PRODUCTS/products'
import Script from './containers/SCRIPT/script'


function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Banner/>
        <Carrousel/>
        <Script/>
        <Products/>
        <Newsletter/>
        <Footer/>
      </div>
    </>
  )
}

export default App
