// 🌟 Create Task Element
function createTaskElement(taskText, priority, date) {
  const div = document.createElement('div');
  div.classList.add('task-item', priority.toLowerCase());  // Priority class based on level

  const span = document.createElement('span');
  span.textContent = `${taskText} (${priority}) - ${date || 'No Date'}`;

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '🗑️';
  delBtn.className = 'delete-btn';

  delBtn.onclick = () => {
    div.classList.add('fade-out');
    setTimeout(() => {
      div.remove();
      showToast('❌ Task Deleted!');
    }, 500);
  };

  div.appendChild(span);
  div.appendChild(delBtn);

  return div;
}

// 🌟 Add Task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const prioritySelect = document.getElementById('prioritySelect');
  const datePicker = document.getElementById('taskDate');

  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  const date = datePicker.value;

  if (!taskText) return;

  const taskList = document.getElementById('taskList');
  const newTask = createTaskElement(taskText, priority, date);

  taskList.appendChild(newTask);

  taskInput.value = '';
  datePicker.value = '';

  showToast('✅ Task Added!');
}

// 🌟 Show Toast Message
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// 🌟 Toggle Dark Mode
function toggleMode() {
  document.body.classList.toggle('dark');
}
/* Your JS was copied here (from your original HTML) */
