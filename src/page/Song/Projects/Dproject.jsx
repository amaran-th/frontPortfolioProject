import React, { useState } from 'react'

//local
import './project.css'
import './Dproject.css'

const Dproject = () => {
  //const oomooSize = 25 // document.getElementById('oomoo').offsetWidth / 2
  const container = document.getElementById('content4')
  const oomoo = document.getElementById('oomoo')

  const handleMouse = e => {
    oomoo.style.top = e.clientY - container.getBoundingClientRect().top + 'px'
    //현재 보이는 스크린 기준 마우스 위치-현재 보이는 스크린 기준 박스 위치(top)
    oomoo.style.left = e.clientX - container.getBoundingClientRect().left + 'px'
  }
  return (
    <>
      <div class="main">
        <div class="frame">
          <div
            class="content content4"
            id="content4"
            onMouseMove={e => handleMouse(e)}
          >
            <img
              id="oomoo"
              src={require('../assets/oomoo.gif')}
              alt="우무문어"
            />
          </div>
        </div>

        <div className="description ">마우스를 따라다니는 우무 문어</div>
      </div>
    </>
  )
}

export default Dproject
