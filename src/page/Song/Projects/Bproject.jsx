import React from 'react'

//local
import './project.css'
import './Bproject.css'

const Bproject = () => {
  return (
    <>
      <div class="main">
        <div class="content">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="description">
          9개의 정육면체 객체를 만들고, 중앙의 객체가 떠올랐다 가라앉는동안
          나머지 8개의 객체가 각자 <strong>딜레이</strong>를 가지고 낮게
          떠올랐다 가라앉는 로딩 애니메이션
        </div>
      </div>
    </>
  )
}

export default Bproject
