import React from 'react'
import { Button } from 'react-bootstrap'

const thirteenth= new URL("../images/thirteenth.png", import.meta.url)
const fourteen= new URL("../images/fourteen.png", import.meta.url)

function Part7() {
  return (
    <div className='Part7'>
        <div>
        Duis aute irure dolor in reprehenderit in voluptate velit esse<br/>
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/>
         cupidatat non proident, sunt in culpa qui officia des.
         <Button/>
        </div>
        <div>
        <img src= {thirteenth} width={350} height={350} ></img>
        <h6>Professional</h6>
        <h4>Docker & Kubernetes Course - <br/>12 Sessions in 1</h4>
        </div>
        <div>
        <img src= {fourteen} width={350} height={350} ></img>
        <h6>Professional</h6>
        <h4>Docker & Kubernetes Course - <br/>12 Sessions in 1</h4>
        </div>
    </div>
  )
}

export default Part7