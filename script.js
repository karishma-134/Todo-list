const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    const taskElement = document.createElement('li');
    taskElement.textContent = task;
    taskElement.addEventListener('click', () => {
      taskElement.style.textDecoration = 'line-through';
    });
    taskList.appendChild(taskElement);
    taskInput.value = '';
  }
});

