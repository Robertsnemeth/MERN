import React from 'react'
import { useParams } from 'react-router';

const Location = (props) => {

    const {currentName} = props;
    const { city, text, background } = useParams();

  return (
    <div
    style={{
        color: text,
        background:background
    }}>Welcome to {city} {currentName}</div>
  )
}

export default Location