// Get Year
// This function gets the current and displays it at the footer of the page
const getYear = () => {
  const year = new Date();
  document.querySelector("#current-year").innerText = year.getFullYear();
};

// Define Variables

// Save the grid-range element into a variable
const inputRange = document.querySelector("#grid-range");
// Save the grid main container into a variable
const gridContainer = document.querySelector("#sketch-container");
// Save the color-picker value
let colorPicker = document.querySelector("#color-picker");
// 
let sketchComponents = [];

// Remove Grid Components
const removeGridComponent = () => {
  // Saves the last child element into a variable
  let child = gridContainer.lastElementChild;
  // While gridContainer has child remove the last
  // child element
  while (child) {
    gridContainer.removeChild(child);
    child = gridContainer.lastElementChild;
  }
}

// Insert Grid Component
const insertGridComponent = () => {
  // Save the input range value ^ 2
  let inputRangeUpper = Math.pow(inputRange.value, 2);
  // Ask if the gridContainer has children
  if (gridContainer.hasChildNodes) {
    // Call the removeGridComponent function
    removeGridComponent();
  }
  // If gridContainer has no children enters the
  // for loop
  for (let i = 0; i < inputRangeUpper; i++) {
    // Define the variable for creating a new div
    const gridComponent = document.createElement("div");
    // Add the class .sketch-element to every new div
    gridComponent.classList.add("sketch-element");
    // Set the width and height for every new div
    gridComponent.style.cssText = `
        width: calc(100% / ${inputRange.value}); 
        height: calc(100% / ${inputRange.value}); 
      `;
    // Append a new gridComponent to the main container
    gridContainer.appendChild(gridComponent);
    sketchComponents.push(gridComponent);
  }
};

// Paint Grid Components
const paintGridComponents = () => {
  if (sketchComponents) {
    sketchComponents.forEach((element) => {
      element.addEventListener("mouseover", () => {
          element.style.setProperty("background", colorPicker.value);
      });
    })
  }
}




// Add an event listener to the inputRange element, so when
// is clicked, the values 1 and 2 change
const getInputRangeValue = () => {
  inputRange.addEventListener("click", () => {
    const rangeValue1 = document.querySelector("#value-1");
    const rangeValue2 = document.querySelector("#value-2");
    rangeValue1.innerText = inputRange.value;
    rangeValue2.innerText = inputRange.value;
    // Calls the insertGridComponent() function
    insertGridComponent();
    paintGridComponents();
  });
};

// Call Functions
getInputRangeValue();
getYear();

