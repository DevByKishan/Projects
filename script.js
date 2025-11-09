const task_btns = document.getElementById("task_btn");
const contact_forms = document.querySelector(".contact_form");

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



// const task_lists = document.getElementById("task_list")

let task_count = 0;

task_btns.addEventListener("click", () => {
  
    if (contact_forms.classList.contains("hide")) {
        contact_forms.classList.remove("hide");
    } else {
        contact_forms.classList.add("hide");
    }
})



submit_tasks.addEventListener("click", (e) => {
    e.preventDefault()

        const task_names = add_task_names.value.trim()
        const date_names = date_task_names.value
        const provider_names = provider_task_names.value.trim()
        const assignee_names = assignee_task_names.value.trim()


         const newRow = document.createElement("td");
    newRow.innerHTML = `
        <td>${task_names}</td>
        <td>${date_names}</td>
        <td>${provider_names}</td>
        <td>${assignee_names}</td>
    `;
         
     document.querySelector("td").appendChild(newRow);

    task_count++;
    console.log(task_count)
})
 
// contact_forms

