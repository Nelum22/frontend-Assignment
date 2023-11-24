import React from 'react'

const sixteen= new URL("../images/sixteen.png", import.meta.url)

function Part9() {
  return (
    <div className='Part9'>
        <div>
            <h2>
            Real Stories from Real Customers
            Get inspired by these stories.
            </h2>
    
        <img src= {sixteen} width={50} height={50} ></img>   
        To quickly start my startup<br/> landing page design, I was<br/> 
        looking for a landing page UI Kit. <br/>
        Peepsy is one of the best landing<br/> page UI kit I have come across. <br/>
        It’s so flexible, well organised and <br/>easily editable.
        <h4>Floyd Miles</h4> <h6 style={{color:'GrayText'}}>Vice President, GoPro</h6>

    

        </div>
        
        <div>
        <img src= {sixteen} width={50} height={50} ></img> 
         <h6>
         I used Peepsy and created a landing page for<br/> my startup within a week. The Peepsy UI Kit<br/> 
         is simple and highly intuitive, so anyone can<br/> use it.
         <h4>Jane Cooper</h4>
         <h6 style={{color:'GrayText'}}>CEO, Airbnb</h6>
         </h6>
        </div>
    </div>
  )
}

export default Part9