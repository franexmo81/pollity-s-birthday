window.addEventListener("DOMContentLoaded", () => {
  checkWhatToDo();
  updatePage();
});

function updatePage() {
  setInterval(checkWhatToDo, 1000);
}

function checkWhatToDo() {
  if (isTheEventToday()) {
    celebrationPage();
  } else {
    timerUpdate();
  }
}

const eventMonth = 5; //JavaScript counts months from 0 to 11
const eventDay = 8;

function timerUpdate() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let eventThisYear = new Date(currentYear, eventMonth, eventDay, 0, 0, 0);
  let eventNextDate;

  if (currentDate < eventThisYear) {
    eventNextDate = new Date(currentYear, eventMonth, eventDay, 0, 0, 0);
  } else {
    eventNextDate = new Date(currentYear + 1, eventMonth, eventDay, 0, 0, 0);
  }

  let timeInSeconds = Math.round((eventNextDate - currentDate) / 1000);

  let seconds = timeInSeconds % 60;
  let minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
  let hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
  let days = Math.floor(timeInSeconds / (24 * 60 * 60));

  document.getElementsByClassName("counter--days")[0].innerHTML = days;
  document.getElementsByClassName("counter--hours")[0].innerHTML = hours;
  document.getElementsByClassName("counter--minutes")[0].innerHTML = minutes;
  document.getElementsByClassName("counter--seconds")[0].innerHTML = seconds;
}

function isTheEventToday() {
  let currentDate = new Date();

  return (
    currentDate.getDate() == eventDay && currentDate.getMonth() == eventMonth
  );
}

function celebrationPage() {
  document.querySelector(".title").innerText = "HAPPY BIRTHDAY POLLITY";
  document.querySelector(".description").innerText = "Enjoy your special day!";
  document.querySelector(".countdown").style.display = "none";
  document.querySelector("header").style.color = "#ED26A4";

  let interval = setInterval(fireworks, 250);
  setTimeout(() => clearInterval(interval), 1000);
}

// FIREWORKS EFFECT

const particleCount = window.innerWidth / 50;
const defaults = { startVelocity: 10, spread: 360, ticks: 60, zIndex: 0 };

function fireworks() {
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
    })
  );
}
