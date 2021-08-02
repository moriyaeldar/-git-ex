'use strict'
var addBookName
var addBookPrice

function onInit() {
    renderBooks()
    var elModal = document.querySelector('.modal')
    elModal.hidden = true;

}

function renderBooks() {
    var books = getBooks()
    var elTable = document.querySelector('table');
    var strHtml = '<tbody><th>id</th><th>Title</th><th>Price</th><th>Actions</th>'
    strHtml += books.map(function(book) {
        return `
                <tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.price}</td>
                <td>
                <button onclick="onReadBook('${book.id}')">Read</button>
                <button onclick="onUpdateBook('${book.id}')">Update</button>
                <button onclick="onRemoveBook('${book.id}')">Delete</button>
                </td>
                </tr>
    
             `
    })
    strHtml += '</tbody>'
    elTable.innerHTML = strHtml

}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onAddBook() {
    addBookName = prompt('book name:')
    addBookPrice = prompt('book price:')
    addBook()
    renderBooks()
}

function onUpdateBook(bookId) {
    var newPrice = +prompt('price?');
    updateBook(bookId, newPrice);
    renderBooks()
}

function onReadBook(bookId) {
    var book = getBookById(bookId)
    var info = makeLorem(size = 100)
    var elModal = document.querySelector('.modal')
    var strHtml = `<h2>${book.name}</h2>
    <p>${info}</p>
   <img src="${book.img}" alt="">
   <p>rate:</p>
   <button class="+" onclick="onChangeRate(1)">+</button>
    <span>${book.rate}</span>
    <button class="-"onclick="onChangeRate(-1)">-</button>
    <button class="close"onclick="onCloseModal()">close</button>`
    elModal.hidden = false;
    elModal.innerHTML = strHtml
}

function onChangeRate(diff) {
    var book = getBookById(bookId)
    changeRate(diff);
    document.querySelector('.span').innerText = book.rate;
}

function onCloseModal() {
    var elModal = document.querySelector('.modal')
    elModal.hidden = true;
}