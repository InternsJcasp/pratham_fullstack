import {
  getState,
  subscribe,
  setSearchQuery,
  setFilterStatus,
  toggleDarkMode,
  clearCompleted,
  getCompletionPercentage,
} from "./state/store.js";
import { renderTodoForm } from "./components/todoForm.js";
import { renderTodoList } from "./components/todoList.js";

const app = document.getElementById("app");

function renderApp() {
  const state = getState();

  // Toggle dark mode class on root body
  document.body.classList.toggle("dark-theme", state.darkMode);

  app.innerHTML = "";

  // Header & Dark Mode
  const header = document.createElement("header");
  header.innerHTML = `
    <h1>To-Do App</h1>
    <button id="theme-btn">${state.darkMode ? "☀️ Light" : "🌙 Dark"}</button>
  `;
  header.querySelector("#theme-btn").addEventListener("click", toggleDarkMode);

  // Stats / Completion Percentage
  const stats = document.createElement("div");
  stats.className = "completion-stats";
  stats.innerHTML = `<p>Completed: <strong>${getCompletionPercentage()}%</strong></p>`;

  // Controls (Search & Status Filters)
  const controls = document.createElement("div");
  controls.className = "controls";
  controls.innerHTML = `
    <input 
      type="text" 
      id="search-input" 
      placeholder="Search tasks..." 
      value="${state.searchQuery}"
    />
    <select id="filter-status">
      <option value="all" ${state.filterStatus === "all" ? "selected" : ""}>All</option>
      <option value="active" ${state.filterStatus === "active" ? "selected" : ""}>Active</option>
      <option value="completed" ${state.filterStatus === "completed" ? "selected" : ""}>Completed</option>
    </select>
    <button id="clear-completed-btn">Clear Completed</button>
  `;

  // Control Listeners
  const searchInput = controls.querySelector("#search-input");
  searchInput.addEventListener("input", (e) => setSearchQuery(e.target.value));

  const filterSelect = controls.querySelector("#filter-status");
  filterSelect.addEventListener("change", (e) =>
    setFilterStatus(e.target.value),
  );

  const clearBtn = controls.querySelector("#clear-completed-btn");
  clearBtn.addEventListener("click", clearCompleted);

  // Assemble App
  app.appendChild(header);
  app.appendChild(stats);
  app.appendChild(renderTodoForm());
  app.appendChild(controls);
  app.appendChild(renderTodoList(state));

  // Maintain search input focus across renders
  if (document.activeElement.id === "search-input") {
    const newSearchInput = app.querySelector("#search-input");
    newSearchInput.focus();
    newSearchInput.setSelectionRange(
      newSearchInput.value.length,
      newSearchInput.value.length,
    );
  }
}
    
// Initial Render & Subscribe to Store Changes
subscribe(renderApp);
renderApp();
