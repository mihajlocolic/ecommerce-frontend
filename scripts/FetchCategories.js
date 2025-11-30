const fetchedCategories = new Array();
const dropdownTrigger = document.getElementById("nav-dropdown");
const categoryDropdown = document.getElementById("category-dropdown");



function filterProducts(categoryId) {
    fetch(`https://ecommerce-api20251105080905-b7c5d8gbazahhhdw.canadacentral-01.azurewebsites.net/api/product?categoryId=${categoryId}`)
    .then(res => res.json())
    .then(data => {
        displayProducts(data);
    });
}

function fetchLocalCategories() {
    fetch('./scripts/OfflineCategories.json')
        .then(res => {
            if(!res.ok) {
                throw new Error(`HTTP ERROR: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
             data.forEach(category => {
                fetchedCategories.push(category);
            });
            fetchedCategories.forEach(category => {
            const dropdownItem = document.createElement("a");
            dropdownItem.textContent = category.Name;
            dropdownItem.dataset.categoryId = category.Id;
            dropdownItem.href = "#";
            categoryDropdown.appendChild(dropdownItem);

            categoryDropdown.addEventListener("click", (e) => {
                e.preventDefault();
                const categoryId = e.target.dataset.categoryId;
                filterProducts(categoryId);
            });
        });
        })
        .catch(error => console.error('Error loading JSON:', error));
    return
}

fetch("https://ecommerce-api20251105080905-b7c5d8gbazahhhdw.canadacentral-01.azurewebsites.net/api/category").then((res) => {
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
})
.catch(error => {
    console.error('Error fetching categories:', error);
    fetchLocalCategories();
});