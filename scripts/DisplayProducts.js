let productsInCart = [];

document.addEventListener("load", () => {
    productsInCart.forEach(product, () => {
        productsInCart.pop(product);
    });

});

function displayProducts(products) {
    const parentElement = document.getElementById("products");
    parentElement.innerHTML = "";
    if(products.length == 0) {
        parentElement.innerHTML = "<p>There's no available products for this category.</p>";
        return;
    }
    products.forEach(product => {
        // console.log(product);
        const childElement = document.createElement("div");
        childElement.innerHTML = `
        <h3>${product.name}</h3> 
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button id="addToCart" class="button">Add to cart</button>`;
        parentElement.appendChild(childElement);
        childElement.className = "product-card";
        childElement.dataset.productId = product.id;
        childElement.dataset.productName = product.name;
        childElement.dataset.categoryId = product.categoryId;
        childElement.dataset.price = product.price;


        const addButton = childElement.querySelector("#addToCart");
        addButton.addEventListener("click", () => {
            productsInCart.push(childElement);
            console.log(`Added product id ${childElement.dataset.productId} to cart array.`);
            document.getElementById("cart").innerHTML = `Cart (${productsInCart.length})`; 
        });
    });
}
