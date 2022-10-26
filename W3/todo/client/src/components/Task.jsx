import React from 'react'

const Task = (props) => {
    const { currentTasks, setCurrentTasks } = props;

    const handleCheck = (i) => {
        const newTasks = currentTasks.map((task, index) => {
                if(i === index) {
                    task = {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
        })
        setCurrentTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    }

    const handleDelete = (d) => {
        const filterDelete = currentTasks.filter((task, index) => {
            return index !== d;
        })
        setCurrentTasks(filterDelete);
        localStorage.setItem("tasks", JSON.stringify(filterDelete))
    }
  return (
    <div>
        {
            currentTasks.map((tasks, index) => (
                <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    {
                        tasks.completed ?
                        <p style= {{textDecoration: "line-through"}}>{tasks.task}</p> :
                        <p>{tasks.task}</p>
                        }
                        <input type="checkbox" onChange={(e) => handleCheck(index)} checked={tasks.completed}/>
                    <button onClick={(e) => handleDelete(index)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Task