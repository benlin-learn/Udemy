const form = document.querySelector('form');
console.log(form);

const taskInput = document.querySelector('#task');

const heading = document.querySelector('h5');
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});

// const select = document.querySelector('.select');
// Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);
// keydown
// taskInput.addEventListener('keydown', runEvent);
// keyup
// taskInput.addEventListener('keyup', runEvent);
// keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);
// blur
// taskInput.addEventListener('blur', runEvent);

// cut
// taskInput.addEventListener('cut', runEvent);
// paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);

function runEvent(e) {
  console.log(`Event type: ${e.type}`);

  // console.log(e.target.value);
  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);
  // e.preventDefault();
}
