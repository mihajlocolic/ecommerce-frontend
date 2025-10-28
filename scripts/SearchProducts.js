const searchElement = document.getElementById("searchProduct");

function searchProduct(productName) {
    fetch(`http://localhost:5259/api/product?productName=${productName}`)
        .then(res => res.json())
        .then(data => displayProducts(data));
}

searchElement.addEventListener("input", (e) => {
    e.preventDefault();
    searchProduct(e.target.value);
});

