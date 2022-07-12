import React, { useState, useEffect } from "react";

import "./Loading.css";

const Week1 = () => {
  const [circle, setCircleBg] = useState({
    one: "100",
    two: "0",
    three: "0",
  });
  useEffect(() => {
    const timer = setInterval(() => {
      if (circle.one === "100") {
        setCircleBg({
          one: "50",
          two: "100",
          three: "0",
        });
      } else if (circle.two === "100") {
        setCircleBg({
          one: "10",
          two: "50",
          three: "100",
        });
      } else if (circle.three === "100") {
        setCircleBg({
          one: "0",
          two: "10",
          three: "50",
        });
      } else if (circle.three === "50") {
        setCircleBg({
          one: "0",
          two: "0",
          three: "10",
        });
      } else if (circle.three === "10") {
        setCircleBg({
          one: "100",
          two: "0",
          three: "0",
        });
      }
    }, 800);
    return () => clearInterval(timer);
  }, [circle]);

  return (
    <div className="flex flex-row">
      <div
        className={`w-2 h-2 m-2 rounded-lg bg-white opacity-${circle.one}`}
      ></div>
      <div
        className={`w-2 h-2 m-2 rounded-lg bg-white opacity-${circle.two}`}
      ></div>
      <div
        className={`w-2 h-2 m-2 rounded-lg bg-white opacity-${circle.three}`}
      ></div>
    </div>
  );
};

export default Week1;

const Fader = () => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-out",
  });

  useEffect(() => {
    setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 2000);
  }, [fadeProp]);

  return (
    <div className={fadeProp.fade}>
      <div className="w-2 h-2 rounded-lg bg-white"></div>
    </div>
  );
};
