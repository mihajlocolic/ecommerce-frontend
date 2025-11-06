const searchElement = document.getElementById("searchProduct");

function searchProduct(productName) {
    fetch(`https://ecommerce-api20251105080905-b7c5d8gbazahhhdw.canadacentral-01.azurewebsites.net/api/product?productName=${productName}`)
        .then(res => res.json())
        .then(data => displayProducts(data));
}

searchElement.addEventListener("input", (e) => {
    e.preventDefault();
    searchProduct(e.target.value);
});

