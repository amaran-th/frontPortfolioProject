import React from "react";
import "../test.css";
import { useNavigate } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import { Container } from "postcss";

const Week1 = () => {
  const navigate = useNavigate();

  const rankList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const backpage = () => {
    navigate(-1);
  };

  const tree = (params, e) => {
    var cardImg = document.querySelector(".cardImg" + params);
    alert("나무를 심어욤..");
    cardImg.classList.toggle("is-hidden");
  };

  return (
    <div class="seoyun">
      <div className="bg-indigo-200  h-screen flex flex-col items-center p-4">
        {/* 모니터 화면 */}
        <div class="background">
          {/* 1번째 창 */}

          <div className="flex h-full items-center p-1  w-full justify-center">
            <div class="Container">
              <div class="Tiles">
                <div
                  class="title"
                  onClick={(e) => {
                    tree("0", e);
                  }}
                >
                  <img
                    class="cardImg0 is-hidden"
                    src="https://i.gifer.com/Yg6D.gif"
                  />
                </div>
                <div class="title"></div>
                <div class="title"></div>
                <div class="title"></div>
                <div
                  class="title"
                  onClick={(e) => {
                    tree("1", e);
                  }}
                >
                  <img
                    class="cardImg1 is-hidden"
                    src="https://i.gifer.com/Yg6D.gif"
                  />
                </div>
                <div
                  class="title"
                  onClick={(e) => {
                    tree("2", e);
                  }}
                >
                  <img
                    class="cardImg2 is-hidden"
                    src="https://i.gifer.com/Yg6D.gif"
                  />
                </div>
                <div class="title"></div>
                <div class="title"></div>
                <div class="title"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Week1;
