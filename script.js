const bookList = document.querySelector("#book-list tbody");
const newBookForm = document.querySelector("#new-book-form");
const newBookButton = document.querySelector("#new-book");
const cancelNewBookButton = document.querySelector("#cancel-new-book");
const submitNewBookButton = document.querySelector("#new-book-form form button[type='submit']");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
  }

function removeBook(e) {
  const index = e.target.getAttribute("data-index");
  myLibrary.splice(index, 1);
  displayBooks();
}