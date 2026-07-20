import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'

const STORAGE_KEY = 'ledger.tasks'

/**
 * Reads any previously saved tasks from Local Storage.
 * Falls back to an empty array if nothing is stored yet, or the data is corrupt.
 */
function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    console.warn('Could not read saved tasks, starting fresh.', err)
    return []
  }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks)

  // Persist tasks to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // --- Task operations -----------------------------------------------

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const editTask = (id, newText) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, text: newText } : task)))
  }

  // --- Derived stats ----------------------------------------------------

  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const pending = total - completed
  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="page">
      <div className="ledger">
        <header className="ledger__header">
          <p className="ledger__eyebrow">Daily Ledger</p>
          <h1 className="ledger__title">Task Management</h1>
          <p className="ledger__date">{today}</p>
        </header>

        <div className="ledger__stats" role="status">
          <div className="stat">
            <span className="stat__value">{total}</span>
            <span className="stat__label">Total</span>
          </div>
          <div className="stat">
            <span className="stat__value">{completed}</span>
            <span className="stat__label">Completed</span>
          </div>
          <div className="stat">
            <span className="stat__value">{pending}</span>
            <span className="stat__label">Pending</span>
          </div>
        </div>

        <TaskForm onAddTask={addTask} />

        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
      </div>
    </div>
  )
}

export default App
