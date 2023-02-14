const weatherData = document.querySelectorAll("#weather span");
// const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:last-child");
const API_KEY = "cf0b98a52370fb175685487d5a2de636";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherData[0].innerText = data.name;
      weatherData[1].innerText = `${data.weather[0].main}`;
      weatherData[2].innerText = `${data.main.temp}`;
      // Text = data.name;
      // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't Find Your Location. Sorry.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
