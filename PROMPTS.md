# Prompts Used

This file lists the prompts that could realistically have been used, step by step, to
build this project with an AI development assistant.

## 1. Project setup

> "Set up a new React project using Vite. I want a `src/components` folder for
> reusable components, and I'll be building a task management app. Use functional
> components and hooks only — no class components."

## 2. Planning the component structure

> "I need three components for a to-do app: `TaskForm` for adding new tasks,
> `TaskList` for rendering the list, and `TaskItem` for a single task row. Show me
> how the props should flow between them and `App.jsx`, which will hold the state."

## 3. Building the task form with validation

> "Write a `TaskForm` component with a text input and an 'Add' button. It should call
> an `onAddTask` prop with the trimmed text when submitted, and it must not allow
> empty or whitespace-only tasks — show an inline error message instead of adding
> them."

## 4. Building the task list and empty state

> "Write a `TaskList` component that receives an array of tasks and renders a
> `TaskItem` for each one. If the array is empty, show a friendly empty-state message
> instead of an empty list."

## 5. Building the task item with edit/delete/toggle

> "Write a `TaskItem` component that shows the task text and a checkbox-style button
> to toggle completion. Add 'Edit' and 'Delete' buttons. When 'Edit' is clicked, turn
> the text into an editable input with 'Save' and 'Cancel' actions, and prevent
> saving an empty value."

## 6. Wiring up state in App.jsx

> "In `App.jsx`, create the task state with `useState` and write `addTask`,
> `toggleTask`, `deleteTask`, and `editTask` functions using functional state
> updates. Pass them down to `TaskForm` and `TaskList`. Also compute the total number
> of tasks and the number of completed tasks to display in a stats section."

## 7. Adding Local Storage persistence

> "Make the task list persist across page refreshes using `localStorage`. Load the
> saved tasks when the app first mounts, and save the tasks any time they change,
> using `useEffect`. Handle the case where `localStorage` is empty or the data is
> corrupted."

## 8. Styling the app

> "Style the whole app with plain CSS — no Tailwind or component libraries. I'd like
> a clean, professional 'daily ledger' look: a paper-like background, a serif
> display font for the title, a monospace font for the stats, and a distinct visual
> treatment for completed tasks, like a stamped 'Done' mark. Make sure it's fully
> responsive down to mobile."

## 9. Polish and edge cases

> "Review the app for edge cases: what happens if someone tries to edit a task while
> it's already completed, or submits the edit form with only spaces? Also double
> check keyboard support — Enter to save an edit, Escape to cancel."

## 10. Documentation

> "Write a README.md with the project description, features, tech stack, install and
> run instructions, and folder structure. Also create a PROMPTS.md listing the
> prompts used to build this step by step, and a MANUAL_CHANGES.md listing realistic
> manual improvements made after the AI-generated code."
