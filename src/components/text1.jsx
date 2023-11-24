import React from 'react'
import { Button } from 'react-bootstrap'

function Text1() {
  return (
    <div>
        <div >
        <h1>I help you to<br/> build your skills</h1>
        <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse 
            <br/>cillum dolore eu fugiat nulla pariatur.</h5>
        </div>

        <div style={{display: 'flex' , gap: '70px'}}>
            <div>
                <Button>Explore Courses</Button>

            </div>

            <div> 
                <Button> Watch Video</Button>

            </div>

        </div>
        </div>

       
  )
}

export default Text1