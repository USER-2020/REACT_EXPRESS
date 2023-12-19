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
      </div>
    </>
  )
}

export default App
