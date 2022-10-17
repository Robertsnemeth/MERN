import React, {useState} from 'react'

const Form = (props) => {
    const { currentBoxes, setCurrentBoxes} = props;

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleSize = (e) => {
        setSize(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentBoxes([
            ...currentBoxes,{
                color: color,
                size: size +"px"
            }
        ])
        setColor("")
        setSize("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="color">Color: </label>
                <input type="text" value={color} onChange={handleColor} name="color" />
            </div>
            <div>
                <label htmlFor="color">Size: </label>
                <input type="number" value={size} onChange={handleSize} name="size"/>
            </div>
                <button type="submit">Add</button>
        </form>
        <p>{color}</p>
        <p>{size}</p>
    </div>
  )
}

export default Form