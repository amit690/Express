const fs = require('fs');
const path = require('path');

const savingLocation = path.join(__dirname, '../', 'data', 'productdata.json');

const getAllProductsFromFile = (callback) => {
    fs.readFile(savingLocation, 'utf8', (err, data) => {
        if (err) {
            console.log('Reading error:', err);
            callback([]);
        } else {
            try {
                const products = JSON.parse(data);
                callback(products);
            } catch (parseErr) {
                console.log('Parsing error:', parseErr);
                callback([]);
            }
        }
    });
};

class Product {
    constructor(item, size) {
        this.item = item;
        this.size = size;
    }

    save() {
        getAllProductsFromFile((products) => {
            products.push(this); // Add the new product to the array
            fs.writeFile(savingLocation, JSON.stringify(products), (err) => { // Save the updated array to the file
                if (err) {
                    console.log('Writing error:', err);
                } else {
                    console.log('File written successfully');
                }
            });
        });
    }

    static getAllProducts(callback) {
        getAllProductsFromFile(callback);
    }
}

module.exports = Product;
