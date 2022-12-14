import React, {useState} from 'react'

const Form = (props) => {
    const {currentTasks, setCurrentTasks} = props;

    const [task, setTask] = useState("");

    const handleTask = (e) => {
        setTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task: task,
            completed: false
        }
        setCurrentTasks([...currentTasks, newTask])
        localStorage.setItem("tasks", JSON.stringify([...currentTasks, newTask]))
        setTask("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task">Task: </label>
                <input type="text" onChange={handleTask} value={task} />
                <button type="submit">Add</button>
            </div>
        </form>
        <p>{task}</p>
    </div>
  )
}

export default Form