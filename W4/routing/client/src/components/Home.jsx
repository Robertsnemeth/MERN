import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
  return (
    <div style={{
        color: "red",
        display:"flex",
        flexDirection: "column"
    }}>
        <p>Home Component</p>
        <Link to="/about">to about</Link>
        <Link to="/survey">to survey</Link>
        <Link to="/location/Seattle/aqua/grey">to Seattle</Link>
    </div>
  )
}

export default Home