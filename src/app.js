let now = new Date();
let hours = now.getHours();
if (hours < 10){
    hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10){
    minutes = `0${minutes}`;
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

let currentTime = document.querySelector("#time");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;
console.log (currentTime);


function showTemp(response) {
    document.querySelector("h1").innerHTML = response.data.name;
    celsiusTemp = response.data.main.temp;
    document.querySelector("#temperature").innerHTML = Math.round(celsiusTemp);
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
  
function showTempFarenheit (event){
    event.preventDefault ();
    let temperatureElement = document.querySelector ("#temperature");
    cLink.classList.remove ("active");
    fLink.classList.add ("active");
    let farenheitTemp = (celsiusTemp * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round (farenheitTemp)
}

function showTempCelsius (event){
    event.preventDefault ();
    cLink.classList.add ("active");
    fLink.classList.remove ("active");
    let temperatureElement = document.querySelector ("#temperature");
    temperatureElement.innerHTML = Math.round (celsiusTemp)
}


let celsiusTemp = null;


let form = document.querySelector("form");
form.addEventListener("submit", submitCity);


let fLink = document.querySelector ("#f-link");
fLink.addEventListener ("click", showTempFarenheit);

let cLink = document.querySelector ("#c-link");
cLink.addEventListener ("click", showTempCelsius);



