import React from "react";
import "./carrous.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from '../../assets/imgs/carrousel/MARQUILLA.jpg'
import img2 from '../../assets/imgs/carrousel/MARQUILLA2.jpg'
import img3 from '../../assets/imgs/carrousel/MARQUILLA3.jpg'
import img4 from '../../assets/imgs/carrousel/MARQUILLA4.jpg'
import img5 from '../../assets/imgs/carrousel/MARQUILLA5.jpg'
import img6 from '../../assets/imgs/carrousel/MARQUILLA6.jpg'
import img7 from '../../assets/imgs/carrousel/MARQUILLA7.jpg'
import img8 from '../../assets/imgs/carrousel/MARQUILLA8.jpg'

const Carrous = () => {
  return (
    <div className="carrous">
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 1,
          
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src={img1} alt="Image 1" width={100}/>
        </SplideSlide>
        <SplideSlide>
          <img src={img2} alt="Image 1" width={100}/>
        </SplideSlide>
        <SplideSlide>
          <img src={img3} alt="Image 1" width={100}/>
        </SplideSlide>
        <SplideSlide>
          <img src={img4} alt="Image 1" width={100}/>
        </SplideSlide>
        <SplideSlide>
          <img src={img5} alt="Image 1" width={100}/>
        </SplideSlide>
        <SplideSlide>
          <img src={img6} alt="Image 1" width={100}/>
        </SplideSlide>
        <SplideSlide>
          <img src={img7} alt="Image 1" width={100}/>
        </SplideSlide>
        <SplideSlide>
          <img src={img8} alt="Image 1" width={100}/>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carrous;
