const fetchedCategories = new Array();
const dropdownTrigger = document.getElementById("nav-dropdown");
const categoryDropdown = document.getElementById("category-dropdown");



function filterProducts(categoryId) {
    fetch(`http://localhost:5259/api/product?categoryId=${categoryId}`)
    .then(res => res.json())
    .then(data => {
        displayProducts(data);
    });
}

fetch("http://localhost:5259/api/category").then((res) => {
    if(!res.ok) {
        throw new Error(`HTTP ERROR: ${res.status}`);
    }
    return res.json()
    
}).then((data) => {
    data.forEach(category => {
        fetchedCategories.push(category);
    });
    fetchedCategories.forEach(category => {
        const dropdownItem = document.createElement("a");
        dropdownItem.textContent = category.name;
        dropdownItem.dataset.categoryId = category.id;
        dropdownItem.href = "#";
        categoryDropdown.appendChild(dropdownItem);

        categoryDropdown.addEventListener("click", (e) => {
            e.preventDefault();
            const categoryId = e.target.dataset.categoryId;
            filterProducts(categoryId);
        });
    });
});