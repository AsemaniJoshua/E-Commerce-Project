// localStorage.clear();

// Getting customerProducts array from localStorage or initializing it
let customerProducts = JSON.parse(localStorage.getItem("customerProducts")) || [];

// Function to update cart count display
function updateCartCount() {
    // Cart Item counter
    let cartCount = customerProducts.length;

    // Updating cart count in stylesheet
    let StyleSheet = document.styleSheets[0];
    for (let i = 0; i < StyleSheet.cssRules.length; i++) {
        let rules = StyleSheet.cssRules[i];
        if (rules.selectorText == ".active::after") {
            rules.style.display = "block";
            rules.style.content = `"${cartCount}"`;
        }
    }
}

// Displaying the products when the Page loads
function displayProducts() {
    const productContainer = document.getElementById("productContainer");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");

        const ProductImage = document.createElement("img");
        ProductImage.src = product.image;
        ProductImage.alt = product.name;

        const ProductName = document.createElement("h2");
        ProductName.textContent = product.name;

        const ProductDescription = document.createElement("p");
        ProductDescription.textContent = product.description;

        const ProductPrice = document.createElement("p");
        ProductPrice.textContent = `$${product.price}`;

        const ViewDetailsBtn = document.createElement("button");
        ViewDetailsBtn.textContent = "View Details";
        ViewDetailsBtn.classList.add("viewDetailsBtn");
        ViewDetailsBtn.setAttribute("id", `ViewProduct${product.id}`);

        const AddToCartBtn = document.createElement("button");
        AddToCartBtn.textContent = "Add to Cart";
        AddToCartBtn.classList.add("addToCartBtn");
        AddToCartBtn.setAttribute("id", `AddProduct${product.id}`);

        productCard.appendChild(ProductImage);
        productCard.appendChild(ProductName);
        productCard.appendChild(ProductDescription);
        productCard.appendChild(ProductPrice);
        productCard.appendChild(ViewDetailsBtn);
        productCard.appendChild(AddToCartBtn);

        productContainer.appendChild(productCard);
    });
}

