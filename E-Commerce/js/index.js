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
        var card = `<div class="card">
                            <img src="${product.image}" alt="${product.name}">
                            <h2>${product.name}</h2>
                            <p>${product.description}</p>
                            <p class="price">$${product.price}</p>
                            <button class="ViewDetails" id="ViewProduct${product.id}">View Details</button>
                            <button class="addToCart" id="AddProduct${product.id}">Add to Cart</button>
        `;

        productContainer.innerHTML += card;

        // Getting the view details button and Add to Cart button Ids
        // const ViewProductId = `ViewProduct${product.id}`;
        // const AddProductId = `AddProduct${product.id}`;

        // const ViewProductBtn = document.getElementById(ViewProductId);
        // const AddProductBtn = document.getElementById(AddProductId);

        // Getting view details section and container
        // const viewDetailsSection = document.getElementById("viewDetailsSection");
        // const viewDetailsContainer = document.getElementById("viewDetailsContainer");

        // window[`ViewProduct${product.id}`] = ViewProductBtn;
        // window[AddProductId] = AddProductBtn;

        



        // ViewProductId.addEventListener("click", () => {
        //     viewDetailsSection.style.display = "block";
        //     viewDetailsContainer.innerHTML = `
        //         <img src="${product.image}" alt="${product.name}">
        //         <h2>${product.name}</h2>
        //         <p>${product.description}</p>
        //         <p class="price">$${product.price}</p>
        //         <div class="BtnContainer">
        //             <button class="addToCart" id="AddProduct1">Add to Cart</button>
        //             <button class="closeBtn" id="closeBtn">Close</button>
        //         </div>
        //     `;
        // });

        

    });


};


// Functionality for close button

        // Getting close button and adding event listener
        // const closeBtn = document.getElementById("closeBtn");
        // console.log(closeBtn);
        // closeBtn.addEventListener("click", () => {
        //     viewDetailsSection.style.display = "none";
        // });





// FUnctionalities for view details button

// Looping through the products array and getting the id's of the view details buttons and Add to Cart buttons

// products.forEach(product => {
//     const ViewProductId = `ViewProduct${product.id}`;
//     const AddProductId = `AddProduct${product.id}`;

//     const ViewProductBtn = document.getElementById(ViewProductId);
//     const AddProductBtn = document.getElementById(AddProductId);

//     window[ViewProductId] = ViewProductBtn;
//     window[AddProductId] = AddProductBtn;

//     ViewProductId.addEventListener("click", () => {
//         viewDetailsSection.style.display = "block";
//         viewDetailsContainer.innerHTML = `
//             <img src="${products[0].image}" alt="${products[0].name}">
//             <h2>${products[0].name}</h2>
//             <p>${products[0].description}</p>
//             <p class="price">$${products[0].price}</p>
//             <div class="BtnContainer">
//                 <button class="addToCart" id="AddProduct1">Add to Cart</button>
//                 <button class="closeBtn" id="closeBtn">Close</button>
//             </div>
//         `;
//     });

// });



// Getting Id's of all the view details buttons
// const ViewProduct1 = document.getElementById("ViewProduct1");
// const ViewProduct2 = document.getElementById("ViewProduct2");
// const ViewProduct3 = document.getElementById("ViewProduct3");
// const ViewProduct4 = document.getElementById("ViewProduct4");
// const ViewProduct5 = document.getElementById("ViewProduct5");
// const ViewProduct6 = document.getElementById("ViewProduct6");

// Adding event listeners to the view details buttons
// ViewProduct1.addEventListener("click", () => {
//     viewDetailsSection.style.display = "block";
//     viewDetailsContainer.innerHTML = `
//         <img src="${products[0].image}" alt="${products[0].name}">
//         <h2>${products[0].name}</h2>
//         <p>${products[0].description}</p>
//         <p class="price">$${products[0].price}</p>
//         <div class="BtnContainer">
//             <button class="addToCart" id="AddProduct1">Add to Cart</button>
//             <button class="closeBtn" id="closeBtn">Close</button>
//         </div>
//     `;
// });

// ViewProduct2.addEventListener("click", () => {
//     viewDetailsSection.style.display = "block";
//     viewDetailsContainer.innerHTML = `
//         <img src="${products[1].image}" alt="${products[1].name}">
//         <h2>${products[1].name}</h2>
//         <p>${products[1].description}</p>
//         <p class="price">$${products[1].price}</p>
//         <div class="BtnContainer">
//             <button class="addToCart" id="AddProduct2">Add to Cart</button>
//             <button class="closeBtn" id="closeBtn">Close</button>
//         </div>
//     `;
// });

// ViewProduct3.addEventListener("click", () => {
//     viewDetailsSection.style.display = "block";
//     viewDetailsContainer.innerHTML = `
//         <img src="${products[2].image}" alt="${products[2].name}">
//         <h2>${products[2].name}</h2>
//         <p>${products[2].description}</p>
//         <p class="price">$${products[2].price}</p>
//         <div class="BtnContainer">
//             <button class="addToCart" id="AddProduct3">Add to Cart</button>
//             <button class="closeBtn" id="closeBtn">Close</button>
//         </div>
//     `;
// });

// ViewProduct4.addEventListener("click", () => {
//     viewDetailsSection.style.display = "block";
//     viewDetailsContainer.innerHTML = `
//         <img src="${products[3].image}" alt="${products[3].name}">
//         <h2>${products[3].name}</h2>
//         <p>${products[3].description}</p>
//         <p class="price">$${products[3].price}</p>
//         <div class="BtnContainer">
//             <button class="addToCart" id="AddProduct4">Add to Cart</button>
//             <button class="closeBtn" id="closeBtn">Close</button>
//         </div>
//     `;
// });

// ViewProduct5.addEventListener("click", () => {
//     viewDetailsSection.style.display = "block";
//     viewDetailsContainer.innerHTML = `
//         <img src="${products[4].image}" alt="${products[4].name}">
//         <h2>${products[4].name}</h2>
//         <p>${products[4].description}</p>
//         <p class="price">$${products[4].price}</p>
//         <div class="BtnContainer">
//             <button class="addToCart" id="AddProduct5">Add to Cart</button>
//             <button class="closeBtn" id="closeBtn">Close</button>
//         </div>
//     `;
// });

// ViewProduct6.addEventListener("click", () => {
//     viewDetailsSection.style.display = "block";
//     viewDetailsContainer.innerHTML = `
//         <img src="${products[5].image}" alt="${products[5].name}">
//         <h2>${products[5].name}</h2>
//         <p>${products[5].description}</p>
//         <p class="price">$${products[5].price}</p>
//         <div class="BtnContainer">
//             <button class="addToCart" id="AddProduct6">Add to Cart</button>
//             <button class="closeBtn" id="closeBtn">Close</button>
//         </div>
//     `;
// });








