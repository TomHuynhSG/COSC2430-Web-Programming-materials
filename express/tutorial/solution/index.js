const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

let products = require('./products');
console.log(products);

app.get('/', (req, res) => {
    res.render('home', {products: products});
});

app.get('/', (req, res) => {
    res.render('home', {products: products});
});

app.get('/order', (req, res) => {
    res.render('order', {products: products});
});

app.post('/checkout', (req, res) => {
        // Log the form data received from the client
        // console.log("Data received from the frontend for POST form:");
        // console.log(req.body);
        const filteredProducts = products.filter(product => req.body.products.includes(product.id.toString()));
        res.render('order-summary', {customerName: `${req.body.firstName} ${req.body.lastName}`, products: filteredProducts});
});

app.get('/product/:id', (req, res) => {
    const {id} = req.params;
    const matchedProduct = products.find(product => product.id == id);
    res.render('product', {product: matchedProduct});
});

app.get('/product/:id/delete', (req, res) => {
    const {id} = req.params;
    products = products.filter(product => product.id != id);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});