import { deleteTodo, toggleTodo, editTodo } from "../state/store.js";
import { formatDate, isOverdue } from "../utils/helper.js";

export function renderTodoItem(todo) {
  const li = document.createElement("li");

  // Highlight incomplete, overdue tasks
  const overdueClass =
    !todo.completed && isOverdue(todo.dueDate) ? "overdue" : "";

  li.className =
    `todo-item priority-${todo.priority.toLowerCase()} ${todo.completed ? "completed" : ""} ${overdueClass}`.trim();
  li.dataset.id = todo.id;

  li.innerHTML = `
    <div class="todo-main">
      <input type="checkbox" class="toggle-btn" ${todo.completed ? "checked" : ""}>
      <span class="todo-title">${todo.title}</span>
      <span class="badge priority">${todo.priority}</span>
      <span class="badge category">${todo.category}</span>
      ${todo.dueDate ? `<span class="due-date">📅 ${formatDate(todo.dueDate)}</span>` : ""}
    </div>
    <div class="todo-actions">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Checkbox Toggle
  li.querySelector(".toggle-btn").addEventListener("change", () => {
    toggleTodo(todo.id);
  });

  // Delete Action
  li.querySelector(".delete-btn").addEventListener("click", () => {
    deleteTodo(todo.id);
  });

  // Edit Action (Prompt-based)
  li.querySelector(".edit-btn").addEventListener("click", () => {
    const newTitle = prompt("Edit task title:", todo.title);
    if (newTitle && newTitle.trim() !== "") {
      editTodo(todo.id, { title: newTitle.trim() });
    }
  });

  return li;
}
