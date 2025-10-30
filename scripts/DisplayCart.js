const cartElement = document.getElementById("cart");
const mainContainer = document.getElementById("main-container");
const cartItems = document.createElement("div");
const totalPrice = document.createElement("p");
let productsInCart = [];



cartElement.addEventListener("click", (e) => {
    e.preventDefault();
    mainContainer.innerHTML = "";

    displayCart();
});


 function removeFromCart(product, cartItem) {
    const index = productsInCart.indexOf(product);

    if(index > -1) {
        productsInCart.splice(index, 1);
    }

    // cartItems.removeChild(cartItem);
    displayCart();
    

    if(productsInCart.length < 1) {
        mainContainer.innerHTML = "There are no products in cart.";
    }
}


function displayCart() {

    document.getElementById("cart").innerHTML = (productsInCart.length > 0) ? `Cart (${productsInCart.length})` : "Cart";
    
    if(productsInCart.length < 1) {
        mainContainer.innerHTML = "There are no products in cart.";
        return;
    }

    
    cartItems.className = "cart-items";
    cartItems.innerHTML = "Cart items:";
    mainContainer.appendChild(cartItems);

    let total = 0.0;
    
    productsInCart.forEach((product) => {
        const price = parseFloat(product.dataset.price);
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML += `
        <p>${product.dataset.productId} - ${product.dataset.productName} $${price}</p>` 
        cartItems.appendChild(cartItem);
        total += price;

        const removeButton = document.createElement("div");
        removeButton.className = "remove-item";
        removeButton.innerHTML = "Remove";

        cartItem.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            removeFromCart(product, cartItem);
        });
    });

    

    totalPrice.className = "total-price";
    totalPrice.innerHTML = `Total: $${total}`;
    cartItems.append(totalPrice);


    const clearCart = document.createElement("button");
    clearCart.className = "clear-btn";
    clearCart.textContent = "Clear Cart";

    clearCart.addEventListener("click", () => {
        productsInCart = [];
        displayCart();
    });

    cartItems.appendChild(clearCart);

    const continueShoppingBtn = document.createElement("button");
    continueShoppingBtn.className = "continueShoppingBtn";
    continueShoppingBtn.textContent = "Continue Shopping";

    continueShoppingBtn.addEventListener("click", (e) => {
        e.preventDefault();

        mainContainer.innerHTML = "";
        const productsElement = document.createElement("div");
        productsElement.id = "products";
        mainContainer.appendChild(productsElement);
        fetchProducts();
    });

    cartItems.appendChild(continueShoppingBtn);
}


