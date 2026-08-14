const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert");
const result = document.getElementById("result");

convertButton.addEventListener("click", function () {
  const temperature = Number(temperatureInput.value);
  const unit = unitSelect.value;

  if (temperatureInput.value === "") {
    result.textContent = "Please enter a temperature";
    return;
  }

  let convertedTemperature;

  if (unit === "celsius") {
    const fahrenheit = (temperature * 9) / 5 + 32;
    const kelvin = temperature + 273.15;

    convertedTemperature = `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
  }

  if (unit === "fahrenheit") {
    const celsius = ((temperature - 32) * 5) / 9;
    const kelvin = celsius + 273.15;

    convertedTemperature = `${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
  }

  if (unit === "kelvin") {
    const celsius = temperature - 273.15;
    const fahrenheit = (celsius * 9) / 5 + 32;

    convertedTemperature = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
  }

  result.textContent = convertedTemperature;
});