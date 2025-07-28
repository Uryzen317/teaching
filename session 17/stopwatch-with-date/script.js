const minutesElem = document.querySelector("#minutes-counter");
const secondsElem = document.querySelector("#seconds-counter");
const msEleme = document.querySelector("#ms-counter");

let time = 0;
let timeInterval;

function start() {
  timeInterval = setInterval(() => {
    console.log("time:", time);
    time += 10;

    const minutes = Math.floor(time / 1000 / 60);
    if (minutes.toString().length >= 2) {
      minutesElem.textContent = minutes;
    } else {
      minutesElem.textContent = "0" + minutes;
    }

    const seconds = Math.floor((time / 1000) % 60);
    if (seconds.toString().length >= 2) {
      secondsElem.textContent = seconds;
    } else {
      secondsElem.textContent = "0" + seconds;
    }

    const ms = time.toString().slice(time.toString().length - 3);
    msEleme.textContent = ms;
  }, 10);
}

function pause() {
  clearInterval(timeInterval);
}

function reset() {
  window.location.reload();
}
