
const cartElement = document.getElementById("cart");
const mainContainer = document.getElementById("main-container");

cartElement.addEventListener("click", (e) => {
    e.preventDefault();
    mainContainer.innerHTML = "";

    if(productsInCart.length < 1) {
        mainContainer.innerHTML = "There are no products in cart.";
        return;
    }

    const cartItems = document.createElement("div");
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
    });

    cartItems.append(`Total: $${total}`);
});


