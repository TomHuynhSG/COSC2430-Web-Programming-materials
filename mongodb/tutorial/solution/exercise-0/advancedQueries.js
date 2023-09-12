const { User, Product } = require('./model');

User.find({ age: { $gt: 25, $lt: 50 } })
.then((users) => console.log(users))
.catch((error) => console.log(error));

  
Product.find({
$or: [
    { category: 'Electronics' },
    { price: { $lt: 100 } }
]
})
.then((products) => console.log(products))
.catch((error) => console.log(error));
