import React, { useEffect, useState, useRef } from 'react'
import { select, scaleSequential, arc, pie, interpolateCool } from 'd3'
//local
import './Gproject.css'

const Gproject = () => {
  const [barData, setBarData] = useState([10, 25, 50, 80, 120])
  const [pieData, setPieData] = useState([
    { name: 'A회사', value: 20 },
    { name: 'B회사', value: 40 },
    { name: 'C회사', value: 55 },
    { name: 'D회사', value: 10 },
    { name: 'E회사', value: 55 },
  ])

  const barRef = useRef(null)
  const pieRef = useRef(null)

  const angle = d => {
    var a = ((d.startAngle + d.endAngle) * 90) / Math.PI - 90
    return a > 90 ? a - 180 : a
  }
  useEffect(() => {
    var width = 200,
      height = 200,
      outerRadius = Math.min(width, height) / 2,
      innerRadius = outerRadius / 2
    const colorScale = scaleSequential()
      .interpolator(interpolateCool)
      .domain([0, pieData?.length])

    select(barRef.current).select('svg').remove()
    const barSvg = select(barRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .selectAll('rect')
      .data(barData)
      .join('rect')
      .attr('height', value => value)
      .attr('width', value => width / barData.length - 10)
      .attr('x', (value, index) => (width / barData.length) * index)
      .attr('y', value => 200 - value)
      .attr('stroke', 'blue')
      .attr('fill', 'white')

    select(pieRef.current).select('svg').remove()

    const pieSvg = select(pieRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + outerRadius + ',' + outerRadius + ')')
    var arcGenerator = arc().innerRadius(innerRadius).outerRadius(outerRadius)
    var pieGenerator = pie()
      .padAngle(0)
      .value(d => d.value)

    var arcList = pieSvg.selectAll().data(pieGenerator(pieData)).enter()

    arcList
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', (value, index) => colorScale(index))

    arcList
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .style('fill', (value, index) => colorScale(pieData?.length - index))
      .attr('transform', d => {
        const [x, y] = arcGenerator.centroid(d)
        return 'translate(' + x + ',' + y + ')rotate(' + angle(d) + ')'
      })
      .text(d => d.data.name)

    arcList
      .append('text')
      .attr('alignment-baseline', 'middle')
      .attr('text-anchor', 'middle')
      .style('fill', 'white')
      .text('주식')
  }, [barData, pieData])

  return (
    <>
      <div class="main">
        <div class="frame">
          <div
            class="content content7"
            className="flex h-full items-center justify-center p-2 gap-4"
            id="content7"
          >
            <div ref={barRef}></div>
            <div ref={pieRef}></div>
          </div>
        </div>
        <div className="description flex flex-col">
          <div className="h-full flex flex-col items-center justify-center p-2">
            <div className="font-bold">D3 실습</div>
            <div className="h-full flex items-center text-[rgb(197,148,0)] p-4">
              D3을 사용하여 막대 그래프와 원 그래프를 표현해보았다.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gproject
