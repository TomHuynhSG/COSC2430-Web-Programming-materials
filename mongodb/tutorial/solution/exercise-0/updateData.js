const { User, Product } = require('./model');

User.updateOne({ email: 'john.doe@example.com' }, { age: 40 })
.then((user) => console.log(user))
.catch((error) => console.log(error));

Product.updateMany({ category: 'Electronics' }, { price: 200 })
.then((products) => console.log(products))
.catch((error) => console.log(error));