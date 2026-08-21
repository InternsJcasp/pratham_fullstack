// Handles DOM updates
export function renderCurrentWeather(container, current) {
  container.innerHTML = `
    <div class="meta-info">Updated at ${current.time}</div>
    <div class="temp-display">${current.temp}</div>
    <div class="meta-info">Wind: ${current.windSpeed}</div>
  `;
}

export function renderHourlyForecast(container, hourlyList) {
  container.innerHTML = hourlyList
    .map(
      (item) => `
      <div class="hourly-item">
        <div class="time">${item.time}</div>
        <div class="temp">${item.temp}</div>
      </div>
    `
    )
    .join('');
}

export function renderError(container, message) {
  container.innerHTML = `<div class="skeleton" style="color: #ef4444;">${message}</div>`;
}