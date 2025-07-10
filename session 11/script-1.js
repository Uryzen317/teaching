// selectros
const myDiv = document.querySelector("div");
console.log(document.querySelector("#div-id"));
console.log(document.querySelector(".div-class"));
console.log(document.querySelector('div[data-name="test"]'));

// Attrs
console.log("my div :", myDiv);
console.log("id:", myDiv.id);
console.log("data-name:", myDiv.getAttribute("data-name"));
myDiv.setAttribute("data-username", "mohammad javad");

// class
console.log("class lists :", myDiv.classList);
myDiv.classList.add("myClass");
myDiv.classList.remove("test");
myDiv.classList.toggle("test2");
myDiv.classList.toggle("myClass2");
myDiv.classList.forEach((className, index) => {
  console.log("class at index", index, ":", className);
});

// Element creation
const newElement = document.createElement("div");
newElement.classList.add("myClass");
newElement.style.backgroundColor = "black";
newElement.setAttribute("data-name", "test");
console.log("new element:", newElement);

// Child management
const body = document.querySelector("body");
console.log(body.children);

const target = body.children[0];
body.removeChild(target);
body.appendChild(newElement);

// order management
const newElement2 = document.createElement("div");
newElement2.classList.add("myClass");
newElement2.style.backgroundColor = "black";
newElement2.setAttribute("data-name", "test");
const newElement3 = document.createElement("div");
newElement3.setAttribute("data-name", "test");
body.appendChild(newElement2);

const children = [];
for (const child of body.children) {
  children.push(child);
}

for (let i = 0; i < body.children.length; i++) {
  body.lastChild.remove();
}

console.log("backup children", children);
children.unshift(newElement3);
console.log("new backup children", children);

for (const child of children) {
  body.appendChild(child);
}
