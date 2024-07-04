const apiKey = "ca3887adb98adf53f79a71193215b713";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  if (data.weather[0].main == "Rain") {
    weatherIcon.src = "/images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "/images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "/images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "/images/drizzle.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "/images/snow.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "/images/mist.png";
  }
}

checkWeather("Tokyo");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        checkWeather(searchBox.value)
    }
  });