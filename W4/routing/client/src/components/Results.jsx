import React from 'react'
import { Link } from 'react-router-dom'

const Results = (props) => {
  const { currentName } = props;

  return (
    <div>
        <Link to="/">to home</Link>
        <h1>{currentName}</h1>
        <p>Results</p>
    </div>
  )
}

export default Results