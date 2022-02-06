let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
console.log (minutes);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let currentTime = document.querySelector("li");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;
console.log (currentTime);


function showTemp(response) {
    document.querySelector("h1").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}


  function searchCity(city) {
    let apiKey = "e8ae444df35b49d6068af39524f98513";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemp);
  }
  
  function submitCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input").value;
    searchCity(cityInput);
    console.log(cityInput.value);
  }
  

let form = document.querySelector("form");
form.addEventListener("submit", submitCity);


  
