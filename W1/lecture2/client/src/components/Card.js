import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    const {info1, info2, info3} = props;
    const {card} = styles
  return (
    <div className={card}>
        <p>Name: {info1}</p>
        <p>Age: {info2}</p>
        <p>Hair Color: {info3}</p>
    </div>
  )
}

export default Card