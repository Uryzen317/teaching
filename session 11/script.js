const inputTitle = document.querySelector("#input-title");
const createBtn = document.querySelector("#create-btn");
const tasksContainer = document.querySelector("#tasks-container");
const tasks = [];

createBtn.addEventListener("click", () => {
  if (!inputTitle.value) return;

  tasks.push(inputTitle.value);

  inputTitle.value = "";
  tasksContainer.innerHTML = "";
  console.log("tasks :", tasks);

  for (const task of tasks) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    // title p tag
    const newTitle = document.createElement("p");
    newTitle.innerText = task;
    newTask.appendChild(newTitle);

    // done image
    const doneImage = document.createElement("img");
    doneImage.src = "./assets/done.png";
    newImagesContainer.appendChild(doneImage);

    // delete image
    const deleteImage = document.createElement("img");
    deleteImage.src = "./assets/delete.png";
    newImagesContainer.appendChild(deleteImage);

    newTask.appendChild(newImagesContainer);

    tasksContainer.appendChild(newTask);
  }
});
