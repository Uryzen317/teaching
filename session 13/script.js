const inputTitle = document.querySelector("#input-title");
const createBtn = document.querySelector("#create-btn");
const tasksContainer = document.querySelector("#tasks-container");
let tasks = [
  // {
  //   title: "test",
  //   isSpecial: false,
  //   date: new Date(),
  //   list: [
  //     {
  //       title: "test",
  //       isDone: false,
  //     },
  //     {
  //       title: "test",
  //       isDone: false,
  //     },
  //     {
  //       title: "test",
  //       isDone: true,
  //     },
  //   ],
  // },
];
// renderTasks();

createBtn.addEventListener("click", () => {
  if (!inputTitle.value) return;

  // tasks.push(inputTitle.value);
  tasks.push({
    title: inputTitle.value,
    isSpecial: false,
    date: new Date(),
    list: [],
  });
  inputTitle.value = "";
  console.log("New task registered :", tasks);

  renderTasks();
});

function deleteTask(index) {
  console.log("Delete registered :", index);
  tasks = tasks.filter((_t, i) => i !== index);
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
    // main task container
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    // header
    const newHeader = document.createElement("div");
    newHeader.classList.add("task-header");

    if (tasks[counter].isSpecial) {
      newTask.classList.add("task-completed");
    }

    // title p tag & date span tag
    const newTitle = document.createElement("p");
    newTitle.innerText = tasks[counter].title;

    const newDate = document.createElement("span");
    const date = tasks[counter].date;
    newDate.innerText = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;

    newTitle.appendChild(newDate);
    newHeader.appendChild(newTitle);

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

    // lists
    const newList = document.createElement("div");
    newList.classList.add("task-list");

    const newListTitle = document.createElement("input");
    newListTitle.placeholder = "list title";
    newListTitle.id = `list-title-input-${counter}`;

    const newListBtn = document.createElement("button");
    newListBtn.innerText = "Create";
    newListBtn.addEventListener("click", () => {
      const inputTarget = document.getElementById(
        `list-title-input-${counter}`
      );

      tasks[counter].list.push({
        title: inputTarget.value,
        isDone: false,
      });

      renderTasks();
    });

    const newListUL = document.createElement("ul");

    for (
      let LICounter = 0;
      LICounter < tasks[counter].list.length;
      LICounter++
    ) {
      const newListLi = document.createElement("li");
      newListLi.id = `li-task-${counter}-${LICounter}`;
      const newListCheckbox = document.createElement("input");
      newListCheckbox.type = "checkbox";

      if (tasks[counter].list[LICounter].isDone) {
        newListCheckbox.checked = true;
      }

      newListCheckbox.addEventListener("click", () => {
        tasks[counter].list[LICounter].isDone =
          !tasks[counter].list[LICounter].isDone;

        renderTasks();
      });

      const newListSpan = document.createElement("span");
      newListSpan.innerText = tasks[counter].list[LICounter].title;

      newListLi.appendChild(newListCheckbox);
      newListLi.appendChild(newListSpan);

      newListUL.appendChild(newListLi);
    }

    newList.appendChild(newListTitle);
    newList.appendChild(newListBtn);
    newList.appendChild(newListUL);

    newHeader.appendChild(newImagesContainer);
    newTask.appendChild(newHeader);
    newTask.appendChild(newList);
    tasksContainer.appendChild(newTask);
  }
}
