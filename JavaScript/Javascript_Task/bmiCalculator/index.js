const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const calculateButton = document.getElementById("calculate-btn");

const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");


calculateButton.addEventListener("click", function () {

  const weight = Number(weightInput.value);
  const heightInCm = Number(heightInput.value);

  // Convert cm to meters
  const height = heightInCm / 100;

  // BMI formula
  const bmi = weight / (height * height);

  bmiValue.textContent = `Your BMI: ${bmi.toFixed(2)}`;


  // Check BMI category
  if (bmi < 18.5) {
    bmiCategory.textContent = "Category: Underweight";
  } 
  else if (bmi < 25) {
    bmiCategory.textContent = "Category: Normal weight";
  } 
  else if (bmi < 30) {
    bmiCategory.textContent = "Category: Overweight";
  } 
  else {
    bmiCategory.textContent = "Category: Obesity";
  }

});