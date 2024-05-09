import './index.css'
import React from 'react'
import Task from '../Task'

function TaskList({tasks, onEditTask, onDeleteTask}) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList
