import React from "react";
import "./jang.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Week1 from "./components/Week1";
import Test from "./components/Test";
import Home from "./components/Home";

const Jang = () => {
  const onClick = () => {
    console.log("dd");
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/week1" element={<Week1 />} />
      {/* <Route path="/week2" element={<Week2 />} /> */}
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};
export default Jang;