// Function to attach event listeners
function attachEventListenersForViewDetails() {
    products.forEach(product => {
        const ViewProductId = `ViewProduct${product.id}`;
        const ViewProductBtn = document.getElementById(ViewProductId);

        if (ViewProductBtn) {
            ViewProductBtn.addEventListener("click", () => {
                const viewDetailsSection = document.getElementById("viewDetailsSection");
                const viewDetailsContainer = document.getElementById("viewDetailsContainer");

                viewDetailsSection.style.display = "block";
                viewDetailsContainer.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="price">$${product.price}</p>
                    <div class="BtnContainer">
                        <button class="addToCart" id="AddProduct${product.id}">Add to Cart</button>
                        <button class="closeBtn" id="closeBtn">Close</button>
                    </div>
                `;
            });
        }
    });
}

// Functionality for close button
document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "closeBtn") {
        const viewDetailsSection = document.getElementById("viewDetailsSection");
        viewDetailsSection.style.display = "none";
    }
});

// Functionality for Add to Cart button
function addToCartEventListeners() {
    products.forEach(product => {
        const AddProductId = `AddProduct${product.id}`;
        const AddProductBtn = document.getElementById(AddProductId);

        if (AddProductBtn) {
            document.addEventListener("click", (event) => {
                if (event.target && event.target.id === `AddProduct${product.id}`) {
                    // Adding product to cart
                    customerProducts.push(product);
                    // Storing customerProducts in localStorage
                    localStorage.setItem("customerProducts", JSON.stringify(customerProducts));

                    // Update cart count display
                    updateCartCount();

                    // Displaying message
                    console.log(`Added ${product.name} to cart`);
                    alert(`Added ${product.name} to cart`);
                }
            });
        }
    });
}

// Page load logic
async function waitingForBrowser() {
    await new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", resolve);
    });
    console.log("Page loaded");
}

waitingForBrowser().then(() => {
    console.log("localStorage checked");
    displayProducts();
    attachEventListenersForViewDetails(); // Attach event listeners after products are displayed
    addToCartEventListeners();
    updateCartCount(); // Update cart count display when page loads
});

// Importing Products from product.js
import { products } from './product.js';

export { customerProducts };




































































































































































































































// // localStorage.clear();
// async function waitingForBrowser() {
//     await new Promise(resolve => {
//         document.addEventListener("DOMContentLoaded", resolve);
//     });
//     console.log("Page loaded");
// }

// waitingForBrowser().then(() => {
//     // clearing the localStorage
//     if (JSON.parse(localStorage.getItem("customerProducts"))) {
//         console.log("localStorage is not empty");
//         // Cart Item counter
//         let cartCount = 0;
//         // Displaying Number of items in cart
//         // Incrementing cart count
//         cartCount = JSON.parse(localStorage.getItem("customerProducts"));
//         cartCount = cartCount.length;
//         // Updating cart count in stylesheet
//         let StyleSheet=document.styleSheets[0];
//         for(let i=0;i<StyleSheet.cssRules.length;i++){
//             let rules=StyleSheet.cssRules[i];
//             if(rules.selectorText==".active::after"){
//                 rules.style.display="block";
//                 rules.style.content = `"${cartCount}"`;
//             }
//         }
//     }
//     else{
//         console.log("localStorage is empty");
//         localStorage.clear();
//     }
//     displayProducts();
//     attachEventListenersForViewDetails(); // Attach event listeners after products are displayed
//     addToCartEventListeners();
// });


// // Importing Products from product.js
// import {products} from './product.js';

// // Initializing customerProducts array
// const customerProducts = [];

// // Console logging the products array
// console.log(products);

// // Displaying the products when the Page loads
// function displayProducts() {

//     const productContainer = document.getElementById("productContainer");

//     products.forEach(product => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("card");

//         const ProductImage = document.createElement("img");
//         ProductImage.src = product.image;
//         ProductImage.alt = product.name;

//         const ProductName = document.createElement("h2");
//         ProductName.textContent = product.name;

//         const ProductDescription = document.createElement("p");
//         ProductDescription.textContent = product.description;

//         const ProductPrice = document.createElement("p");
//         ProductPrice.textContent = `$${product.price}`;

//         const ViewDetailsBtn = document.createElement("button");
//         ViewDetailsBtn.textContent = "View Details";
//         ViewDetailsBtn.classList.add("viewDetailsBtn");
//         ViewDetailsBtn.setAttribute("id", `ViewProduct${product.id}`);

//         const AddToCartBtn = document.createElement("button");
//         AddToCartBtn.textContent = "Add to Cart";
//         AddToCartBtn.classList.add("addToCartBtn");
//         AddToCartBtn.setAttribute("id", `AddProduct${product.id}`);

//         productCard.appendChild(ProductImage);
//         productCard.appendChild(ProductName);
//         productCard.appendChild(ProductDescription);
//         productCard.appendChild(ProductPrice);
//         productCard.appendChild(ViewDetailsBtn);
//         productCard.appendChild(AddToCartBtn);

//         productContainer.appendChild(productCard);
//     });
// }

// // Function to attach event listeners
// function attachEventListenersForViewDetails() {
//     products.forEach(product => {
//         const ViewProductId = `ViewProduct${product.id}`;
//         const ViewProductBtn = document.getElementById(ViewProductId);

//         if (ViewProductBtn) {
//             ViewProductBtn.addEventListener("click", () => {
//                 const viewDetailsSection = document.getElementById("viewDetailsSection");
//                 const viewDetailsContainer = document.getElementById("viewDetailsContainer");

//                 viewDetailsSection.style.display = "block";
//                 viewDetailsContainer.innerHTML = `
//                     <img src="${product.image}" alt="${product.name}">
//                     <h2>${product.name}</h2>
//                     <p>${product.description}</p>
//                     <p class="price">$${product.price}</p>
//                     <div class="BtnContainer">
//                         <button class="addToCart" id="AddProduct${product.id}">Add to Cart</button>
//                         <button class="closeBtn" id="closeBtn">Close</button>
//                     </div>
//                 `;
//             });
//         }
//     });
// }

// // Functionality for close button
// document.addEventListener("click", (event) => {
//     if (event.target && event.target.id === "closeBtn") {
//         const viewDetailsSection = document.getElementById("viewDetailsSection");
//         viewDetailsSection.style.display = "none";
//     }
// });


// // Functionality for Add to Cart button


// function addToCartEventListeners() {
//     products.forEach(product => {
//         const AddProductId = `AddProduct${product.id}`;
//         const AddProductBtn = document.getElementById(AddProductId);

//         if (AddProductBtn) {
//             document.addEventListener("click", (event) => {
//                 if(event.target && event.target.id === `AddProduct${product.id}`){
                    

//                     // Adding product to cart
//                     customerProducts.push(product);
//                     // Storing customerProducts in localStorage
//                     localStorage.setItem("customerProducts", JSON.stringify(customerProducts));

//                     // Cart Item counter
//                     let cartCount = 0;

//                     // Incrementing cart count
//                     cartCount = JSON.parse(localStorage.getItem("customerProducts"));
//                     cartCount = cartCount.length;

//                     // Updating cart count in stylesheet
//                     let StyleSheet=document.styleSheets[0];
//                     for(let i=0;i<StyleSheet.cssRules.length;i++){
//                         let rules=StyleSheet.cssRules[i];
//                         if(rules.selectorText==".active::after"){
//                             rules.style.display="block";
//                             rules.style.content = `"${cartCount}"`;
//                         }
//                     }

//                     // console.log(localStorage.getItem("customerProducts"));
//                     console.log(JSON.parse(localStorage.getItem("customerProducts")));
//                     // console.log(customerProducts);

//                     // Displaying message
//                     console.log(`Added ${product.name} to cart`);
//                     alert(`Added ${product.name} to cart`);
//                 }
//             });
//         }
//     });
// }


// export {customerProducts};

