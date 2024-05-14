const form = document.forms.form;
const listOfTasks = document.getElementById('tasksList');

let tasks = [];

if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(task => {
        addTaskToList(task);
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const taskInput = form.elements.task;

    const taskContent = taskInput.value.trim();

    if (taskContent !== "") {
        addTaskToList(taskContent);

        tasks.push(taskContent);

        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
    }
});

function addTaskToList(content) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {
        li.classList.toggle("todo-item--checked");
        updateLocalStorage();
    });
    
    const span = document.createElement("span");
    span.classList.add("todo-item__description");
    span.textContent = content;
    
    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("todo-item__delete");
    deleteBtn.textContent = "Видалити ❌";

    deleteBtn.addEventListener("click", function() {
        li.remove();
        tasks = tasks.filter(task => task !== content);
        updateLocalStorage();
    });
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    listOfTasks.appendChild(li);
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

