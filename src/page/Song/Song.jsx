import React from 'react'

//local
import './song.css'
import Aproject from './Projects/Aproject'
import Bproject from './Projects/Bproject'

const list = [<Aproject />, <Bproject />]
const Song = () => {
  return (
    <>
      <div class="rootDiv">
        <div class="mainDiv">
          {list.map((project, index) => (
            <div key={index} class="project">
              <p class="title">
                <p></p>
                <span>{index + 1}주차</span>
              </p>
              {project}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Song
