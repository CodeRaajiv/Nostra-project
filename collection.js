//selecting offerbox button
const heading = document.getElementById("top")
const btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    heading.remove()
})

//Selecting checkbox
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const products = document.querySelectorAll('.product-card');
    const searchInput = document.querySelector('input[type="search"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
    }

    function filterProducts() {
        const selectedTypes = [...document.querySelectorAll('input[name="check"]:checked')].map(cb => cb.value.toLowerCase());
        const selectedColors = [...document.querySelectorAll('input[id="red"]:checked, input[id="blue"]:checked, input[id="white"]:checked')].map(cb => cb.value.toLowerCase());
        const selectedArrivals = [...document.querySelectorAll('input[id="new"]:checked, input[id="old"]:checked')].map(cb => cb.value.toLowerCase());
        const query = searchInput ? searchInput.value.toLowerCase() : "";

        products.forEach(product => {
            const type = product.dataset.type.toLowerCase();
            const color = product.dataset.color.toLowerCase();
            const arrival = product.dataset.arrival.toLowerCase();
            const title = product.querySelector("h2").textContent.toLowerCase();

            const matchType = selectedTypes.length === 0 || selectedTypes.includes(type);
            const matchColor = selectedColors.length === 0 || selectedColors.includes(color);
            const matchArrival = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);
            const matchSearch = title.includes(query);

            if (matchType && matchColor && matchArrival && matchSearch) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }
});


