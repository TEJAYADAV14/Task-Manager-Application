import {useState} from 'react'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = newTask => {
    setTasks([...tasks, newTask])
  }

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? {...task, ...updatedTask} : task,
    )
    setTasks(updatedTasks)
  }

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <div className="app-container">
      <h1 className="header">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />
    </div>
  )
}

export default App
