import TaskItem from './TaskItem.jsx'

/**
 * TaskList
 * Renders the list of tasks, or an empty-state message when there are none.
 */
function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list__empty">
        <p className="task-list__empty-title">The ledger is empty.</p>
        <p className="task-list__empty-subtitle">Add your first entry above to get started.</p>
      </div>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  )
}

export default TaskList
