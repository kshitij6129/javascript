// Display a prompt dialog box to the user
var userName = prompt("What is your name?");

// Check if the user provided input
if (userName != null) {
  // Display the user's input in an alert dialog box
  alert("Hello, " + userName + "!");
} else {
  // Display a message if the user did not provide input
  alert("No input provided.");
}