const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tomhuynh:mypassword@cluster0.coimmkg.mongodb.net/classroom?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

// Define a schema
const studentSchema = new mongoose.Schema({
  name: String
});

// Define a model based on the schema
const Student = mongoose.model('Student', studentSchema);

// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// CREATE - Create a new student
app.post('/students', (req, res) => {
  const student = new Student(req.body);
  console.log(req.body);
  student.save()
    .then((student) => res.send(student))
    .catch((error) => res.send(error));
});

// READ - Get all students
app.get('/students', (req, res) => {
  Student.find({})
    .then((students) => res.send(students))
    .catch((error) => res.send(error));
});

// READ - Get a student by ID
app.get('/students/:id', (req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      if (!student) {
        return res.send();
      }
      res.send(student);
    })
    .catch((error) => res.send(error));
});

// UPDATE - Update a student by ID
app.post('/students/:id/update', (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((student) => {
      if (!student) {
        return res.send();
      }
      res.send(student);
    })
    .catch((error) => res.send(error));
});

// DELETE - Delete a student by ID
app.post('/students/:id/delete', (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then((student) => {
      if (!student) {
        return res.send();
      }
      res.send(student);
    })
    .catch((error) => res.send(error));
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});