import React, { useState } from 'react'

//local
import './song.css'
import Aproject from './Projects/Aproject'
import Bproject from './Projects/Bproject'
import Cproject from './Projects/Cproject'
import Dproject from './Projects/Dproject'
import Eproject from './Projects/Eproject'

const list = [
  <Aproject />,
  <Bproject />,
  <Cproject />,
  <Dproject />,
  <Eproject />,
]
const navList = [
  '1 - 모래시계',
  '2 - 정육면체들',
  '3 - 스크롤 로딩바',
  '4 - 우무 문어',
  '5 - 네비게이터',
  '6 - test',
  '7 - test',
  '8 - test',
  '9 - test',
]
const Song = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const rotateOption = (e, rotate, num) => {
    document.getElementById('rotateNav').style.transform = `rotate(${
      rotate * -15
    }deg)`
    document.getElementById('rotateNav').style.transition = 'all 0.5s ease-out'
    document.getElementById('currentPage').style.color = 'black'
    e.target.style.color = 'white'
    //0.5초 뒤 실행시킬 코드
    setTimeout(() => {
      setCurrentPage(num)
      document.getElementById('rotateNav').style.transform = `rotate(0deg)`
      document.getElementById('rotateNav').style.transition = 'all 0s ease-out'
      e.target.style.color = 'black'
      document.getElementById('currentPage').style.color = 'white'
    }, 500)
  }

  return (
    <>
      <div className="rootDiv">
        <div className="navigation">
          <div id="rotateNav">
            <ul>
              <li>{currentPage - 4 < 0 ? '' : navList[currentPage - 4]}</li>
              <li>{currentPage - 3 < 0 ? '' : navList[currentPage - 3]}</li>
              <li
                onClick={e => {
                  rotateOption(e, -2, currentPage - 2)
                }}
              >
                {currentPage - 2 < 0 ? '' : navList[currentPage - 2]}
              </li>
              <li
                onClick={e => {
                  rotateOption(e, -1, currentPage - 1)
                }}
              >
                {currentPage - 1 < 0 ? '' : navList[currentPage - 1]}
              </li>
              <li className="currentPage" id="currentPage">
                {navList[currentPage]}
              </li>
              <li
                onClick={e => {
                  rotateOption(e, 1, currentPage + 1)
                }}
              >
                {currentPage + 1 >= navList.length
                  ? ''
                  : navList[currentPage + 1]}
              </li>
              <li
                onClick={e => {
                  rotateOption(e, 2, currentPage + 2)
                }}
              >
                {currentPage + 2 >= navList.length
                  ? ''
                  : navList[currentPage + 2]}
              </li>
              <li>
                {currentPage + 3 >= navList.length
                  ? ''
                  : navList[currentPage + 3]}
              </li>
              <li>
                {currentPage + 4 >= navList.length
                  ? ''
                  : navList[currentPage + 4]}
              </li>
            </ul>
          </div>
          <div className="case1"></div>
          <div className="case2"></div>
          <div className="center"></div>
        </div>
        <div className="fakeNav"></div>
        <div className="mainDiv">
          <div class="project">
            <p className="title">
              <p></p>
              <span>{currentPage + 1}주차</span>
            </p>

            {list[currentPage]}
          </div>
        </div>
      </div>
    </>
  )
}

export default Song
