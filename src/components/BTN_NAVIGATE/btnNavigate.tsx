import React, { useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Fab } from "@mui/material";
import "./btnNavigate.css";

const BtnNavigate = () => {
  const [checked, setChecked] = useState(false);

  const handleWindowScroll = (direction: "up" | "down") => {
    const currentScroll = window.scrollY;
    const offset = direction === "down" ? window.innerHeight : -window.innerHeight;
    const newY = currentScroll + offset;

    window.scrollTo({
      top: newY,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 3000);
  }, []);

  return (
    <div className={`fab-container ${checked ? "show" : ""}`}>
      <Fab
        className="arrow-button"
        variant="extended"
        onClick={() => handleWindowScroll("up")}
      >
        <ArrowUpward className="arrow-icon" />
      </Fab>
      <Fab
        className="arrow-button"
        variant="extended"
        onClick={() => handleWindowScroll("down")}
      >
        <ArrowDownward className="arrow-icon" />
      </Fab>
    </div>
  );
};

export default BtnNavigate;
