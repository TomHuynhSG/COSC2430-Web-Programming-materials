// The "seed.js" file in the model folder is used to populate the database with sample data.

// By running this file, we can quickly and easily populate the database with sample data 
// that can be used for testing or demonstration purposes. 
// It can also be used to populate the database with initial data when the application is first deployed.

const products = [
    {
        image: "p-1.jpg",
        name: "Fairtrade Pocket Hoodie",
        price: 64.95,
        description: "A comfortable and stylish hoodie made from fairtrade materials."
    },
    {
        image: "p-2.jpg",
        name: "Fairtrade Zip Hoodie",
        price: 59.95,
        description: "A warm and durable zip-up hoodie made with fairtrade cotton."
    },
    {
        image: "p-3.jpg",
        name: "Rudby Jergy",
        price: 69.95,
        description: "A soft and breathable jersey made with high-quality Rudby cotton."
    },
    {
        image: "p-4.jpg",
        name: "Topaz Premium Zip Jacket",
        price: 34.95,
        description: "A lightweight and versatile jacket with a premium zip for added durability."
    },
    {
        image: "p-5.jpg",
        name: "Rmit Fairtrade Polo",
        price: 21.95,
        description: "A classic polo shirt made with fairtrade materials and featuring the RMIT logo."
    },
    {
        image: "p-6.jpg",
        name: "Portable Charger",
        price: 10,
        description: "A compact and powerful portable charger with multiple USB ports for charging your devices on the go."
    }
];

let Product = require('./Product');

// Insert many documents
Product.insertMany(products)
.then(() => console.log('Many products are saved'))
.catch((error) => console.log(error.message));