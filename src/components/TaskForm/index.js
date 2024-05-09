import './index.css'

import React, {useState} from 'react'

function TaskForm({onAddTask}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim() || !priority || !dueDate) {
      alert('Please fill in all fields.')
      return
    }
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
    }
    onAddTask(newTask)
    setTitle('')
    setDescription('')
    setPriority('')
    setDueDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        className="task-form-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="task-form-input"
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <select
        className="task-form-select"
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option value="">Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        className="task-form-input"
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button type="submit" className="task-form button">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm
