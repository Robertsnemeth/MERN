import React, { useContext } from 'react'
import Context from './../contexts/Context'


const Nav = () => {
    const context = useContext(Context);

    const {name} = context;

  return (
    <div style ={{
        backgroundColor: "purple",
        textAlign: "end",
        height: "100px",
        padding: "10px",
        fontSize: "3rem",
        marginBottom: "10px"
    }}><p>Hello, {name}!</p></div>
  )
}

export default Nav