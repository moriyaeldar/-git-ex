var gTodos = [];
var gFilterBy = 'all';

_createTodos();


function getTodosForDisplay() {
    if (gFilterBy === 'all') return gTodos;

    var todos = gTodos.filter(function(todo) {
        return (gFilterBy === 'active' && !todo.isDone) ||
            (gFilterBy === 'done' && todo.isDone)
    })
    return todos;
}

function removeTodo(todoId) {
    var idx = gTodos.findIndex(function(todo) {
        return todo.id === todoId
    })
    gTodos.splice(idx, 1);
    _saveTodosToStorage();
}

function addTodo(txt) {
    var todo = {
        id: _makeId(),
        txt,
        isDone: false,
        time: makeDate(),
        level: onSetImporteceLevel()
    }
    gTodos.unshift(todo);
    _saveTodosToStorage()
}

function toggleTodo(todoId) {
    var todo = gTodos.find(function(todo) {
        return todo.id === todoId
    })
    todo.isDone = !todo.isDone;
    _saveTodosToStorage();
}

function setFilterBy(filterBy) {
    gFilterBy = filterBy
}

function getTotalCount() {
    return gTodos.length
}

function getActiveCount() {
    var activeTodos = gTodos.filter(function(todo) {
        return !todo.isDone
    })
    return activeTodos.length;
}


function _saveTodosToStorage() {
    saveToStorage('todoDB', gTodos)
}

function _createTodos() {
    var todos = loadFromStorage('todoDB')
    if (todos && todos.length) {
        gTodos = todos
    } else {
        addTodo('Learn HTML');
        addTodo('Master CSS');
        addTodo('Practive JS');
    }
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeDate() {
    var date = new Date();
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
}