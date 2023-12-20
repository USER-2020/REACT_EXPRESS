import React from "react";
import "./preloader.css";
import logob from "../../assets/imgs/logo/Noble.png";

const Preloader = () => {
  return (
    <div className="prel">
      <img src={logob} alt=""/>
    </div>
  );
};

export default Preloader;
