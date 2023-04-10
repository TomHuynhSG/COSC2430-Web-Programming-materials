console.log("Hello world!");

// Add your js code below here!
const itemList = document.querySelector('#item-list');

function handleItemClick(event) {
  const item = event.target;
  if (item.classList.contains('item')) {
    item.classList.toggle('completed');
  }
}

itemList.addEventListener('click', handleItemClick);