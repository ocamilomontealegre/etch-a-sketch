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
// Save the eraser element into a variable
const eraser = document.querySelector("#eraser");
// Save the rainbow-mode element into a variable
const rainbowMode = document.querySelector("#rainbow-mode");
// Save the clear element into a variable
const clear = document.querySelector("#clear");
// Save the value-1 element into a variable
const rangeValue1 = document.querySelector("#value-1");
// Save the value-2 element into a variable
const rangeValue2 = document.querySelector("#value-2");
// Create and array for the dynamic gridContainer children
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
};

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
const paintGridComponent = () => {
  if (sketchComponents) {
    sketchComponents.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.style.setProperty("background", colorPicker.value);
      });
    });
  }
};

// Erase Color
const eraseColor = () => {
  eraser.addEventListener("click", activateEraser);
};

const activateEraser = () => {
  colorPicker.value = "#FFFFFF";
  eraser.classList.add("color-button-active");
  rainbowMode.classList.remove("color-button-active");
  clear.classList.remove("color-button-active");
};

// Rainbow Mode
const getRainbowMode = () => {
  rainbowMode.addEventListener("click", activateRainbowMode);
};

const activateRainbowMode = () => {
  let randomColor = (Math.random() * 0xfffff * 1000000).toString(16);
  colorPicker.value = "#" + randomColor.slice(0, 6);
  rainbowMode.classList.add("color-button-active");
  eraser.classList.remove("color-button-active");
  clear.classList.remove("color-button-active");
};

// Clear
const clearBoard = () => {
  clear.addEventListener("click", activateClearBoard);
}

const activateClearBoard = () => {
  removeGridComponent();
  inputRange.value = 0;
  rangeValue1.innerText = 0;
  rangeValue2.innerText = 0;
  clear.classList.add("color-button-active");
  eraser.classList.remove("color-button-active");
  rainbowMode.classList.remove("color-button-active");
}

// Add an event listener to the inputRange element, so when
// is clicked, the values 1 and 2 change
const getInputRangeValue = () => {
  inputRange.addEventListener("click", () => {
    rangeValue1.innerText = inputRange.value;
    rangeValue2.innerText = inputRange.value;
    // Call the insertGridComponent() function
    insertGridComponent();
    // Call the paintGridComponent() function
    paintGridComponent();
    // Call the eraseColor() function
    eraseColor();
    // Call the getRainbowMode() function
    getRainbowMode();
    // Call the clearBoard() function
    clearBoard();
  });
};

// Call Functions
getInputRangeValue();
getYear();
