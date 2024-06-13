const apiUrl = 'http://localhost:3000/todos';

const addBtn = document.getElementById('add');
const valueInput = document.getElementById('value');
const myList = document.getElementById('mylist');
  
 // Fetch all to-dos
fetchTodos();
  
addBtn.addEventListener('click', async function () {

const title = valueInput.value;

  if (title) {
      const newTodo = { title: title, description: '', completed: false };
      await createTodo(newTodo);
      valueInput.value = '';
      fetchTodos();
      }
    });
  
async function fetchTodos() {

      myList.innerHTML = '';
      const response = await fetch(apiUrl);
      const todos = await response.json();
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
  
        const detailsBtn = document.createElement('button');
        detailsBtn.textContent = 'Details';
        detailsBtn.classList.add('btn', 'btn-info', 'ml-2');
        detailsBtn.addEventListener('click', () => showTodoDetails(todo));
  
        li.appendChild(detailsBtn);
        myList.appendChild(li);
      });
    }
  
async function createTodo(todo) {

      await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      });
    }
  
function showTodoDetails(todo) {

      const taskDetails = document.getElementById('taskDetails');
      taskDetails.innerHTML = `
        <p>Title: ${todo.title}</p>
        <p>Description: ${todo.description}</p>
        <p>Completed: ${todo.completed}</p>
        <button id="updateBtn" class="btn btn-primary">Update</button>
        <button id="deleteBtn" class="btn btn-danger">Delete</button>
      `;
      $('#taskModal').modal('show');
  
      document.getElementById('updateBtn').addEventListener('click', () => updateTodo(todo._id));
      document.getElementById('deleteBtn').addEventListener('click', () => deleteTodo(todo._id));
    }
  
async function updateTodo(id) {

      const newTitle = prompt('ENTER NEW TITLE:');
      const newDescription = prompt('ENTER NEW DESCRIPTION:');
      const newCompleted = prompt('Change Result ( TRUE / FALSE):');
      if (newTitle || newDescription || newCompleted) {
        const updatedTodo = { title: newTitle, description: newDescription, completed: newCompleted };
        await fetch(`${apiUrl}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTodo),
        });
        $('#taskModal').modal('hide');
        fetchTodos();
      }
    }
  
    async function deleteTodo(id) {
      await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
      $('#taskModal').modal('hide');
      fetchTodos();
  }

  
  