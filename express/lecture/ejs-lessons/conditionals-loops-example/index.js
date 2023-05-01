// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const productData = [
  { name: 'Product A', price: 10.99, stock: 12 },
  { name: 'Product B', price: 24.99, stock: 5 },
  { name: 'Product C', price: 5.99, stock: 3 },
  { name: 'Product D', price: 7.99, stock: 20 },
];

app.get('/product-listing', (req, res) => {
  res.render('product-listing', { products: productData });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




