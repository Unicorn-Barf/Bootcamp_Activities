var todoInput = $("#todo-text");
var todoForm = $("#todo-form");
var todoList = $("#todo-list");
var todoCountSpan = $("#todo-count");

var todos = [];


function renderTodos() {
  todoList.html("");
  todoCountSpan.text(todos.length);
  
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = $("<li>")
        .text(todo)
        .attr('data-index', i);

    var button = $("<button>")
        .text("Complete ✔️");

    li.append(button);
    todoList.append(li);
  }
}

function init() {
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // Stringifies todo array and locally stores it
  localStorage.setItem("todos", JSON.stringify(todos));
}



todoForm.on("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.val().trim();

  if (todoText === "") {
    return;
  }

  todos.push(todoText);
  todoInput.val("");

  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// Adds a click event listener to the todoList
todoList.on("click", function(event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(parseInt(index), 1);
    // TODO: What will happen when the following functions are called?
    // The element which had the button pressed is deleted and won't display
    storeTodos();
    renderTodos();
  }
});

init();
