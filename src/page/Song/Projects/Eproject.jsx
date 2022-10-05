import React, { useEffect, useState } from 'react'

//local
//import './Eproject.css'

const Eproject = () => {
  return (
    <>
      <div class="main">
        <div class="frame">
          <div class="content content5" id="content5"></div>
        </div>

        <div className="description flex flex-col">
          <div className="h-full flex flex-col items-center justify-center p-2">
            <div className="font-bold">
              페이지 좌측의 레코드판처럼 회전하는 네비게이션
            </div>
            <div className="h-full flex items-center text-[rgb(197,148,0)] p-4">
              목차가 선택될 때마다 각 목차를 원판의 중심을 중심으로 일정
              각도만큼 회전하게 하였다.
              <br />
              목차 전환 후 원판에 보여질 목차가 바뀐다.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Eproject
