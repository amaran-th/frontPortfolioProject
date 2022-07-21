import React, { useEffect, useState } from "react";

import "../Loading.css";
import dust from "./pngwing.com.png";

const Dust = ({ mainX, mainY }) => {
  const [top, setTop] = useState(mainY);
  const [left, setLeft] = useState(mainX);
  useEffect(() => {
    setTop(mainY + Math.floor(Math.random() * 30));
    setLeft(mainX + Math.floor(Math.random() * 80));
  }, [mainX, mainY]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      setTop(mainY + Math.floor(Math.random() * 30));
      setLeft(mainX + Math.floor(Math.random() * 80));
    }, 100);
    return () => clearInterval(timer);
  }, [count]);

  const ChipStyles = {
    position: "absolute",
    top: isNaN(top) ? mainY : top,
    left: isNaN(left) ? mainX : left,
  };

  return <img className="dustImg" src={dust} style={ChipStyles} alt="" />;
};

export default Dust;
