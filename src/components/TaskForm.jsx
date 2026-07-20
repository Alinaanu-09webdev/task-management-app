import { useState } from 'react'

/**
 * TaskForm
 * Renders the "new entry" line where a user types a task and adds it.
 * Prevents empty (or whitespace-only) tasks from being submitted.
 */
function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmed = text.trim()

    // Guard against empty submissions
    if (!trimmed) {
      setError(true)
      return
    }

    onAddTask(trimmed)
    setText('')
    setError(false)
  }

  const handleChange = (e) => {
    setText(e.target.value)
    if (error) setError(false) // clear error as soon as the user starts typing again
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="task-form__field">
        <input
          type="text"
          className={`task-form__input ${error ? 'task-form__input--error' : ''}`}
          placeholder="Write a new entry…"
          value={text}
          onChange={handleChange}
          aria-label="New task description"
          aria-invalid={error}
        />
        <button type="submit" className="task-form__submit">
          Add entry
        </button>
      </div>
      {error && <p className="task-form__error">An entry can't be blank. Write something first.</p>}
    </form>
  )
}

export default TaskForm
