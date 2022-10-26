import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';


function App() {

  const [ currentSearch, setCurrentSearch ] = useState("");
  const [ currentId, setCurrentId] = useState("")
  const [ currentData, setCurrentData] = useState()
  const [ error, setError] = useState("These arn't the droids you're looking for.")
  console.log(currentData + "hello")

  return (
    <div className="App">
            <Form currentSearch={currentSearch} setCurrentSearch={setCurrentSearch} currentId={currentId} setCurrentId={setCurrentId}/>
            <Card currentData={currentData} setCurrentData={setCurrentData} currentSearch={currentSearch} setCurrentSearch={setCurrentSearch} currentId={currentId} setCurrentId={setCurrentId} error={error}/>
    </div>
  );
}

export default App;
