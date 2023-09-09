const mongoose = require('mongoose');

// Replace <yourusername> and <password> with your username and actual password for the mongodb atlas cluster
mongoose.connect('mongodb+srv://<yourusername>:<password>@cluster0.9se0jru.mongodb.net/people?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

// Define a schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Define a model based on the schema
const Person = mongoose.model('Person', personSchema);

// Create a new document
const person = new Person({
  name: 'John Doe',
  age: 30
});

// Save the document to the database
person.save()
.then(() => console.log('Document saved'))
.catch((error) => console.log(error.message))

// Find documents
Person.find()
.then((persons) => console.log(persons))
.catch((error) => console.log(error.message));

// Update a document
Person.findOneAndUpdate({ name: 'John Doe' }, { age: 45 })
.then(() => console.log('Document updated'))
.catch((error) => console.log(error.message));

// Delete a document
Person.deleteOne({ name: 'John Doe' })
.then(() => console.log('Document deleted'))
.catch((error) => console.log(error.message));

// Insert many documents
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

Person.insertMany(people)
.then(() => console.log('Many documents saved'))
.catch((error) => console.log(error.message));


