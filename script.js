
// Function to toggle between placeholder text and name
function toggleName(cardElement) {
  const textElement = cardElement.querySelector('.card-text'); // Select the text element within the card
  const hiddenText = 'Click to unhide name'; // Placeholder text
  const name = cardElement.getAttribute('data-name'); // Get the name from data attribute
  
  // Toggle between hiddenText and the actual name
  textElement.textContent = textElement.textContent === hiddenText ? name : hiddenText;
}


// JavaScript to make the collapsible work
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Function to toggle the visibility of the menu in small screens
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

// Function to open a modal by ID
function openModal(modalId) {
  $('#' + modalId).modal('show');
}
