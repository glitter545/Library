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

function displayBooks() {
    bookList.innerHTML = "";
  
    myLibrary.forEach((book, index) => {
      const row = document.createElement("tr");
  
      const titleCell = document.createElement("td");
      titleCell.textContent = book.title;
      row.appendChild(titleCell);
  
      const authorCell = document.createElement("td");
      authorCell.textContent = book.author;
      row.appendChild(authorCell);
  
      const pagesCell = document.createElement("td");
      pagesCell.textContent = book.pages;
      row.appendChild(pagesCell);
  
      const readCell = document.createElement("td");
      const readButton = document.createElement("button");
      readButton.textContent = book.read ? "Read" : "Unread";
      readButton.classList.add(book.read ? "read" : "unread");
      readButton.addEventListener("click", () => {
        book.toggleRead();
        displayBooks();
      });
      readCell.appendChild(readButton);
      row.appendChild(readCell);
  
      const actionsCell = document.createElement("td");
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.setAttribute("data-index", index);
      removeButton.addEventListener("click", removeBook);
      actionsCell.appendChild(removeButton);
      actionsCell.appendChild(document.createTextNode(" "));
      row.appendChild(actionsCell);
  
      bookList.appendChild(row);
    });
  }

  newBookButton.addEventListener("click", () => {
    newBookForm.style.display = "block";
  });
  
  cancelNewBookButton.addEventListener("click", () => {
    newBookForm.style.display = "none";
  });