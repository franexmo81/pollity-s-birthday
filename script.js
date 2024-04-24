window.addEventListener("DOMContentLoaded", () => {
  updatePage();
});

function updatePage() {
  setInterval(timerUpdate, 1000);
}

const eventMonth = 5; //JavaScript counts months from 0 to 11
const eventDay = 8;

function timerUpdate() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let eventThisYear = new Date(currentYear, eventMonth, eventDay, 0, 0, 0);
  let christmasNextDate;

  if (currentDate < eventThisYear) {
    christmasNextDate = new Date(currentYear, eventMonth, eventDay, 0, 0, 0);
  } else {
    christmasNextDate = new Date(
      currentYear + 1,
      eventMonth,
      eventDay,
      0,
      0,
      0
    );
  }

  let timeInSeconds = Math.round((christmasNextDate - currentDate) / 1000);

  let seconds = timeInSeconds % 60;
  let minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
  let hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
  let days = Math.floor(timeInSeconds / (24 * 60 * 60));

  document.getElementsByClassName("counter--days")[0].innerHTML = days;
  document.getElementsByClassName("counter--hours")[0].innerHTML = hours;
  document.getElementsByClassName("counter--minutes")[0].innerHTML = minutes;
  document.getElementsByClassName("counter--seconds")[0].innerHTML = seconds;
}
