import React from 'react'
import { Button } from 'react-bootstrap'
const twelve= new URL("../images/twelve.png", import.meta.url)

function Part6() {
  return (
    <div className='Part6'>
        <div><img src= {twelve} width={350} height={350} ></img></div>
        <div className='Part6-2'><h2>Career Centerd</h2>
        <h6>Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/>
        cupidatat non proident, sunt in culpa qui officia des.</h6>
        <Button/>
        </div>
      
    </div>
  )
}

export default Part6