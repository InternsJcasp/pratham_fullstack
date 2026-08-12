// let titleSelect = document.getElementsByClassName('title');
// console.log(titleSelect);

// let contentSelect = document.getElementsByClassName('content');

// console.log(contentSelect);

// for (let para of contentSelect) {
//   console.log(para.textContent);
// }

// getElementById
// let headSelect = document.getElementById('heading');
// console.log(headSelect);

// getElementByTagName

// let tagSelector = document.getElementsByTagName('p');
// console.log(tagSelector);

// for (let tags of tagSelector) {
//   console.log(tags);
// }

// // task 1 :

let mainHeaderSelect = document.getElementById('main-header');

console.log(mainHeaderSelect);

// task 2:
let studentCardSelect = document.getElementsByName('student-card');

console.log(studentCardSelect);

let studentNameSelector = document.getElementsByClassName('student-name');
console.log(studentNameSelector);

// task 3:

let studentSelectByName = document.querySelectorAll('.student-name');

studentSelectByName.innerHTML = '<h1>Fool</h1>';

// class List

let main = document.querySelector('#container');
main.classList.add('active');
main.classList.remove('container');
main.classList.toggle('box');

const para = document.createElement('p');
para.textContent = 'hello this paragraph';
main.appendChild(para);

para.style.color = 'red';
para.classList.add('content');

para.remove();

//for understanding
// replaceWith
// const oldElement = document.querySelector("#old");

// const newElement = document.createElement("h2");

// newElement.textContent = "New Heading";

// oldElement.replaceWith(newElement);

// cloneNode
const original = document.querySelector('.card');

const copy = original.cloneNode(true);


