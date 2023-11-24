import React from 'react'

const fifteen= new URL("../images/fifteen.png", import.meta.url)

function Part8() {
  return (
    <div className='Part8'>
       <div> <img src= {fifteen} width={500} height={500} ></img></div>

        <div style={{padding:'5%'}}>
            <h2>No more hassle, Pay as you go</h2>
            <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
            sed do eiusmod tempor incididunt ut labore et dolore<br/> 
            magna aliqua. Ut enim ad minim veniam, quis nostru.
          </h6>
          <h6>
            Sectetur adipiscing elit, sed do eiusmod tempor<br/> 
            incididunt ut labore et dolore magna aliqua. Ut enim ad<br/>
            minim veniam, quis nostru.
            </h6>

        </div>
    </div>
  )
}

export default Part8