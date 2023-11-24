import React from 'react'

const two= new URL("../images/two.png", import.meta.url)
const three= new URL("../images/three.png", import.meta.url)
const four= new URL("../images/four.png", import.meta.url)
const five= new URL("../images/five.png", import.meta.url)

function Part2() {
  return (
    <div className='Part2'>
        <div> <img src= {two} width={50} height={50} ></img></div>
        <div> <img src= {three} width={50} height={50} ></img></div>
        <div> <img src= {four} width={50} height={50} ></img></div>
        <div> <img src= {five} width={50} height={50} ></img></div>
    </div>
  )
}

export default Part2
