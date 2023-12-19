import React, { useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/imgs/logo/Noble.png";

const Navbar = () => {
  const randh = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const anchors = document.querySelectorAll("a");

    anchors.forEach((anchor) => {
      let interval = null;

      anchor.onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 25);
      };
    });
  };

  useEffect(() => {
    randh();
  }, []);

  return (
    <div className="navb">
      <div className="navba">
        <div className="links">
          <h1 className="colec">
            <a href="#" data-value="COLECCIONES">COLECCIONES</a>
          </h1>
          <h1 className="allp">
            <a href="#" data-value="PRODUCTOS">PRODUCTOS</a>
          </h1>
        </div>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Noble de la montaña" />
          </a>
        </div>
        <div className="links">
          <h1 className="cart">
            <a href="#" data-value="CART">CART</a>
          </h1>
          <h1 className="user">
            <a href="#" data-value="USER">USER</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
