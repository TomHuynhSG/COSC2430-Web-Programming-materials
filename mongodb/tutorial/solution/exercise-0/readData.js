const { User, Product } = require('./model');

User.find()
.then((users) => console.log(users))
.catch((error) => console.log(error));

  
Product.findOne({ name: 'Sample Product' })
.then((product) => console.log(product))
.catch((error) => console.log(error));
