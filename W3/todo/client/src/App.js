import './App.css';
import Form from './components/Form'
import Task from './components/Task'
import { useState, useEffect } from 'react'

function App() {
  const [ currentTasks, setCurrentTasks ] = useState([])

  const getTasks = JSON.parse(localStorage.getItem("tasks"))

  useEffect(() => {
    if(getTasks === null) {
      setCurrentTasks([])
    } else {
      setCurrentTasks(getTasks)
    }
}, []);

  return (
    <div className="App">
      <Form currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}/>
      <Task currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}/>
      {JSON.stringify(currentTasks)}
    </div>
  );
}

export default App;
