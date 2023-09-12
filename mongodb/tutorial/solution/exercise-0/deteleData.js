const { User, Product } = require('./model');

User.deleteOne({ email: 'john.doe@example.com' })
.then((user) => console.log(user))
.catch((error) => console.log(error));

Product.deleteMany({ category: 'Electronics' })
.then((products) => console.log(products))
.catch((error) => console.log(error));
