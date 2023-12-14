import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import SectionColor from './components/home/sectionColor'
import Section_1 from './components/section_1/section_1'
import Catalogo from './components/catalogo/catalogo'
import HistoryBrand from './components/historyBrand/historyBrand'
import InstagramFeed from './components/instagramFeed/instagramFeed'
import SlidingButton from './components/btnsActions/slideButton'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <Section_1 />
        <Header />
        <Catalogo />
        <SectionColor />
        <HistoryBrand />
        <InstagramFeed />
        <Footer />
      </div>

    </>
  )
}

export default App
