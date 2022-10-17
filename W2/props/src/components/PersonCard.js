import React, {useState} from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setAge] = useState(age);
  return (
    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {currentAge}</p>
        <p>Hair: {hairColor}</p>
        <button onClick = { () => setAge(currentAge + 1)}>Birthday Button for {firstName}</button>
    </div>
  )
}

export default PersonCard