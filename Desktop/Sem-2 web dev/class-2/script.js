const input = document.querySelector("input");
const searchBtn = document.querySelector("#search");

const API_KEY = "484a9d70243b415ab2d42445260302";

searchBtn.addEventListener("click", () => {
  const city = input.value.trim();
  if (!city) {
    alert("Enter a city name");
    return;
  }
  fetchWeather(city);
});

async function fetchWeather(city) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
  const data = await response.json();
  console.log(data); // check API response
      if (data.error) {
        alert(data.error.message);
        return;
      }

      console.log(data); // check API response
      alert(`Temperature in ${data.location.name}: ${data.current.temp_c}°C`);
      updateWeatherUI(data);
    }
    function updateWeatherUI(data) {
  const temperature = document.getElementById("temperature");
  const location = document.getElementById("location");
  const time = document.getElementById("time"); 
  const day = document.getElementById("day");
  const date= document.getElementById("date");

   }

