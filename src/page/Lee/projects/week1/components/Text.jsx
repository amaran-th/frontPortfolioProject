import React, { useEffect, useState } from "react";

import "../Loading.css";

const Text = ({ text }) => {
  const fonts = [
    "'Alfa Slab One', cursive",
    "'Bangers', cursive",
    "'Courgette', cursive",
    "'Great Vibes', cursive",
    "'Kalam', cursive",
    "'Mochiy Pop One', sans-serif",
    "'Permanent Marker', cursive",
    "'Press Start 2P', cursive",
    "'Satisfy', cursive",
    "'Shadows Into Light', cursive",
  ];
  const [font, setFont] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      setFont(fonts[Math.floor(Math.random() * fonts.length)]);
    }, 150);
    console.log(font);
    return () => clearInterval(timer);
  }, [count]);

  const style = {
    fontFamily: font,
  };

  return (
    <div className="textOne" style={style}>
      {text}
    </div>
  );
};

export default Text;
