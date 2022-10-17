import React from 'react'

const Box = (props) => {
    const { currentBoxes } = props;

    return (
        <div>
            {
            currentBoxes.map((box, index) => (
                <div key={index} style={{
                    backgroundColor: box.color,
                    width: box.size,
                    height: box.size,
                    display: "flex",
                    justifyContent: "center"
                }}>
                </div>
            ))
            }
        </div>
        )
    }


export default Box