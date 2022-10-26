import React from 'react'
import Counter from './Form'

const Decrement = () => {
  return (
    <Counter 
    render = {({ count, decrement}) => (
    <div>
        <h2>the count down here is {count}</h2>
        <button onClick={decrement}>Subtract One</button>
    </div>
  )}
/>

  )
}

export default Decrement