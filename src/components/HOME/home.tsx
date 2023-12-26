import React, { useEffect, useState } from 'react'
import Preloader from '../PRELOADER/preloader'
import BtnNavigate from '../BTN_NAVIGATE/btnNavigate'
import Header from '../../containers/HEADER/header'
import Banner from '../../containers/BANNER/banner'
import Carrousel from '../../containers/CARROUSEL/carrousel'
import Script from '../../containers/SCRIPT/script'
import Products from '../../containers/PRODUCTS/products'
import Newsletter from '../../containers/NEWSLETTER/newsletter'
import Footer from '../../containers/FOOTER/footer'
import { useInView } from 'react-intersection-observer'


const Home = () => {
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
        <div>
            {loader && <Preloader />}
            <div>
                <BtnNavigate />
                <section>
                    <Header delayRender={delay} />
                </section>
                <section>
                    <Banner />
                </section>
                <section>
                    <Carrousel />
                </section>
                <section>
                    <Script />
                </section>
                <section>
                    <Products />
                </section>
                <section>
                    <Newsletter />
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        </div>
    )
}

export default Home
