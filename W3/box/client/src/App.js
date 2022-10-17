import './App.css';
import Form from "./components/Form"
import Box from "./components/Box"
import React, {useState} from 'react'

function App() {

  const [currentBoxes, setCurrentBoxes] = useState([])

  return (
    <div className="App">
      <Form currentBoxes = {currentBoxes} setCurrentBoxes = {setCurrentBoxes}/>
      <Box currentBoxes = {currentBoxes}/>
    </div>
  );
}

export default App;
