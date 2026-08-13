const todoList = document.querySelector('.todolist');

const searchForm = document.querySelector('#search-todo');
const searchInput = document.querySelector('#search');
const sortButton = document.querySelector('#sort');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

let currentTodos = [...todos];
let sortAscending = true;

function renderTodos(todoArray) {
  todoList.innerHTML = '';

  todoArray.forEach((todo) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <div class="todos">
        <h3>Title: ${todo.title}</h3>
        <p>Description: ${todo.description}</p>
        <small>Created: ${todo.createdAt}</small>

        <div class="btns">
          <button class="edit-btn" data-id="${todo.id}">
            Edit
          </button>

          <button class="delete-btn" data-id="${todo.id}">
            Delete
          </button>
        </div>
      </div>
    `;

    todoList.appendChild(li);
  });

  addEditEvents();
  addDeleteEvents();
}

// Edit functionality
function addEditEvents() {
  const editButtons = document.querySelectorAll('.edit-btn');

  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const todoId = button.dataset.id;

      localStorage.setItem('editTodoId', todoId);

      window.location.href = './form.html';
    });
  });
}

// Delete functionality
function addDeleteEvents() {
  const deleteButtons = document.querySelectorAll('.delete-btn');

  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const todoId = button.dataset.id;

      const updatedTodos = todos.filter((todo) => {
        return todo.id !== todoId;
      });

      localStorage.setItem('todos', JSON.stringify(updatedTodos));

      // Update current data
      currentTodos = updatedTodos;

      renderTodos(currentTodos);
    });
  });
}

// Search functionality
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchValue = searchInput.value.trim().toLowerCase();

  currentTodos = todos.filter((todo) => {
    return (
      todo.title.toLowerCase().includes(searchValue) ||
      todo.description.toLowerCase().includes(searchValue)
    );
  });

  renderTodos(currentTodos);
});

