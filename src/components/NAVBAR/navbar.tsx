import React, { useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/imgs/logo/Noble4.png";
import { AccountBox, AccountBoxIcon, ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  const randh = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const anchors = document.querySelectorAll("#select");

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
          <div className="linkZ">
          <h1 className="colec">
            <a href="#" id="select" data-value="COLECCIONES">
              COLECCIONES
            </a>
          </h1>
          </div>
          <div className="linkZ">
          <h1 className="allp">
            <a href="#" id="select" data-value="PRODUCTOS">
              PRODUCTOS
            </a>
          </h1>
          </div>
          <div className="linkZ">
          <h1 className="gallery">
            <a href="#" id="select" data-value="GALERÍA">
              GALERÍA
            </a>
          </h1>
          </div>
        </div>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Noble de la montaña" />
          </a>
        </div>
        <div className="links">
          <h1 className="cart">
            <a href="#">
              <ShoppingCart sx={{ mr: 1 }} />
            </a>
          </h1>
          <h1 className="user">
            <a href="/dashboard" >
              <AccountBox sx={{ mr: 1 }} />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
