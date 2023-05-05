const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tomhuynh:mypassword@cluster0.coimmkg.mongodb.net/shopDB?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

// Define a schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price:{
    type: Number,
    required: true,
    min: 0
  },
  description:{
    type: String
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: {
    type: String,
    enum: ['eletronics', 'beauty products', 'toys']
  }
});

// Define a model based on the schema
const Product = mongoose.model('Product', productSchema);


// Create a new document
const phone = new Product({
  name: 'iPhone 14 Pro Max',
  price: 599,
  onSale: true,
  categories: 'eletronics'
});

// Save the document to the database
phone.save()
.then(() => console.log('Document saved'))
.catch((error) => console.log(error.message))

// Create a new document
const spinner = new Product({
  name: 'Fidget Spinner Gold',
  price: -5,
  description: 'Very cool toy!',
  categories: 'whatever'
});

// Save the document to the database
spinner.save()
.then(() => console.log('Document saved'))
.catch((error) => console.log(error.message))

