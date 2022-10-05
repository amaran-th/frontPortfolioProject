import React, { useEffect, useState } from 'react'

//local
import './Dproject.css'

const Dproject = () => {
  //const oomooSize = 25 // document.getElementById('oomoo').offsetWidth / 2

  useEffect(() => {}, [])

  const handleMouse = e => {
    document.getElementById('oomoo').style.top =
      e.clientY -
      document.getElementById('content4').getBoundingClientRect().top +
      'px'
    //현재 보이는 스크린 기준 마우스 위치-현재 보이는 스크린 기준 박스 위치(top)
    document.getElementById('oomoo').style.left =
      e.clientX -
      document.getElementById('content4').getBoundingClientRect().left +
      'px'
  }
  return (
    <>
      <div class="main">
        <div class="frame">
          <div class="content content4" id="content4" onMouseMove={handleMouse}>
            <img
              id="oomoo"
              src={require('../assets/oomoo.gif')}
              alt="우무문어"
            />
          </div>
        </div>
        <div className="description flex flex-col">
          <div className="h-full flex flex-col items-center justify-center p-2">
            <div className="font-bold">마우스를 따라다니는 우무 문어</div>
            <div className="h-full flex items-center text-[rgb(197,148,0)] p-4">
              div 객체 내부를 기준으로 마우스의 위치 성분과 설정해줄 우무 문어
              gif 이미지 객체의 위치 성분 값을 활용하여 위치를 계산해주었다.
              <br />
              이미지의 위치 값이 변화할 때 약간의 딜레이를 가지고 부드럽게
              따라오도록 transition 속성에 0.5초의 딜레이와 ease-out를 주었다.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dproject
