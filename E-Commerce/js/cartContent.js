// waiting for Browser to load
async function waitingForBrowser() {
    await new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", resolve);
    });
    console.log("Page loaded");
}

// After the Browser has loaded
waitingForBrowser().then(() => {
    displayCartContent();
    removeItem();
});

// Getting customerProducts array from localStorage
const customerProducts = JSON.parse(localStorage.getItem("customerProducts"));
console.log(customerProducts);

// Getting Html Elements
const cart_content = document.getElementById("cart_content");
const total = document.getElementById("total");
const number_of_items = document.getElementById("number_of_items");




// Function to display cart content
function displayCartContent() {
    
    // Clearing previous content
    cart_content.innerHTML = "";

    // Setting total and quantity to 0
    total.innerHTML = "Total: $0";
    let totalPrice = 0;
    let quantity = 0;
    number_of_items.innerHTML = `Number of items: ${customerProducts.length}`;



    // Looping through customerProducts array
    customerProducts.forEach( (product, index) => {
        
        // Creating a new div element for each product
        cart_content.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="cart_item_details">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button class="remove_btn" id="removeProduct${index}" data-id="${index}">Remove</button>
                </div>
            </div>
        `;

        // Adding price to total
        totalPrice += product.price;
    });

    // Displaying total
    total.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
}

// Functionality for removeProductBtn
// function removeItem(){
//     customerProducts.forEach( (product, index) => {
//         const removeProductId = `removeProduct${index}`;
//         const removeProductBtn = document.getElementById(removeProductId);

//         if(event.target && event.target.id === "closeBtn"){
//             removeProductBtn.addEventListener("click", () => {
//                 // Removing product from customerProducts array
//                 customerProducts.splice(index, 1);
//                 localStorage.setItem("customerProducts", JSON.stringify(customerProducts));
//                 console.log(`Product ${product.name} removed from cart.`);
//                 alert(`Product ${product.name} removed from cart.`);
//                 displayCartContent();
//             });
//         }
//     });
// }


// Functionality for removeProductBtn 
function removeItem() { 
    cart_content.addEventListener("click", (event) => { 
        if (event.target && event.target.classList.contains("remove_btn")) { 
            const productIndex = event.target.getAttribute("data-id"); 
            if (productIndex !== null) { 
                // Removing product from customerProducts array 
                customerProducts.splice(productIndex, 1); 
                localStorage.setItem("customerProducts", JSON.stringify(customerProducts)); 
                console.log(`Product removed from cart.`); 
                alert(`Product removed from cart.`); 
                displayCartContent(); 
            } 
        } 
    });
}


