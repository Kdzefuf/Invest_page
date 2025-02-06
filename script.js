document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let header = document.querySelector(".header");
        let hero = document.querySelector(".hero");
        let features = document.querySelector(".features-container");
        if (window.scrollY > 500) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        if (window.scrollY > hero.offsetTop + 500) {
            hero.classList.add("unvisible");
        } 
        if (window.scrollY <= hero.offsetTop + 500) {
            hero.classList.remove("unvisible");
        }
        if (window.scrollY > features.offsetTop - 700) {
            features.classList.add("visible");
        }
        if (window.scrollY < features.offsetTop - 700 || window.scrollY > features.offsetTop + 300) {
            features.classList.remove("visible");
        }

        const burgerButton = document.querySelector(".burger");
        const headerNav = document.querySelector(".header-nav");

        burgerButton.addEventListener("click", () => {
            headerNav.classList.toggle("active");
        });
    });
});