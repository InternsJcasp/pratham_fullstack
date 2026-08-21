import { renderTodoItem } from "./todoItem.js";

export function renderTodoList(state) {
  const listContainer = document.createElement("ul");
  listContainer.className = "todo-list";

  // 1. Filter and Search logic
  let filteredTodos = state.todos.filter((todo) => {
    const matchesStatus =
      state.filterStatus === "all" ||
      (state.filterStatus === "active" && !todo.completed) ||
      (state.filterStatus === "completed" && todo.completed);

    const matchesSearch = todo.title
      .toLowerCase()
      .includes(state.searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  // 2. Sort Logic by Date
  if (state.sortByDate !== "none") {
    filteredTodos.sort((a, b) => {
      // Push tasks without due dates to the bottom
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;

      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();

      return state.sortByDate === "asc" ? dateA - dateB : dateB - dateA;
    });
  }

  // 3. Empty State
  if (filteredTodos.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-msg";
    emptyMsg.textContent = "No tasks found.";
    return emptyMsg;
  }

  // 4. Append Task Items
  filteredTodos.forEach((todo) => {
    const todoElement = renderTodoItem(todo);
    listContainer.appendChild(todoElement);
  });

  return listContainer;
}
