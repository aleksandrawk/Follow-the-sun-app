let now = new Date();
let hours = now.getHours();
if (hours < 10){
    hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10){
    munites = `0${minutes}`;
}


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
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src",
         `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
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


  
