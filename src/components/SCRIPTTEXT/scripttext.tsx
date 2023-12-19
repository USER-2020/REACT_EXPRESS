import React, { useEffect } from "react";
import "./scripttext.css";
const Scripttext = () => {

  const randl = () => {
    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const enhance = (id) => {
      const element = document.getElementById(id),
        text = element.innerText.split("");

      element.innerText = "";

      text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
      });
    };

    enhance("channel-link");
  };

  useEffect (() => {
    randl()
  },[])

  return (
    <div id="text" className="text">
      <div className="line">
        <p className="word fancy">memento</p>
        <p className="word fancy">XXmori</p>
      </div>
      <div className="line">
        <p className="word fancy">NOBLE:</p>
        <p className="word fancy">Leal,</p>
        <p className="word fancy">Fiel,</p>
        <p className="word fancy">Real.</p>
      </div>
      <div className="line">
        <p className="word fancy">Nobleza---</p>
        <p className="word fancy">Obliga</p>
      </div>
      <div className="line">
        <p className="word fancy">XX/XX/20XX</p>
        <a className="word fancy" id="channel-link" href="https://instagram.com/noble.colombia">
          @NOBLE
        </a>
      </div>
    </div>
  );
};

export default Scripttext;

{
  /* <p>memento mori NOBLE: Leal, Fiel, Real. Nobleza obliga</p> */
}
