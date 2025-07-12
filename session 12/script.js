const inputTitle = document.querySelector("#input-title");
const createBtn = document.querySelector("#create-btn");
const tasksContainer = document.querySelector("#tasks-container");
let tasks = [
  // {
  //   title : 'test',
  //   isSpecial : false
  // }
];

createBtn.addEventListener("click", () => {
  if (!inputTitle.value) return;

  // tasks.push(inputTitle.value);
  tasks.push({
    title: inputTitle.value,
    isSpecial: false,
  });
  inputTitle.value = "";
  console.log("New task registered :", tasks);

  renderTasks();
});

function deleteTask(index) {
  console.log("Delete registered :", index);

  tasks = tasks.filter((_t, i) => i !== index);
  // tasks = tasks.filter((_task, i) => {
  //   if (index === i) return false;
  //   return true;
  // });

  renderTasks();
}

function specialize(index) {
  console.log("Speclialization registered at:", index);
  tasks[index].isSpecial = true;
  console.log(tasks);

  renderTasks();
}

function renderTasks() {
  tasksContainer.innerHTML = "";
  for (let counter = 0; counter < tasks.length; counter++) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    if (tasks[counter].isSpecial) {
      newTask.classList.add("task-completed");
    }

    // title p tag
    const newTitle = document.createElement("p");
    newTitle.innerText = tasks[counter].title;
    newTask.appendChild(newTitle);

    // done image
    const newImagesContainer = document.createElement("div");
    const doneImage = document.createElement("img");
    doneImage.src = "./assets/done.png";
    doneImage.addEventListener("click", () => specialize(counter));
    newImagesContainer.appendChild(doneImage);

    // delete image
    const deleteImage = document.createElement("img");
    deleteImage.src = "./assets/delete.png";
    deleteImage.addEventListener("click", () => deleteTask(counter));
    newImagesContainer.appendChild(deleteImage);

    newTask.appendChild(newImagesContainer);
    tasksContainer.appendChild(newTask);
  }
}
