// Query Selector Challenges
// Selecting banner image
bannerImg = document.querySelector(".banner");

// Selecting h1 text
titleText = document.querySelector("h1").innerText;

// Selecting all list items
myListItems = document.querySelectorAll("ul li");

// Selecting all done list items
myDoneListItems = document.querySelectorAll("ul li.done");

// Selecting all not done list items
myNotDoneListItems = document.querySelectorAll("ul li.not-done");

// Selecting all buttons
buttons = document.querySelectorAll("button");

// Selecting the done button
doneButton = document.querySelector("#done-all-btn");

// Selecting the not done button
notDonebutton = document.querySelector("#not-done-all-btn");

// Manipulating Element Challenges
// Selecting h1 text and change its text value and color
myHeader = document.querySelector("h1");
myHeader.innerText = "MY NEW TITLE FOR TO DO LIST";
myHeader.style.color = "red";

// Get second list item text and change its value
mySecondListItem = document.querySelector("ul li:nth-child(2)");
mySecondListItem.innerText = "I want to sleep till the end of the day!";

// Get the imagine link url and change it to another link
bannerImg = document.querySelector(".banner");
bannerImg.setAttribute('src','https://www.sheknows.com/wp-content/uploads/2018/08/dgldbejjyofmcsfvkfd9.jpeg?w=1920')

// Change all list items to be done
myListItems = document.querySelectorAll("ul li");
myListItems.forEach(item => {
    item.classList.remove("not-done");
    item.classList.add("done");
})

// Change all list items from done to be not done and vice versa.
myListItems = document.querySelectorAll("ul li");
myListItems.forEach(item => {
    item.classList.toggle("not-done");
    item.classList.toggle("done");
})

// EventListener Challenges

// Clicking on the button "Done All" makes all list items to be done.
doneButton = document.querySelector("#done-all-btn");
doneButton.addEventListener('click', () => {
    myListItems = document.querySelectorAll("ul li");
    myListItems.forEach(item => {
        item.classList.remove("not-done");
        item.classList.add("done");
    })
})

// Clicking on the button "Not Done All" makes all list items to be done.
notDonebutton = document.querySelector("#not-done-all-btn");
notDonebutton.addEventListener('click', () => {
    myListItems = document.querySelectorAll("ul li");
    myListItems.forEach(item => {
        item.classList.remove("done");
        item.classList.add("not-done");
    })
})

// Clicking on any item list will make the item toggle from done to not done or vice versa.
myListItems = document.querySelectorAll("ul li");
myListItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('done');
      item.classList.toggle('not-done');
    });
});

