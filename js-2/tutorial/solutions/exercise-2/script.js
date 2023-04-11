var button = document.getElementById("enter"); // Get reference to the button element with id "enter"
var input = document.getElementById("userinput"); // Get reference to the input element with id "userinput"
var ul = document.querySelector("ul"); // Get reference to the unordered list (ul) element

function inputLength() {
	return input.value.length; // Return the length of input value
}

function createListElement() {
	var li = document.createElement("li"); // Create a new list item (li) element
	var trashEmoji = document.createElement("span"); // Create a new span element for the trash emoji
	trashEmoji.innerHTML = " 🗑️"; // Set inner HTML of span element to trash emoji
	li.appendChild(document.createTextNode(input.value)); // Create a text node for the list item text and append it to the list item
	li.appendChild(trashEmoji); // Append the trash emoji span to the list item
	ul.appendChild(li); // Append the list item to the unordered list (ul)
	input.value = ""; // Clear the input value after adding the list item
}

function addListAfterClick() {
	if (inputLength() > 0) { // Check if input value has length greater than 0
		createListElement(); // Call the createListElement() function to add a new list item
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { // Check if input value has length greater than 0 and Enter key is pressed
		createListElement(); // Call the createListElement() function to add a new list item
	}
}

function deleteListItem(event) {
	var target = event.target; // Get the target element that triggered the event
	if (target.tagName === "SPAN") { // Check if the clicked element is the trash emoji span
		var listItem = target.parentNode; // Get the parent list item element
		listItem.remove(); // Remove the list item from the DOM
	}
}

button.addEventListener("click", addListAfterClick); // Add event listener to the button for click event to add a new list item
input.addEventListener("keypress", addListAfterKeypress); // Add event listener to the input for keypress event to add a new list item
ul.addEventListener("click", deleteListItem); // Add event listener to the unordered list (ul) for click event to delete list item