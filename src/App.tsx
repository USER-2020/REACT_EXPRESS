import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';

import Banner from './containers/BANNER/banner';
import Carrousel from './containers/CARROUSEL/carrousel';
import Footer from './containers/FOOTER/footer';
import Header from './containers/HEADER/header';
import Newsletter from './containers/NEWSLETTER/newsletter';
import Products from './containers/PRODUCTS/products';
import Script from './containers/SCRIPT/script';
import BtnNavigate from './components/BTN_NAVIGATE/btnNavigate';
import Preloader from './components/PRELOADER/preloader';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import routes from './routes';
import { UserRoleProvider } from './services/defaultValues';

function App() {
  const [checked, setChecked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  const [loader, setLoader] = useState(true);
  const delay = 6000;

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changuePreloaderState = () => {
    setTimeout(() => {
      setLoader(false);
    }, delay)
  }

  useEffect(() => {
    changuePreloaderState();
  }, [])

  useEffect(() => {
    if (scrollPosition > 200) {
      setChecked(true);
    }

  }, [scrollPosition]);

  return (
    <>
      <UserRoleProvider>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.route}
                element={route.component}
              />
            ))}
          </Routes>
        </Router>
      </UserRoleProvider>

    </>
  );
}

export default App;
