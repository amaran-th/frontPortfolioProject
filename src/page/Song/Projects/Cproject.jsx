import React, { useEffect, useState } from 'react'

//local
import './project.css'
import './Cproject.css'

const example = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]

const Cproject = () => {
  const [percentScr, setPercentScr] = useState(0) //웹페이지 자체의 스크롤
  const [elementPercent, setElementPercent] = useState(0) //content 내의 스크롤
  const handleScroll = () => {
    //Math.floor(window.pageYOffset)    //현재 스크롤 위치
    //document.documentElement.clientHeight //디바이스 높이
    //document.documentElement.scrollHeight //스크롤을 반영한 전체 높이
    setPercentScr(
      (100 * Math.floor(window.pageYOffset)) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)
    )
  }
  const handleScroll2 = () => {
    //console.log(document.getElementById('content3').scrollTop)
    //console.log(document.getElementById('content3').scrollHeight)
    //console.log(document.getElementById('content3').clientHeight)
    setElementPercent(
      (100 * Math.floor(document.getElementById('content3').scrollTop)) /
        (document.getElementById('content3').scrollHeight -
          document.getElementById('content3').clientHeight)
    )
  }
  useEffect(() => {
    //console.log(percentScr)
    //console.log(elementPercent)
  }, [percentScr, elementPercent])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      //이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <>
      <div class="main">
        <div
          class="content content3"
          id="content3"
          onScroll={() => handleScroll2()}
        >
          <div class="bar">
            <div class="percent" style={{ width: percentScr + '%' }}></div>
          </div>
          <div class="realContent">
            <div class="bar">
              <div
                class="percent"
                style={{ width: elementPercent + '%' }}
              ></div>
            </div>
            {example.map(el => (
              <p key={el}>test{el}</p>
            ))}
          </div>
        </div>
        <div className="description">
          스크롤 위치에 따라 상단 바의 모양이 변화하는 것.
        </div>
      </div>
    </>
  )
}

export default Cproject
