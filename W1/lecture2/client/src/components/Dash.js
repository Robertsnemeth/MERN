import React from 'react'
const Dash = (props) => {
  const {item1, item2, item3} = props;
  return (
    <div className='test'>      
        <h2>Hello world</h2>
        <div>
          <div className="list">
            <ul>
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
          </div>
        <a href="https://www.youtube.com/watch?v=WnW-fl0mNwo&ab_channel=MLB">Favorite Video</a>
        </div>
    </div>
  )
}

export default Dash
