const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let title = 'Home';
    let message = 'Welcome to my website!';
    res.render('welcome', { title, message });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});








