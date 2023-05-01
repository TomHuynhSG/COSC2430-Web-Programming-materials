const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hi there! this is a H1 tag<h1>');
    res.send('Hello RMIT from an Express server!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


