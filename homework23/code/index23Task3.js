const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', event => {

    if (event.target.classList.contains('deleteBtn')) {
        event.target.parentElement.remove();
    }
});

function addTask(taskText) {

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete❌';
    deleteBtn.className = 'toDoBtnDelete';
    deleteBtn.classList.add('deleteBtn');

    listItem.appendChild(deleteBtn);
    
    taskList.appendChild(listItem);
}
