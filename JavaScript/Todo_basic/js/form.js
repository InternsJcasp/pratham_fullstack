const todos = JSON.parse(localStorage.getItem('todos')) || [];

const form = document.querySelector('#todo-form');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const error = document.querySelector('#error');

const editTodoId = localStorage.getItem('editTodoId');

if (editTodoId) {
  const todo = todos.find((todo) => todo.id === editTodoId);

  if (todo) {
    titleInput.value = todo.title;
    descriptionInput.value = todo.description;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!title || !description) {
    error.textContent = 'All fields are required';
    return;
  }

  error.textContent = '';

  // EDIT MODE
  if (editTodoId) {
    const todo = todos.find((todo) => todo.id === editTodoId);

    if (todo) {
      todo.title = title;
      todo.description = description;

      const now = new Date();

      todo.updatedAt = now.toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      localStorage.setItem('todos', JSON.stringify(todos));

      localStorage.removeItem('editTodoId');

      window.location.href = './index.html';
    }

    return;
  }

  // ADD MODE
  const id = Math.random().toString(36).substring(2);

  const now = new Date();

  const createdAt = now.toLocaleString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const todo = {
    id,
    title,
    description,
    completed: false,
    createdAt,
    updatedAt: createdAt,
  };

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));
  
  form.reset(); 

  window.location.href = './index.html';
});
