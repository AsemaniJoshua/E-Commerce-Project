// Displaying the products when the Page loads
function displayProducts() {
    const productContainer = document.getElementById("productCardContainer");

    HomePageProducts.forEach(product => {
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

        const LinkToProduct = document.createElement("a");
        LinkToProduct.href = `Products.html`;
        LinkToProduct.setAttribute("id", "To_product_page_link");

        const Go_to_product_page = document.createElement("button");
        Go_to_product_page.textContent = "View in product page";
        Go_to_product_page.classList.add("view_in_product_page");



        productCard.appendChild(ProductImage);
        productCard.appendChild(ProductName);
        productCard.appendChild(ProductDescription);
        productCard.appendChild(ProductPrice);
        LinkToProduct.appendChild(Go_to_product_page)
        productCard.appendChild(LinkToProduct);

        productContainer.appendChild(productCard);
    });
}


// Page load logic
async function waitingForBrowser() {
    await new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", resolve);
    });
    console.log("Page loaded");
}


// calling the Asynchronous Function
waitingForBrowser().then(() => {
    displayProducts();
});









// Importing HomePageProducts from product.js
import { HomePageProducts } from './product.js';