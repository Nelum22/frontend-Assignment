import React from 'react'

const six= new URL("../images/six.png", import.meta.url)
const seven= new URL("../images/seven.png", import.meta.url)
const eight= new URL("../images/eight.png", import.meta.url)

function Part4() {
  return (
    <div style={{display:'flex', gap:'50px' , padding:'5%'}}>
        <div> <img src= {six} width={350} height={350} ></img>
        <h6>Professional</h6>
        <h4>Docker & Kubernetes Course - <br/>12 Sessions in 1</h4>
        </div>
        
        <div> <img src= {seven} width={350} height={350} ></img>
        <h6>Professional</h6>
        <h4>Docker & Kubernetes Course - <br/>12 Sessions in 1</h4>
        </div>
        

        <div> <img src= {eight} width={350} height={350} ></img>
        <h6>Professional</h6>
        <h4>Docker & Kubernetes Course - <br/>12 Sessions in 1</h4>
        </div>
      
    </div>
  )
}

export default Part4