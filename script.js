const now = new Date();

//This function will update the day
function updateDay() {
  const currentDay = document.getElementById("current-day");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  days.forEach((day, index) => {
    if (index == now.getDay()) {
      currentDay.textContent = day;
    }
  });
}
updateDay();

//This function will update the time
function updateTime() {
  const currentTime = document.getElementById("current-time");
  const now = new Date();
  const UTCtime = `${now.getUTCHours().toString().padStart(2, "0")}:${now
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")}:${now.getUTCSeconds().toString().padStart(2, "0")}`;
  currentTime.textContent = UTCtime;
}
setInterval(updateTime, 1000);
updateTime();
