import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const About = (props) => {

  return (
    <div style={{
        color: "blue"
    }}> 
        <p>About Component</p>
        <Link to="/">to home</Link>
    </div>
  )
}

export default About