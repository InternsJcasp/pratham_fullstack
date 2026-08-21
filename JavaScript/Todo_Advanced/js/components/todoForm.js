import { addTodo } from "../state/store.js";

export function renderTodoForm() {
  const form = document.createElement("form");
  form.className = "todo-form";

  const today = new Date().toISOString().split("T")[0];

  form.innerHTML = `
    <input 
      type="text" 
      id="task-title" 
      placeholder="Enter task name..." 
      required 
    />
 
    <select id="task-category">
      <option value="General">General</option>
      <option value="Work">Work</option>
      <option value="Personal">Personal</option>
    </select>

    <select id="task-priority">
      <option value="Low">Low Priority</option>
      <option value="Medium" selected>Medium Priority</option>
      <option value="High">High Priority</option>
    </select>

    <input 
      type="date" 
      id="task-due-date" 
      min="${today}"
    />

    <button type="submit">Add Task</button>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleInput = form.querySelector("#task-title");
    const categorySelect = form.querySelector("#task-category");
    const prioritySelect = form.querySelector("#task-priority");
    const dueDateInput = form.querySelector("#task-due-date");

    const title = titleInput.value.trim();
    const category = categorySelect.value;
    const priority = prioritySelect.value;
    const dueDate = dueDateInput.value;

    if (title !== "") {
      addTodo(title, category, dueDate, priority);
      form.reset();
    }
  });

  return form;
}
