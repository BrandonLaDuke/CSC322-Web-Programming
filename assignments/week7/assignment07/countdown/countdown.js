const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const release = document.querySelector('.release');
const timer = document.querySelector('.timer');
const items = document.querySelectorAll('.num');

let futureDate = new Date(2022,4,6,00,00,0);
const year = futureDate.getFullYear();

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

release.textContent = `Only in theaters ${weekday}, ${month} ${date}, ${year}`;


const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  //1hr = 60mins
  // 1day = 24hrs

  // Values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days,hours,minutes,seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item;
  }

  items.forEach(function(item,index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    timer.innerHTML = `<hr class="live">Now In Theaters<h4>`;
  }

}

//Countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
