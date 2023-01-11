// Get Year
// This function gets the current and displays it at the footer of the page
const getYear = () => {
  const year = new Date();
  document.querySelector("#current-year").innerText = year.getFullYear();
}

getYear();


