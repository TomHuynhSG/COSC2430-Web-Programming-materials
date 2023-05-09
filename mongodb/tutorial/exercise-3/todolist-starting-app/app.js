const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://tomhuynh:mypassword@cluster0.coimmkg.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true})
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);


const item1 = new Item({
  name: "Welcome to your todolist!"
});

const item2 = new Item({
  name: "Hit the + button to add a new item."
});

const item3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

app.get("/", function(req, res) {
  Item.find({})
    .then((foundItems) => {
      if (foundItems.length === 0) {
        return Item.insertMany(defaultItems);
      } else {
        return foundItems;
      }
    })
    .then((foundItems) => {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    })
    .catch((err) => {
      console.log(err);
    });

});

app.post("/", function(req, res){
  // Fill in your code here!



});


app.post("/delete", function(req, res){
  // Fill in your code here!



});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
