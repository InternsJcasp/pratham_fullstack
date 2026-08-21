
export function parseWeatherData(data) {
  const unit = data.current_units.temperature_2m;
  const currentDateISO = data.current.time;
  const todayDateStr = currentDateISO.split('T')[0]; 

  const current = {
    temp: `${Math.round(data.current.temperature_2m)}${unit}`,
    windSpeed: `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`,
    time: new Date(currentDateISO).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const hourly = data.hourly.time.reduce((acc, timeStr, index) => {
    if (timeStr.startsWith(todayDateStr)) {
      acc.push({
        time: timeStr.split('T')[1], 
        temp: `${Math.round(data.hourly.temperature_2m[index])}${unit}`,
        humidity: `${data.hourly.relative_humidity_2m[index]}%`
      });
    }
    return acc;
  }, []);

  return { current, hourly };
}