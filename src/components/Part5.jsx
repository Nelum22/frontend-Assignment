import React from 'react'
import { Button } from 'react-bootstrap'
const ten= new URL("../images/ten.png", import.meta.url)
const eleven= new URL("../images/eleven.png", import.meta.url)

function Part5() {
  return (
    <div className='Part5'>
        <div><h1>For Professionals</h1>
<h6>Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/>cupidatat non proident, sunt in culpa qui officia des.</h6>
<Button/>
</div>

        <div>
            <div> 
                <img src= {ten} width={350} height={350} ></img>
                <h6>Professional</h6>
                <h4>Docker & Kubernetes Course - <br/>12 Sessions in 1</h4>
            </div>
        </div>

        <div>
            <div>
                 <img src= {eleven} width={350} height={350} ></img>
                 <h6>Professional</h6>
                 <h4>Docker & Kubernetes Course - <br/>12 Sessions in 1</h4>
        </div>
        </div>
    </div>
  )
}

export default Part5