import { useState } from 'react'

/**
 * TaskItem
 * Renders a single task as a ledger line. Supports toggling completion,
 * inline editing, and deletion.
 */
function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(task.text)
  const [error, setError] = useState(false)

  const startEdit = () => {
    setDraft(task.text)
    setIsEditing(true)
    setError(false)
  }

  const cancelEdit = () => {
    setIsEditing(false)
    setDraft(task.text)
    setError(false)
  }

  const saveEdit = () => {
    const trimmed = draft.trim()
    if (!trimmed) {
      setError(true)
      return
    }
    onEdit(task.id, trimmed)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') saveEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  return (
    <li className={`task-item ${task.completed ? 'task-item--done' : ''}`}>
      <button
        type="button"
        className="task-item__check"
        onClick={() => onToggle(task.id)}
        aria-pressed={task.completed}
        aria-label={task.completed ? 'Mark as pending' : 'Mark as completed'}
      >
        {task.completed && (
          <svg viewBox="0 0 16 16" className="task-item__check-icon" aria-hidden="true">
            <path
              d="M3 8.5L6.2 11.5L13 4"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <div className="task-item__body">
        {isEditing ? (
          <>
            <input
              type="text"
              className={`task-item__edit-input ${error ? 'task-item__edit-input--error' : ''}`}
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value)
                if (error) setError(false)
              }}
              onKeyDown={handleKeyDown}
              autoFocus
              aria-label="Edit task description"
            />
            {error && <p className="task-item__error">An entry can't be blank.</p>}
          </>
        ) : (
          <span className="task-item__text">{task.text}</span>
        )}

        {task.completed && !isEditing && <span className="task-item__stamp">Done</span>}
      </div>

      <div className="task-item__actions">
        {isEditing ? (
          <>
            <button type="button" className="task-item__action task-item__action--save" onClick={saveEdit}>
              Save
            </button>
            <button type="button" className="task-item__action" onClick={cancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" className="task-item__action" onClick={startEdit} disabled={task.completed}>
              Edit
            </button>
            <button
              type="button"
              className="task-item__action task-item__action--delete"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  )
}

export default TaskItem
