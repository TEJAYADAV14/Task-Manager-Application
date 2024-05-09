import './index.css'
import React, {useState} from 'react'

function Task({task, onEditTask, onDeleteTask}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState({...task})

  const handleEditChange = e => {
    const {name, value} = e.target
    setEditedTask(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleEditSubmit = e => {
    e.preventDefault()
    onEditTask(task.id, editedTask)
    setIsEditing(false)
  }

  return (
    <div className="task">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            className="task-form-input"
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="priority"
            value={editedTask.priority}
            onChange={handleEditChange}
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleEditChange}
          />
          <button type="submit" className="task button">
            Save
          </button>
        </form>
      ) : (
        <>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.dueDate}</p>
          </div>
          <div>
            <button className="task button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button
              className="task button"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Task
