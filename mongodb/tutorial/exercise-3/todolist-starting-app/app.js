//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://ENTER YOUR MONGODB ATLAS CONNECTION URI HERE", {useNewUrlParser: true})
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

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);


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


app.get("/:customListName", function(req, res){
  const customListName = _.capitalize(req.params.customListName);

  // Fill in your code here!


});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  // Fill in your code here!


});


app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  // Fill in your code here!


});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
