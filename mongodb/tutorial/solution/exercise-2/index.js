const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const Product = require('./model/Product');

app.get('/', (req, res) => {
    Product.find()
    .then((products) => {
        console.log(products);
        res.render('home', {products: products});
    })
    .catch((error) => console.log(error.message));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});