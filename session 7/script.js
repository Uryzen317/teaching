const template = `<div class="task-box">
<span>######</span>
<div>

<svg
xmlns="http://www.w3.org/2000/svg"
height="24px"
viewBox="0 -960 960 960"
width="24px"
fill="#000000"
>
<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
</svg>

<svg
xmlns="http://www.w3.org/2000/svg"
height="24px"
viewBox="0 -960 960 960"
width="24px"
fill="#000000"
onclick="deleteTask(******)"
>
<path
    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
/>
</svg>

</div>
</div>`;
const tasks = ["test", "test2", "test3"];
renderTasks();

function addTask() {
  const taskInput = document.getElementById("task-title");
  const newTaskTitle = taskInput.value;

  tasks.push(newTaskTitle);
  console.log("New task created :", newTaskTitle);
  console.log("List of tasks :", tasks);

  renderTasks();
}

function renderTasks() {
  let finalContent = "";
  const tasksContainer = document.getElementById("tasks-container");

  for (let task of tasks) {
    finalContent += template
      .replace("######", task)
      .replace("******", tasks.indexOf(task));
  }

  tasksContainer.innerHTML = finalContent;
  console.log("New content rendered !");
}

function deleteTask(index) {
  console.log("task delted by index of :", index);

  tasks.splice(index, 1);
  console.log("new array :", tasks);
  renderTasks();
}
