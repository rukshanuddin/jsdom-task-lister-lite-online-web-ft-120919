document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const newTaskUl = document.getElementById("tasks");

  createTaskForm.addEventListener("submit", createNewTask);
  
});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  const deleteButton = document.createElement('button');

  newTask.innerText = newTaskDescription.value;
  
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', event => tasks.removeChild(newTask));

  addNewTask(newTask);
  newTask.appendChild(deleteButton);
  event.target.reset();
};

const addNewTask = task => {
  document.getElementById("tasks").appendChild(task);
  
};