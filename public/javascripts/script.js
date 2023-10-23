document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-button");
    const products = document.querySelectorAll(".product");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-filter");

            products.forEach(product => {
                const productCategory = product.getAttribute("data-category");
                if (category === "all" || productCategory === category) {
                    product.style.display = "block";
                    product.style.animation = "fadeIn 0.5s"; // Add a fade-in animation
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY >= 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function blurFunc(params) {
    var but = document.getElementById('blurbody');
    if (but.className == "main-container") {
        but.className += " blur-section";
    }  else {
        but.className = "main-container";
      }
    
}
