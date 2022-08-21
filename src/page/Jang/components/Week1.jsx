import React from "react";
import "../jang.css";
import { useNavigate } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";

const Week1 = () => {
  const navigate = useNavigate();

  const rankList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const backpage = () => {
    navigate(-1);
  };
  const cardFunction = () => {
    var card = document.querySelector(".card");
    // document.getElementsByClassName('card'). transform = rotateY(180deg)
    card.classList.toggle("is-flipped");
    //classList.toggle : card 클래스내, is-flipped class유무를 판단하고, 없으면 add, 있으면 remove를 자동으로 시켜줌
  };

  return (
    <div class="seoyun">
      <div className="bg-indigo-200  h-screen flex flex-col items-center p-4">
        <div className="flex bg-white h-12 w-1/3 p-1 mb-2 justify-center">
          <div className="flex bg-red-200 h-full w-full justify-items-start">
            <div class="lds-spinner">
              {rankList.map((info) => (
                <div></div>
              ))}
            </div>
          </div>
        </div>
        {/* 모니터 화면 */}
        <div class="background">
          {/* 1번째 창 */}

          <div className="flex flex-col w-3/12 h-1/3 bg-slate-50 p-1 border border-indigo-900  mr-4">
            <div className="flex  w-full h-10 justify-between items-center p-1 mb-1 bg-indigo-200 ">
              <div className="text-xl text-white">1주차 설명</div>
              <button class="web_button" onClick={backpage}>
                <XIcon className="font-extrabold h-6 w-6 text-slate-800" />
              </button>
            </div>
            <div class="heart-back">
              <div class="heart"></div>
            </div>
          </div>
          {/* 2번째 창 */}
          <div className="flex flex-col w-3/5 h-full bg-slate-50 p-1 border border-indigo-900 ">
            <div className="flex w-full h-10 justify-between items-center p-1 bg-indigo-200 ">
              <div className="text-xl text-white">1주차</div>
              <button class="web_button" onClick={backpage}>
                <XIcon className="font-extrabold h-6 w-6 text-slate-800" />
              </button>
            </div>
            <div className="bg-slate-50 flex flex-row h-full w-full">
              <div className="grid grid-cols-2  h-fit bg-red-200">
                {rankList.map((info) => (
                  <button class="web_button2"></button>
                ))}
              </div>

              <div className="flex h-full items-center p-1  w-full justify-center">
                {/* 내가 왼쪽 컴포넌트를 70px로 채웟음, 나머지를 걍 다채우고 싶을땐 flex-1 */}

                <div class="card-container">
                  {/* 3d공간이 될 부모 요소 */}
                  <div class="card" onClick={cardFunction}>
                    {/* 3d 오브젝트 */}
                    <div class="card-front">
                      <img src="data:image/png;base64,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" />
                    </div>
                    <div class="card-back">
                      <img src="https://t1.daumcdn.net/cfile/blog/124CF6014946F71A01" />
                      <p>핑크빈</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* 카드 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Week1;
