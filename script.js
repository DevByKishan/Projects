const task_btns = document.getElementById("task_btn");
const contact_forms = document.querySelectorAll(".contact_form");
const inputs = document.querySelectorAll("#task_form input");

const submit_tasks = document.getElementById("submit_task")

const task_names = document.getElementById("task_name")
const date_names = document.getElementById("date_name")
const provider_names = document.getElementById("provider_name")
const assignee_names = document.getElementById("assignee_name")

const add_task_names = document.getElementById("add_task_name")
const date_task_names = document.getElementById("date_task_name")
const provider_task_names = document.getElementById("provider_task_name")
const assignee_task_names = document.getElementById("assignee_task_name")



let task_list = 0;

task_btns.addEventListener("click", () => {
    if (contact_forms.style.display === "none") {
        contact_forms.style.display = "block";
        
    } else {
        contact_forms.style.display = "none";
        task_btns.classList.add("hide")
    }
})



submit_tasks.addEventListener("click", (e) => {
    e.preventDefault()
    task_list++;
         task_names.innerText = add_task_names.value
         date_names.innerText = date_task_names.value
         provider_names.innerText = provider_task_names.value
         assignee_names.innerText = assignee_task_names.value
       
})
 
contact_forms

