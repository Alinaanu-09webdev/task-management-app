# Manual Changes After AI-Generated Code

The AI assistant produced a solid first draft of every file. After reviewing and
running the app, the following manual improvements were made.

## Validation

- Tightened the "empty task" check to use `text.trim()` instead of a plain
  truthiness check, so a task made only of spaces is correctly rejected in both
  `TaskForm` and the inline edit form in `TaskItem`.
- Added an inline error message under the input instead of a browser `alert()`,
  which the AI's first draft used — it felt jarring and blocked the UI.
- Made the error message clear itself automatically as soon as the user starts
  typing again, instead of staying on screen after the mistake is fixed.

## Local Storage

- Wrapped the `localStorage.getItem` / `JSON.parse` call in a `try/catch` so a
  corrupted or manually edited storage value doesn't crash the app on load — the
  original AI draft assumed the stored value would always be valid JSON.
- Confirmed the `useEffect` that writes to `localStorage` runs on every change to
  `tasks`, including edits and toggles, not just on add/delete.

## Component organization

- Split what was originally one large `TaskItem` block (view + edit mixed together)
  into a clearer view/edit conditional render, so the JSX is easier to scan.
- Moved the "disable Edit while a task is completed" rule into the `TaskItem`
  component itself (via a `disabled` prop on the button) rather than hiding the
  button conditionally in the parent, keeping the toggle logic in one place.

## Styling and responsiveness

- Replaced the AI's initial generic blue/gray palette with a custom "daily ledger"
  design system (paper background, ink and stamp-red accent colors, a serif display
  font paired with a monospace font for the stats) defined as CSS variables at the
  top of `App.css`.
- Added the stamped "Done" badge on completed tasks as a distinguishing visual
  detail instead of relying on strikethrough text alone.
- Fixed a spacing bug where the delete button was too close to the edit button on
  narrow screens, causing accidental taps; added a responsive breakpoint that
  stacks the input and button vertically below 520px.
- Added visible keyboard focus styles on the input and buttons, which the original
  draft was missing.
- Respected `prefers-reduced-motion` by disabling transitions for users who have
  that preference set.

## Code quality

- Added comments explaining the purpose of each function in `App.jsx`, especially
  the Local Storage load/save logic, for future readability.
- Renamed a few AI-suggested variable names (e.g., `data` → `tasks`, `val` → `text`)
  for clarity throughout the codebase.
- Removed an unused `useMemo` import that the AI's first draft included but never
  used for the stats calculation, since the arrays involved are small enough that
  memoization wasn't necessary.
