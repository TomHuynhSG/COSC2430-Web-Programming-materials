const mongoose = require('mongoose');

// Replace <password> with the actual password for the user
mongoose.connect('mongodb+srv://tomhuynh:mypassword@cluster0.coimmkg.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

// Define a schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Define a model based on the schema
const Person = mongoose.model('Person', personSchema);

// // Create a new document
// const person = new Person({
//   name: 'John Doe',
//   age: 30
// });

// // Save the document to the database
// person.save()
// .then(() => console.log('Document saved'))
// .catch((error) => console.log(error.message))


// // Find documents
// Person.find()
// .then((persons) => console.log(persons))
// .catch((error) => console.log(error.message));

// Update a document
// Person.findOneAndUpdate({ name: 'John Doe' }, { age: 45 })
// .then(() => console.log('Document updated'))
// .catch((error) => console.log(error.message));

// // Delete a document
Person.deleteOne({ name: 'John Doe' })
.then(() => console.log('Document deleted'))
.catch((error) => console.log(error.message));
