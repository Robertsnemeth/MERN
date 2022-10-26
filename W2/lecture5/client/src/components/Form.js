import {useState} from 'react'

const Form = ({render, initialValue = 0}) => {
    const [count, setCount] = useState(initialValue)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1)
    }

    return render({count, increment, decrement})
 }
export default Form
