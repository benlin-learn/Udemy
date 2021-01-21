// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}
UI.prototype.addBookToList = function(book) {
  // console.log(book);
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // console.log(row);
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
};
// show alert
UI.prototype.showAlert = function(message, className) {
  // create div
  const div = document.createElement('div');
  // add class
  div.className = `alert ${className}`;
  // create text node and  append to div
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector('.container');
  // get form
  const form = document.getElementById('book-form');
  // Insert alert
  container.insertBefore(div, form);

  // setTimeout
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
};
// Delete book
UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};
// clear <fields></fields>
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Local Storage Constructor
function Store() {}

// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  // console.log(title, author, isbn);
  // Instantiate
  const book = new Book(title, author, isbn);
  // console.log(book);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // show success
    ui.showAlert('Book Added!', 'success');
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
  // Instantiate UI
  const ui = new UI();

  ui.deleteBook(e.target);

  // show message
  if (e.target.className === 'delete') {
    ui.showAlert('Book Removed!', 'success');
  }
  e.preventDefault();
});
