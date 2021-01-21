class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {}
  addBookToList(book) {
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
  }
  showAlert(message, className) {
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

    // settimeout
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function(book) {
      const ui = new UI();
      // Add book to UI
      ui.addBookToList(book);
    });
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBooks(isbn) {
    // console.log(isbn);
    const books = Store.getBooks();
    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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

    // Add to LS
    Store.addBook(book);
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
  // Delete book
  ui.deleteBook(e.target);
  // Remove from LS
  Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
  // show message
  if (e.target.className === 'delete') {
    ui.showAlert('Book Removed!', 'success');
    Store.removeBooks(e.target);
  }
  e.preventDefault();
});