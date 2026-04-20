function hamburger() {
    const MobileMenu = document.getElementById("MobileMenu");
    MobileMenu.classList.toggle("hidden");
}

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