const hourElem1 = document.querySelector("#hour-1");
const hourElem2 = document.querySelector("#hour-2");
const minuteElem1 = document.querySelector("#minute-1");
const minuteElem2 = document.querySelector("#minute-2");
const secondElem1 = document.querySelector("#second-1");
const secondElem2 = document.querySelector("#second-2");
const msElem1 = document.querySelector("#ms-1");
const msElem2 = document.querySelector("#ms-2");

const time = [0, 0, 0, 0, 0, 0]; // 0-9 -> hour, minute, second
const times = {
  minute2: 0,
  minute1: 1,
  second2: 2,
  second1: 3,
  ms1: 4,
  ms2: 5,
};

start();
function start() {
  // Second handler
  setInterval(() => {
    time[times.second2] += 1;

    if (time[times.second2] >= 10) {
      time[times.second2] = 0;
      time[times.second1] += 1;

      if (time[times.second1] >= 6) {
        time[times.second1] = 0;
        time[times.minute2] += 1;

        //   Minute handler
        if (time[times.minute2] >= 10) {
          time[times.minute2] = 0;
          time[times.minute1] += 1;
        }
      }
    }

    // secondElem2.textContent = time[times.second2];
    secondElem2.classList.forEach((className) => {
      if (className !== "counter-container") {
        secondElem2.classList.remove(className);
      }
    });
    secondElem2.classList.add(`state-${time[times.second2]}`);

    // secondElem1.textContent = time[times.second1];
    secondElem1.classList.forEach((className) => {
      if (className !== "counter-container") {
        secondElem1.classList.remove(className);
      }
    });
    secondElem1.classList.add(`state-${time[times.second1]}`);

    // minuteElem2.textContent = time[times.minute2];
    minuteElem2.classList.forEach((className) => {
      if (className !== "counter-container") {
        minuteElem2.classList.remove(className);
      }
    });
    minuteElem2.classList.add(`state-${time[times.minute2]}`);

    // minuteElem1.textContent = time[times.minute1];
    minuteElem1.classList.forEach((className) => {
      if (className !== "counter-container") {
        minuteElem1.classList.remove(className);
      }
    });
    minuteElem1.classList.add(`state-${time[times.minute1]}`);
  }, 1000);

  // MS handler
  setInterval(() => {
    time[times.ms2] += 1;

    if (time[times.ms2] >= 10) {
      time[times.ms2] = 0;
      time[times.ms1] += 1;

      if (time[times.ms1] >= 10) {
        time[times.ms1] = 0;
      }
    }

    // msElem1.textContent = time[times.ms1];
    msElem1.classList.forEach((className) => {
      if (className !== "counter-container") {
        msElem1.classList.remove(className);
      }
    });
    msElem1.classList.add(`state-${time[times.ms1]}`);

    // msElem2.textContent = time[times.ms2];
    msElem2.classList.forEach((className) => {
      if (className !== "counter-container") {
        msElem2.classList.remove(className);
      }
    });
    msElem2.classList.add(`state-${time[times.ms2]}`);
  }, 10);
}
