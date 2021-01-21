const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const ul = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// DOM Load event
document.addEventListener('DOMContentLoaded', getTasks);

// Add task event
form.addEventListener('submit', addTask);
// Remove task event
ul.addEventListener('click', removeTask);
// Clear task event
clearBtn.addEventListener('click', clearTasks);
// filter event
filter.addEventListener('keyup', filterTask);

// Get Tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // parse into array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task) {
    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(task));
    // create link
    const link = document.createElement('a');
    // add href to a
    link.setAttribute('href', '#');
    // add class
    link.className = 'delete-item secondary-content';
    // add clear btn
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);

    // append li to ul
    ul.appendChild(li);
  });
}

function addTask(e) {
  console.log('Add Task');
  if (taskInput.value === '') {
    alert('Add a  task!');
  } else {
    // <li class="collection-item">
    //   List Item
    //   <a href="#" class="delete-item secondary-content">
    //     <i class="fa fa-remove"></i>
    //   </a>
    // </li>

    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create link
    const link = document.createElement('a');
    // add href to a
    link.setAttribute('href', '#');
    // add class
    link.className = 'delete-item secondary-content';
    // add clear btn
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);

    // append li to ul
    ul.appendChild(li);

    // store in local storage
    storeTaskInLocalStorage(taskInput.value);
    // clear input
    taskInput.value = '';
    // console.log(li);

    e.preventDefault();
  }
}
// add to local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // parse into array
    tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(typeof localStorage.getItem('tasks'));
    console.log(typeof tasks);
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  // console.log(taskItem);
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // parse into array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Clear Tasks
function clearTasks() {
  // ul.innerHTML = '';

  // Faster
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // Clear from local storage
  clearTasksFromLocalStorage();
}

// Clear Tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Task
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  // console.log(text);

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
