import React from 'react'
import Counter from './Form'

const Increment = () => {
  return (
        <Counter
        render = {({ count, increment}) => (
            <div>
                <h2>The count is currenty {count}</h2>
                <button onClick={increment}>Add One</button>
            </div>
        )}
        />
  )
}

export default Increment