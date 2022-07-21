import React, { useState, useEffect, useRef } from "react";

import "./Loading.css";
import Dust from "./components/Dust";
import Text from "./components/Text";

const Week1 = () => {
  const dustRef = useRef();
  const textRef = useRef();
  const [dustX, setDustX] = useState();
  const [dustY, setDustY] = useState();
  const getPosition = () => {
    const x = dustRef.current?.offsetLeft;
    setDustX(x);
    const y = dustRef.current?.offsetTop;
    setDustY(y);
  };

  useEffect(() => {
    window.addEventListener("resize", getPosition);
    getPosition();
  }, []);

  const repeat = () => {
    const result = [];
    for (let i = 0; i < 30; i++) {
      result.push(
        <Dust key={i} className="dust" mainX={dustX - 10} mainY={dustY} />
      );
    }
    return result;
  };

  return (
    <div className="main">
      <div className="ani">
        <div className="runningMotionGif">
          <img
            src="https://c.tenor.com/smxDF7eQs6EAAAAi/%EB%8B%AC%EB%A6%AC%EB%8A%94%EB%86%8D%EB%8B%B4%EA%B3%B0-joke-bear.gif"
            alt=""
          />
        </div>
        <div className="dust" ref={dustRef}>
          {repeat()}
        </div>
      </div>
      <div className="text" ref={textRef}>
        <Text text={"LOADING"} />
      </div>
    </div>
  );
};

export default Week1;
