// Get Year
// This function gets the current and displays it at the footer of the page
const getYear = () => {
  const year = new Date();
  document.querySelector("#current-year").innerText = year.getFullYear();
}

getYear();

// Get Input Range Value
// Save the grid-range element into a variable
const inputRangeValue = document.querySelector("#grid-range");
// Add an event listener to the inputRangeValue, so when
// is clicked, the values 1 and 2 change
const getInputRangeValue = () => {
  inputRangeValue.addEventListener("click", () => {
    const rangeValue1 = document.querySelector("#value-1");
    const rangeValue2 = document.querySelector("#value-2");
    rangeValue1.innerText = inputRangeValue.value;
    rangeValue2.innerText = inputRangeValue.value;
  })
}

getInputRangeValue();

// Grid components

// Save the grid main container into a variable
const gridContainer = document.querySelector("#sketch-container");

// Define the variable for creating a new div
const gridComponent = document.createElement("div");




