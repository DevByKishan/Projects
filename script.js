const inputBox = document.getElementById("inputbox");
const addbtn = document.getElementById("addBtn");
const todolist = document.getElementById("todolist");

let editTodo = null

const addTodo = () => {
    const innerText = inputBox.value
    if (inputBox.value === "") {
        alert("add task")
        return false
    }
    if (addbtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = innerText;
        addbtn.value = "Add";
        inputBox.value= ""
   
    }
    else {
        const p = document.createElement("p")
        const li = document.createElement("li")

        p.innerHTML = innerText
        li.appendChild(p);
        todolist.appendChild(li);
        inputBox.value = ""

        const editBtn = document.createElement("button")
        editBtn.className = ("btn", "editBtn")
        editBtn.innerText = "Edit"
        li.appendChild(editBtn);

        const deleteBtn = document.createElement("button")
        deleteBtn.className = ("btn", "removeBtn")
        deleteBtn.innerText = "Remove"
        li.appendChild(deleteBtn);
    }
}

const updatedTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todolist.removeChild(e.target.parentElement);
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        // inputBox.focus();
        addbtn.value = "Edit";
        editTodo = e
    }
}

addbtn.addEventListener("click", addTodo);
todolist.addEventListener("click", updatedTodo);


