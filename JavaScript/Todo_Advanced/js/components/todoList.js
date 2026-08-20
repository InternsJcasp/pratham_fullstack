import { renderTodoItem } from "./todoItem.js";

export function renderTodoList(state) {
  const listContainer = document.createElement("ul");
  listContainer.className = "todo-list";

  // Filter and Search logic
  const filteredTodos = state.todos.filter((todo) => {
    // 1. Status Filter
    const matchesStatus =
      state.filterStatus === "all" ||
      (state.filterStatus === "active" && !todo.completed) ||
      (state.filterStatus === "completed" && todo.completed);

    // 2. Search Query
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(state.searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  // Empty State
  if (filteredTodos.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-msg";
    emptyMsg.textContent = "No tasks found.";
    return emptyMsg;
  }
  // Append Task Items
  filteredTodos.forEach((todo) => {
    const todoElement = renderTodoItem(todo);
    listContainer.appendChild(todoElement);
  });

  return listContainer;
}
