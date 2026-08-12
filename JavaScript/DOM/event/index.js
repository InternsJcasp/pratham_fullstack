const main = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const para = document.createElement('p');
  para.textContent = 'Welcome to JCASP';
  para.style.color = 'red';
  para.style.fontFamily = 'sans-serif';
  para.style.fontWeight = '800';
  main.appendChild(para);
});
//  toggle Dark and light theme

const body = document.querySelector('body');
const themeButton = document.querySelector('.dark');

themeButton.addEventListener('click', () => {
  if (body.style.backgroundColor === 'black') {
    body.style.backgroundColor = '';
  } else {
    body.style.backgroundColor = 'black';
  }
});

// Input Event

const input = document.querySelector('#username');
const para = document.querySelector('#output');

input.addEventListener('input', () => {
  output.textContent = input.value;
});

//  form submission

const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log('Form is submitted');
});

// event delegation
// Instead of adding an event listener to every button
// Child elements ke individual listeners lagane ke bajay parent par ek listener lagana = Event Delegation.

const list = document.querySelector('#list');

list.addEventListener('click', (event) => {
  if (event.target.matches('.delete-btn')) {
    console.log('deleted clicked');
  }
});
