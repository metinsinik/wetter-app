import apiKey from "./secret.js";

window.onload = () => {
  getResult("Vienna");
};
const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};

window.requestWeather = () => {
  getResult(searchBar.value);
};

const getResult = (cityName) => {
  let query = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  console.log("RESULT ", result);
  let city = document.querySelector(".city");
  city.innerText = `${result.name},${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let humidity = document.querySelector(".humidity");
  humidity.innerText = `Humidity: ${Math.round(result.main.humidity)}%`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
