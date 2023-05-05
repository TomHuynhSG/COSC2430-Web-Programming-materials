const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

let products = require('./products');
console.log(products);

app.get('/', (req, res) => {
    res.render('home', {products: products});
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});