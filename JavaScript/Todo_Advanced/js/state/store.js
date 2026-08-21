import { loadTodos, saveTodos } from "../service/storage.js";

let state = {
  todos: loadTodos(),
  filterStatus: "all",
  searchQuery: "",
  darkMode: false,
  sortByDate: "none",
};

let listeners = [];

function notify() {
  saveTodos(state.todos);
  listeners.forEach((listener) => listener(state));
}

export function getState() {
  return state;
}

export function subscribe(listener) {
  listeners.push(listener);
}

// Add Task
export function addTodo(
  title,
  category = "General",
  dueDate = "",
  priority = "Medium",
) {
  const newTodo = {
    id: Date.now(),
    title: title,
    completed: false,
    category: category,
    dueDate: dueDate,
    priority: priority,
  };
  state.todos.push(newTodo);
  notify();
}

// Edit Task
export function editTodo(id, updatedFields) {
  state.todos = state.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, ...updatedFields };
    }
    return todo;
  });
  notify();
}

// Delete Task
export function deleteTodo(id) {
  state.todos = state.todos.filter((todo) => todo.id !== id);
  notify();
}

// Mark Complete / Toggle
export function toggleTodo(id) {
  state.todos = state.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  notify();
}

// Search Tasks
export function setSearchQuery(query) {
  state.searchQuery = query;
  notify();
}

// Filter by Status
export function setFilterStatus(status) {
  state.filterStatus = status;
  notify();
}

// Sort by Date
export function setSortByDate(order) {
  state.sortByDate = order;
  notify();
}

// Dark Mode Toggle
export function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  notify();
}

// Clear Completed Tasks
export function clearCompleted() {
  state.todos = state.todos.filter((todo) => !todo.completed);
  notify();
}

// Task Completion Percentage Calculation
export function getCompletionPercentage() {
  if (state.todos.length === 0) return 0;
  const completedCount = state.todos.filter((todo) => todo.completed).length;
  return Math.round((completedCount / state.todos.length) * 100);
}
