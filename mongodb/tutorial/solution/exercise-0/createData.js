const { User, Product } = require('./model');


const newUser1 = new User({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 30,
});

newUser1.save()
.then(() => {
    console.log('User saved successfully');
})
.catch(err => {
    console.error('Validation error:', err.message);
});

const newUser2 = new User({
    email: 'john.doe@example.com',
    age: 30
});

newUser2.save()
.then((user) => console.log(user))
.catch((error) => console.log(error));


const newProduct = new Product({
    name: 'Sample Product',
    price: 100,
    category: 'Electronics',
});


newProduct.save()
.then((product) => console.log(product))
.catch((error) => console.log(error));
