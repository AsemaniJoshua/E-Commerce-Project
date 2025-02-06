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
    checkout();
});

// Getting customerProducts array from localStorage
const customerProducts = JSON.parse(localStorage.getItem("customerProducts"));
console.log(customerProducts);

// Getting Html Elements
const cart_content = document.getElementById("cart_content");
const total = document.getElementById("total");
const number_of_items = document.getElementById("number_of_items");


// Calculating total price
function calculateTotalPrice() {
    return customerProducts.reduce((total, product) => total + product.quantity * product.price, 0);
}


// Function to display cart content
function displayCartContent() {
    
    // Clearing previous content
    cart_content.innerHTML = "";

    // Setting total and quantity to 0
    total.innerHTML = "Total: $0";
    let totalPrice = calculateTotalPrice();

    // Displaying number of items
    // number_of_items.innerHTML = `Number of items: ${customerProducts.length}`;
    number_of_items.innerHTML = `Number of items: ${customerProducts.reduce((total, product) => total + product.quantity, 0)}`;



    // Looping through customerProducts array
    customerProducts.forEach( (product, index) => {
        
        // Creating a new div element for each product
        cart_content.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="cart_item_details">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Quantity: ${product.quantity}</p>
                    <button class="remove_btn" id="removeProduct${index}" data-id="${index}">Remove</button>
                </div>
            </div>
        `;

        // // Adding price to total
        // totalPrice += product.price;
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
            const productIndex1 = event.target.getAttribute("data-id"); 
            const productIndex2 = customerProducts.findIndex(p => p.id == productIndex1);
            if (productIndex2 !== -1) {
                if (customerProducts[productIndex2].quantity > 1) {
                    customerProducts[productIndex2].quantity -= 1;
                } 
                else {
                    customerProducts.splice(productIndex2, 1);
                }
                localStorage.setItem("customerProducts", JSON.stringify(customerProducts)); 
                console.log(`Product removed from cart.`); 
                // alert(`Product removed from cart.`);
                // Displaying Toast Notification
                showToast2(); 
                displayCartContent(); 
            } 
        } 
    });
}



// // Functionality for Toast Notification
// function showToast() { 
//     const toast = document.getElementById("toast"); 
//     toast.className = "toast show"; 
//     setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000); 
// }

// Functionality for Toast Notification
function showToast2() { 
    const toast = document.getElementById("toast2"); 
    toast.className = "toast show"; 
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000); 
}

// Functionality for Checkout Button
function checkout() {
    const checkoutForm = document.getElementById("checkoutForm");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const closeCheckoutForm = document.getElementById("closeCheckoutForm");

    // Adding event listener to checkout button
    checkoutBtn.addEventListener("click", () => {
        checkoutForm.style.display = "block";
    });

    // Adding event listener to close checkout form
    closeCheckoutForm.addEventListener("click", () => {
        checkoutForm.style.display = "none";
    });
    
}

