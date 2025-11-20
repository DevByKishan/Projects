const inputbox = document.getElementById("inputbox")
const addBtn = document.getElementById("addBtn")
const todolist = document.getElementById("todolist")

let editTodo = null

const addTask = () => {
    const inputText = inputbox.value
    if (inputbox.value === "") {
        alert("Add Task")
    }

    if (addBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        editLocalTodo(inputText);
        inputbox.value = ""
        addBtn.value = "Add";
    } else {
        const p = document.createElement("p");
        const li = document.createElement("li");


        p.innerHTML = inputText
        li.appendChild(p)
        todolist.appendChild(li)

        const editBtn = document.createElement("button");
        editBtn.classList = ("btn", "editBtn");
        editBtn.innerHTML = "Edit";
        li.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList = ("btn", "removeBtn");
        deleteBtn.innerHTML = "Remove";
        li.appendChild(deleteBtn);
        inputbox.value = ""

        savelocalTodo(inputText)
    }
}

const updatedTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todolist.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit") {
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}

const savelocalTodo = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getlocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            const p = document.createElement("p");
            const li = document.createElement("li");

            p.innerHTML = todo
            li.appendChild(p)
            todolist.appendChild(li)

            const editBtn = document.createElement("button");
            editBtn.classList = ("btn", "editBtn");
            editBtn.innerHTML = "Edit";
            li.appendChild(editBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.classList = ("btn", "removeBtn");
            deleteBtn.innerHTML = "Remove";
            li.appendChild(deleteBtn);
        });
    }
}

const deleteLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}

const editLocalTodo = (todo) =>{
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputbox.value;
    localStorage.setItem("todos", JSON.stringify(todos))
}

document.addEventListener("DOMContentLoaded", getlocalTodos)
addBtn.addEventListener("click", addTask);
todolist.addEventListener("click", updatedTodo)



