function onInit() {
    console.log('Hi');
    renderTodos();
}

function renderTodos() {
    var todos = getTodosForDisplay();
    var strHTMLs = todos.map(function(todo) {
        return `<li class="${(todo.isDone)? 'done': ''}" onclick="onToggleTodo('${todo.id}')">
            ${todo.txt}    ${todo.time}   Priorities:${(todo.level)}
            <button onclick="onRemoveTodo('${todo.id}', event)">x</button>

        </li>`
    })

    var elTodoList = document.querySelector('.todo-list');
    elTodoList.innerHTML = strHTMLs.join('');

    document.querySelector('.total-count').innerText = getTotalCount();
    document.querySelector('.active-count').innerText = getActiveCount();

}


function onToggleTodo(todoId) {
    console.log('Toggling: ', todoId);
    toggleTodo(todoId)
    renderTodos()
}

function onRemoveTodo(todoId, ev) {
    var isConfiremd = confirm('are you sure you want to delete?');
    // if (!isConfiremd) return;
    console.log('Removing: ', todoId);
    ev.stopPropagation();
    removeTodo(todoId);
    renderTodos();
}

function onAddTodo() {
    var elTxt = document.querySelector('[name=newTodoTxt]');
    var txt = elTxt.value;
    if (!txt) return;

    addTodo(txt)
    elTxt.value = '';

    renderTodos();
}

function onSetFilter(filterBy) {
    console.log('Filtering by:', filterBy);
    setFilterBy(filterBy);
    renderTodos();
}

function onSetImporteceLevel() {
    var elLevel = document.querySelector('.level').value;
    return elLevel
}