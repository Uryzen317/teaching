// if (window.matchMedia) {
//   const isDark = window.matchMedia("(prefers-color-scheme:dark)");
// } else {
//   // NOT SUPPORTED
// }

// window.matchMedia("(prefers-color-scheme)").addEventListener("change", () => {
//   // Toggle theme
// });

// ternary operator
// if (true) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(1 == 1 ? true : false);

let theme = window?.matchMedia("(prefers-color-scheme:dark)").matches
  ? "dark"
  : "light";
const root = document.documentElement;
const primary = getComputedStyle(root).getPropertyValue("--primary");
const secondary = getComputedStyle(root).getPropertyValue("--secondary");

const savedThemePreference = window.localStorage.getItem("theme");
if (savedThemePreference) {
  theme = savedThemePreference;
}

handleTheme();

function handleTheme() {
  if (theme === "dark") {
    root.style.setProperty("--primary", secondary);
    root.style.setProperty("--secondary", primary);
  }

  if (theme === "light") {
    root.style.setProperty("--primary", primary);
    root.style.setProperty("--secondary", secondary);
  }
}

function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  handleTheme();
}

function handleCheck(event) {
  console.log(event.target.checked);
  //   toggleTheme();
  console.log("checkbox toggled");
}

document.querySelector("button").addEventListener("mousemove", (event) => {
  console.log(event);
});

fetch("http://localhost", {
  method: "POST",
  body: {},
  headers: {
    Authentication: "Bearer ...",
    Cookie: "",
    Accept: "",
  },
})
  .catch(() => {
    console.log("Fail");
  })
  .finally(() => {
    console.log("Done");
  })
  .then(() => {
    console.log("Sucess");
  });

let calculator = {
  _data: 0,

  increment(incremention) {
    this._data += incremention;
    return this;
  },

  decrement(decremention) {
    this._data -= decremention;
    return this;
  },

  exec(execution) {
    execution(this._data);
  },
};

calculator
  .increment(10)
  .increment(10)
  .increment(15)
  .increment(20)
  .decrement(5)
  .exec((data) => {
    console.log("final data", data);
  });
