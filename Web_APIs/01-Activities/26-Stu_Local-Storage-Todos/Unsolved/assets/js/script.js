var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// gets and displays todos from local storage
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // This updates the todo count
  // clears the todolist
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // this creates a li for each array item and adds a button
  // give each li a data-index value
  // appends each created element
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// This initializes the page upon loading
function init() {
  // TODO: What is the purpose of the following line of code?
  // This gets todos from local storage, changes to array, and stores in var storedTodos
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // checks to make sure that storedTodos exists with values
  // sets todos = to the stored array
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // calls the renderTodos function
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // Stringifies todo array and locally stores it
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// Calls a function when submit happens on the todoForm
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if the value is an empty string it ends the function
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
//  This adds new entry into the todos array and sets todoInput back to empty string
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // Calls our render and store functions
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// Adds a click event listener to the todoList
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // only runs if the button element was clicked
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
