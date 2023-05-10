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


// Define a schema for course
const courseSchema = new mongoose.Schema({
  code: String,
  name: String,
  credits: Number
});

// Define a model based on the schema
const Course = mongoose.model('Course', courseSchema);

// CREATE - Create a new course
app.post('/courses', (req, res) => {
  const course = new Course(req.body);
  console.log(req.body);
  course.save()
    .then((course) => res.send(course))
    .catch((error) => res.send(error));
});

// READ - Get all courses
app.get('/courses', (req, res) => {
  Course.find({})
    .then((courses) => res.send(courses))
    .catch((error) => res.send(error));
});

// READ - Get a course by ID
app.get('/courses/:id', (req, res) => {
  Course.findById(req.params.id)
    .then((course) => {
      if (!course) {
        return res.send();
      }
      res.send(course);
    })
    .catch((error) => res.send(error));
});

// UPDATE - Update a course by ID
app.post('/courses/:id/update', (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((course) => {
      if (!course) {
        return res.send();
      }
      res.send(course);
    })
    .catch((error) => res.send(error));
});

// DELETE - Delete a course by ID
app.post('/courses/:id/delete', (req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then((course) => {
      if (!course) {
        return res.send();
      }
      res.send(course);
    })
    .catch((error) => res.send(error));
});


// Define a schema for lecturer
const lecturerSchema = new mongoose.Schema({
  vNumber: String,
  name: String,
  degree: String
});

// Define a model based on the schema
const Lecturer = mongoose.model('Lecturer', lecturerSchema);

// CREATE - Create a new lecturer
app.post('/lecturers', (req, res) => {
  const lecturer = new Lecturer(req.body);
  console.log(req.body);
  lecturer.save()
    .then((lecturer) => res.send(lecturer))
    .catch((error) => res.send(error));
});

// READ - Get all lecturers
app.get('/lecturers', (req, res) => {
  Lecturer.find({})
    .then((lecturers) => res.send(lecturers))
    .catch((error) => res.send(error));
});

// READ - Get a lecturer by ID
app.get('/lecturers/:id', (req, res) => {
  Lecturer.findById(req.params.id)
    .then((lecturer) => {
      if (!lecturer) {
        return res.send();
      }
      res.send(lecturer);
    })
    .catch((error) => res.send(error));
});

// UPDATE - Update a lecturer by ID
app.post('/lecturers/:id/update', (req, res) => {
  Lecturer.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((lecturer) => {
      if (!lecturer) {
        return res.send();
      }
      res.send(lecturer);
    })
    .catch((error) => res.send(error));
});


// DELETE - Delete a lecturer by ID
app.post('/courses/:id/delete', (req, res) => {
  Lecturer.findByIdAndDelete(req.params.id)
    .then((lecturer) => {
      if (!lecturer) {
        return res.send();
      }
      res.send(lecturer);
    })
    .catch((error) => res.send(error));
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});