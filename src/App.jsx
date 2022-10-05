import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from 'shared/Header'

const Home = lazy(() => import('page/Home/Home'))
const Jang = lazy(() => import('page/Jang/Jang'))
const Kim = lazy(() => import('page/Kim/Kim'))
const Lee = lazy(() => import('page/Lee/Lee'))
const Song = lazy(() => import('page/Song/Song'))
const Yim = lazy(() => import('page/Yim/Yim'))

function App() {
  return (
    <div className="">
      <Header />
      <>
        <Suspense fallback={<p> 로딩중... </p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Jang/*" element={<Jang />} />
            <Route path="/Kim" element={<Kim />} />
            <Route path="/Lee" element={<Lee />} />
            <Route path="/Song" element={<Song />} />
            <Route path="/Yim" element={<Yim />} />
          </Routes>
        </Suspense>
      </>
    </div>
  )
}

export default App
