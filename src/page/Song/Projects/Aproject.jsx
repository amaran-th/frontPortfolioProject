import React, { useState } from 'react'

//local
import './Aproject.css'

const Aproject = () => {
  const [isPaused, setIsPaused] = useState(false)

  const stopAnimation = e => {
    if (!isPaused) {
      document.getElementById('Ani1').style.animationPlayState = 'paused'
    } else document.getElementById('Ani1').style.animationPlayState = 'running'
    setIsPaused(!isPaused)
  }
  return (
    <>
      <div class="main">
        <div class="frame">
          <div class="content content1">
            <svg
              class="hourglass"
              id="Ani1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 206"
              preserveAspectRatio="none"
            >
              <path
                class="middle"
                d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z"
              />
              <path
                class="outer"
                d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z"
              />
            </svg>
          </div>
          <button class="stop" onClick={e => stopAnimation(e)}>
            {isPaused ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="description ">모래시계가 움직이는 로딩화면</div>
      </div>
    </>
  )
}

export default Aproject
