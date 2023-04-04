// Prompt the user for the number of seconds since midnight
console.log("Enter the seconds");
var seconds = parseInt(prompt("Enter the seconds:"));
console.log(seconds);
// Calculate the hours, minutes, and seconds
var hours = Math.floor(seconds / 3600);
var minutes = Math.floor((seconds - (hours * 3600)) / 60);
seconds = seconds - (hours * 3600) - (minutes * 60);

// Display the time in the format "h:m:s"
console.log(hours + ":" + minutes + ":" + seconds);