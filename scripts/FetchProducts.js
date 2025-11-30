function fetchLocalProducts() {
    fetch('./scripts/OfflineProducts.json')
        .then(res => {
            if(!res.ok) {
                throw new Error(`HTTP ERROR: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            displayProducts(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function fetchProducts() {
    fetch("https://ecommerce-api20251105080905-b7c5d8gbazahhhdw.canadacentral-01.azurewebsites.net/api/product")
        .then((res) => {
            if(!res.ok) {
                throw new Error(`HTTP ERROR: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            fetchLocalProducts();
        });
}

fetchProducts();