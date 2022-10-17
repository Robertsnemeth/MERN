import './App.css';
import Form from './components/Form'
import Task from './components/Task'
import { useState} from 'react'

function App() {
  const [ currentTasks, setCurrentTasks ] = useState([])
  return (
    <div className="App">
      <Form currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}/>
      <Task currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}/>
      {JSON.stringify(currentTasks)}
    </div>
  );
}

export default App;
