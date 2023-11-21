//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);

    const checkButton = document.createElement("button");
    checkButton.innerHTML = '✓';
    checkButton.classList.add("check-button");
    todoDiv.appendChild(checkButton);

    const delButton = document.createElement("button");
    delButton.innerHTML = '🗑️';
    delButton.classList.add("del-button");
    todoDiv.appendChild(delButton);
    todoList.appendChild(todoDiv);

    todoInput.value = "";


}

