const mongoose = require('mongoose');

// Replace <password> with the actual password for the user
mongoose.connect('mongodb+srv://tomhuynh:mypassword@cluster0.coimmkg.mongodb.net/rmitStore?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

// Define a schema
const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String
});

// Define a model based on the schema
const Product = mongoose.model('Product', productSchema);


// the module exports the "Product" model so that it can be used by other parts of the application.
module.exports = Product;







