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
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
    const data = await response.json();
    if (data.error) {
      alert(data.error.message);
      return;
    }
    updateWeatherUI(data);
  } catch (error) {
    console.error(error);
    alert("Could not fetch weather data. Please try again.");
  }
}

function updateWeatherUI(data) {
  const temperature = document.querySelector(".temperature");
  const location = document.querySelector(".location");
  const time = document.querySelector(".time");
  const day = document.querySelector(".day");
  const date = document.querySelector(".date");
  const conditionEl = document.querySelector(".condition");
  const iconImg = document.querySelector(".icon img");

  temperature.textContent = `${data.current.temp_c}°C`;
  location.textContent = data.location.name;
  time.textContent = data.location.localtime;
  day.textContent = new Date(data.location.localtime).toLocaleDateString("en-US", { weekday: "long" });
  date.textContent = new Date(data.location.localtime).getDate();
  conditionEl.textContent = data.current.condition.text;
  iconImg.src = data.current.condition.icon;
}

