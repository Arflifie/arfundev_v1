function hamburger() {
    const MobileMenu = document.getElementById("MobileMenu");
    MobileMenu.classList.toggle("hidden");
}

// Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// TypeIt
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typeIT", {
        speed: 140,
        startDelay: 500,
        strings: [""],
    })
        .pause(200)
        .delete(19, { speed: 150, startDelay: 500 })
        .type("My Name Arfun Ali Yafie", { delay: 150, startDelay: 500 })
        .go();
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".about", {
        speed: 30,
        startDelay: 100,
        strings: [""],
    })
        // .pause(200)
        // .delete(19, { speed: 150, startDelay: 500 })
        // .type("My Name Arfun Ali Yafie", { delay: 150, startDelay: 500 })
        .go();
});