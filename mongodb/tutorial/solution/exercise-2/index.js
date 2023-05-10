const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));


const Product = require('./model/Product');

app.get('/', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('home', {products: products});
    })
    .catch((error) => console.log(error.message));
});

app.get('/order', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('order', {products: products});
    })
    .catch((error) => console.log(error.message));
});

app.post('/checkout', (req, res) => {
    Product.find({ _id: { $in: req.body.products } })
    .then((products) => {
        res.render('order-summary', {customerName: `${req.body.firstName} ${req.body.lastName}`, products: products});
    })
    .catch((error) => {
        console.log(error.message);
    });
    
});


app.get('/product/:id/delete', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (!product) {
        return res.send("Cannot found that product ID!");
      }
      res.redirect("/");
    })
    .catch((error) => res.send(error));
});


app.get('/product/:id', (req, res) => {
    Product.findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.send("Cannot found that ID!");
      }
      res.render('product', {product: product});
    })
    .catch((error) => res.send(error));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});