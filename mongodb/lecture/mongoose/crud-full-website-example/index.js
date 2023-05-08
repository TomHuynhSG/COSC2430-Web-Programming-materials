const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');

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

// Show the homepage
app.get('/', (req, res) => {
  res.render('index');
});


// CREATE - Show create product form
app.get('/product/new', (req, res) => {
  res.render('create-product');
});

// CREATE - Create a new product
app.post('/product', async (req, res) => {
  try {
    console.log(req.body);
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products');
  } catch (error) {
    res.send(error);
  }
});

// READ - Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('view-products', { products });
  } catch (error) {
    res.send(error);
  }
});

// UPDATE - Show update product form
app.get('/product/:id/update', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.send();
    }
    res.render('update-product', { product });
  } catch (error) {
    res.send(error);
  }
});

// UPDATE - Update a product by ID
app.post('/product/:id/update', async (req, res) => {
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
    res.redirect('/products');
  } catch (error) {
    res.send(error);
  }
});

// DELETE - Show delete product form
app.get('/product/:id/delete', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.send();
    }
    res.render('delete-product', { product });
  } catch (error) {
    res.send(error);
  }
});

// DELETE - Delete a product by ID
app.post('/product/:id/delete', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.send();
    }
    res.redirect('/products');
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});