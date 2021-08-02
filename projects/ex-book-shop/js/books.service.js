'use strict'

var gBooks;
var size;

createBooks()

function getBooks() {
    return gBooks;
}

function createBooks() {

    var books = loadFromStorage('booksDB')

    if (!books || !books.length) {
        books = [];
        var book1 = {
            id: makeId(),
            name: 'how to do this?',
            price: '50$',
            img: 'img/howto.png',
            rate: 0
        }
        var book2 = {
            id: makeId(),
            name: 'GOOD TO GREAT',
            price: '60$',
            img: 'img/good.gif',
            rate: 0

        }
        books.push(book1)
        books.push(book2)

    }
    gBooks = books
    _saveToStorage();
}

function updateBook(bookId, newPrice) {
    var book = gBooks.find(function(book) {
        return book.id === bookId;
    })
    book.price = newPrice
    _saveToStorage()
}

function _saveToStorage() {
    saveToStorage('booksDB', gBooks)
}



function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveToStorage();

}

function addBook() {
    var book = _createBook()
    gBooks.unshift(book)
    _saveToStorage();
}

function getBookById(bookId) {
    var book = gBooks.find(function(book) {
        return book.id === bookId
    })
    return book
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function _createBook() {
    return {
        id: makeId(),
        name: addBookName,
        price: addBookPrice,
        rate: 0
    }

}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}


function changeRate(diff, bookId) {
    var book = getBookById(bookId)
        // gbooks[idx].rate += diff
    if (book.rate + diff < 0 || book.rate + diff > 10) return
    book.rate += diff
    console.log(book)
    _saveBooksToStroage();
}