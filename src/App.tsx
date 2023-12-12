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
      <Section_1 />
      <Header />
      <Catalogo/>
      <SectionColor />
      <HistoryBrand/>
      <InstagramFeed/>
      <Footer/>
      {/* <SlidingButton/> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite log" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
