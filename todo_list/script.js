const addbtn = document.getElementById("addbtn");
const inputBox = document.getElementById('inputBox');

const todolist = document.getElementById('todolist');


const addTodo = () =>{
    const inputText = inputBox.value;
    if (inputText.length <= 0){
        alert("box empty")
    }
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "remove"
    li.appendChild(deleteBtn)



    todolist.appendChild(li);
    inputBox.value = "";

}

const updateTodo = (e) =>{
    if(e.target.innerHTML === "remove"){
        todolist.removeChild(e.target.parentElement);
    }
    
}


addbtn.addEventListener("click", addTodo);
todolist.addEventListener("click", updateTodo)

