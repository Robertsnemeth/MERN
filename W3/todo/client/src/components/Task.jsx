import React from 'react'

const Task = (props) => {
    const { currentTasks, setCurrentTasks } = props;

    const handleClick = (e) => {
        setCurrentTasks([
            ...currentTasks, {
                ...task,
                completed: true
            }
        ])
    }
  return (
    <div>
        {
            currentTasks.map((tasks, index) => (
                <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <p>{tasks.task}</p>
                    <input type="radio" />
                    <button onClick={(e) => currentTasks.splice(index, 1)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Task