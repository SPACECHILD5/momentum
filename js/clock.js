const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  hour = String(date.getHours()).padStart(2, "0");
  minute = String(date.getMinutes()).padStart(2, "0");
  second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`;

  // clock.innerText = new Date().toLocaleTimeString();
}

getClock();
setInterval(getClock, 1000);
