// Create element
const newHead = document.createElement('h2');
// Add id
newHead.id = 'task-title';
// Add text node
newHead.appendChild(document.createTextNode('Task Lists'));

//get old heading
const oldHead = document.querySelector('#task-title');
// parent
const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHead, oldHead);

// Remove element
const lis = document.querySelectorAll('li');

const list = document.querySelector('ul');

// Remove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);

// Classes & Attr
const firstLi = document.querySelector('li:first-child');

// console.log(firstLi.children[0]);
const link = firstLi.children[0];
let val;
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');

val = link;

// console.log(newHead);
console.log(val);
