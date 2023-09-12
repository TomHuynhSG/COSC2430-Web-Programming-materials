const { User, Product } = require('./model');


// const newUser = new User({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     age: 30,
// });

const newUser = new User({
    email: 'john.doe@example.com',
    age: 30
});

newUser.save()
    .then(() => {
        console.log('User saved successfully');
    })
    .catch(err => {
        console.error('Validation error:', err.message);
    });



// newUser.save()
// .then((user) => console.log(user))
// .catch((error) => console.log(error));


// const newProduct = new Product({
//     name: 'Sample Product',
//     price: 100,
//     category: 'Electronics',
// });


// newProduct.save()
// .then((product) => console.log(product))
// .catch((error) => console.log(error));
