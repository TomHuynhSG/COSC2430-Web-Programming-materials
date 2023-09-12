const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tomhuynhsg:mypassword@cluster0.hsxbnte.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    age: Number,
});


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
});

  
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { User, Product };