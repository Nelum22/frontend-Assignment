import React from 'react'
import Text1 from './text1'

const one= new URL("../images/one.png", import.meta.url)

function Part1() {
  return (
    <div style={{display:'flex' , gap: '30px'}}>
        <div>
          <Text1/>
       </div>
          
        
         <div>
         <img src= {one} width={400} height={400} ></img>
        </div>        
    </div>
  )
}

export default Part1