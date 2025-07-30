const timeElems = [
  document.querySelector("#minute-2"),
  document.querySelector("#minute-1"),
  document.querySelector("#second-2"),
  document.querySelector("#second-1"),
  document.querySelector("#ms-1"),
  document.querySelector("#ms-2"),
];
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

    for (let counter = 0; counter <= 3; counter++) {
      timeElems[counter].classList.forEach((className) => {
        if (className !== "counter-container") {
          timeElems[counter].classList.remove(className);
        }
      });
      timeElems[counter].classList.add(`state-${time[counter]}`);
    }
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

    for (let counter = 4; counter <= 5; counter++) {
      timeElems[counter].classList.forEach((className) => {
        if (className !== "counter-container") {
          timeElems[counter].classList.remove(className);
        }
      });
      timeElems[counter].classList.add(`state-${time[counter]}`);
    }
  }, 10);
}
