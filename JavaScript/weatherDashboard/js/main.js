import { fetchWeatherData } from "./api.js";
import { parseWeatherData } from "./parser.js";
import {
  renderCurrentWeather,
  renderHourlyForecast,
  renderError,
} from "./ui.js";

async function initApp() {
  const currentContainer = document.getElementById("current-weather");
  const hourlyContainer = document.getElementById("hourly-list");

  try {
    const rawData = await fetchWeatherData();
    const { current, hourly } = parseWeatherData(rawData);

    renderCurrentWeather(currentContainer, current);
    renderHourlyForecast(hourlyContainer, hourly);
  } catch (error) {
    console.error("App Initialization Error:", error);
    renderError(currentContainer, "Unable to load weather data.");
    hourlyContainer.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", initApp);
