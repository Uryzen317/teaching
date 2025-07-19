const networker = {
  get: () => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "http://195.177.255.229:3009/get", true);
    ajax.send();
    ajax.onload = (event) => {
      const response = JSON.parse(event.target.responseText);
      tasks = response;

      console.log("Retrieved data !", response);
      renderTasks();

      // JSON.parse(); // text -> object
      // JSON.stringify(); // object -> text
    };

    ajax.onerror = () => {};
  },
  set: () => {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "http://195.177.255.229:3009/set", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tasks));
    ajax.onload = (event) => {
      console.log("Saved data !");
    };

    ajax.onerror = () => {};
  },
};

function getData() {
  networker.get();
}

function setData() {
  networker.set();
}

const inputTitle = document.querySelector("#input-title");
const createBtn = document.querySelector("#create-btn");
const tasksContainer = document.querySelector("#tasks-container");
let tasks = [];

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

    const date = new Date(tasks[counter].date);
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
    const deleteImage = document.createElement("div");
    deleteImage.innerHTML = `<svg
xmlns="http://www.w3.org/2000/svg"
height="24px"
viewBox="0 -960 960 960"
width="24px"
fill="#000000"
>
<path
  d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"
/>
</svg>`;
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
      // TO DO : REFACTOR
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
        // TO DO : REFACTOR
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
