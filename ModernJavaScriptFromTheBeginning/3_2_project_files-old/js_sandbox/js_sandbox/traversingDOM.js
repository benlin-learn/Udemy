let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// console.log(list);
// console.log(listItem);

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1].nodeType;
// nodeType:
// 1 - Element
// 2 - Attribute(deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// val = list.children.namedItem('123');
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;
// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
