import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const pages = ["Jang", "Lee", "Song"];
  const colors = ["#ddaaaa", "#aaddaa", "#aaaadd"];

  const navigate = useNavigate();

  const click = () => {
    navigate("/Jang");
  };

  return (
    <div className="flex m-2 h-11">
      <div
        className="m-1 bg-[#ddaaaa] h-4 w-4 rounded-lg text-center text-[#00000000]
      hover:px-2 hover:flex-wrap hover:py-1 hover:h-auto hover:w-auto hover:rounded-md hover:text-[#ffffff] }"
        onClick={() => {
          navigate("/Jang");
        }}
      >
        Jang
      </div>
      <div
        className="m-1 bg-[#aaddaa] h-4 w-4 rounded-lg text-center text-[#00000000]
      hover:px-2 hover:flex-wrap hover:py-1 hover:h-auto hover:w-auto hover:rounded-md hover:text-[#ffffff] }"
        onClick={() => {
          navigate("/Kim");
        }}
      >
        Kim
      </div>
      <div
        className="m-1 bg-[#aaddaa] h-4 w-4 rounded-lg text-center text-[#00000000]
      hover:px-2 hover:flex-wrap hover:py-1 hover:h-auto hover:w-auto hover:rounded-md hover:text-[#ffffff] }"
        onClick={() => {
          navigate("/Lee");
        }}
      >
        Lee
      </div>
      <div
        className="m-1 bg-[#aaaadd] h-4 w-4 rounded-lg text-center text-[#00000000]
      hover:px-2 hover:flex-wrap hover:py-1 hover:h-auto hover:w-auto hover:rounded-md hover:text-[#ffffff] }"
        onClick={() => {
          navigate("/Song");
        }}
      >
        Song
      </div>
      <div
        className="m-1 bg-[#aaaadd] h-4 w-4 rounded-lg text-center text-[#00000000]
      hover:px-2 hover:flex-wrap hover:py-1 hover:h-auto hover:w-auto hover:rounded-md hover:text-[#ffffff] }"
        onClick={() => {
          navigate("/Yim");
        }}
      >
        Yim
      </div>
    </div>
  );
};

export default Header;
