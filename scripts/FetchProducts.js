fetch("http://localhost:5259/api/product").then((res) => {
    if(!res.ok) {
        throw new Error(`HTTP ERROR: ${res.status}`);
    }
    return res.json()
    
}).then((data) => {
    displayProducts(data);
});
