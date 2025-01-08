// Importing Products from product.js
import products from './product.js';

// Console loging the products array
console.log(products);

// Displaying the products when the Pages loads

window.onload = () => {

    // Getting a container for the products from the HTML
    const productContainer = document.getElementById("productContainer");

    // Looping through the products array and creating a new div for each product
    products.forEach(product => {
        // Creating the Cards
        let card = `<div class="card">
                            <img src="${product.image}" alt="${product.name}">
                            <h2>${product.name}</h2>
                            <p>${product.description}</p>
                            <p class="price">${product.price}</p>
                            <button class="ViewDetails" id="ViewProduct${product.id}">View Details</button>
                            <button class="addToCart" id="AddProduct${product.id}">Add to Cart</button>
        `;

        productContainer.innerHTML += card;
    });


};

