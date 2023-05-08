const express = require('express');
const app = express();
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


// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// CREATE - Create a new product
app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    console.log(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    res.send(error);
  }
});

// READ - Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.send(error);
  }
});

// READ - Get a product by ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.send();
    }
    res.send(product);
  } catch (error) {
    res.send(error);
  }
});

// UPDATE - Update a product by ID
app.post('/products/:id/update', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'price', 'description', 'onSale', 'categories'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.send({ error: 'Invalid updates!' });
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.send();
    }
    res.send(product);
  } catch (error) {
    res.send(error);
  }
});

// DELETE - Delete a product by ID
app.post('/products/:id/delete', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.send();
    }
    res.send(product);
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});