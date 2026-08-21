export async function fetchWeatherData(lat = 52.52, lon = 13.419998) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch weather data: ${response.statusText}`);
  }
  return await response.json();
}
