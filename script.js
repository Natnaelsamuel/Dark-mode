const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinksMobile = document.getElementById("nav-links-mobile");
const navLinksDesktop = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
    navLinksMobile.style.display = "block";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    navLinksMobile.style.display = "none";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

function initializeTheme() {
    const body = document.body;
    if (body.getAttribute("data-theme") === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
}

function handleResize() {
    if (window.innerWidth > 768) {
        navLinksMobile.style.display = "none";
        navLinksDesktop.style.display = "flex";
        menuIcon.style.display = "none";
        closeIcon.style.display = "none";
    } else {
        navLinksMobile.style.display = "none";
        navLinksDesktop.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}

// Initialize theme and handle resize on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    handleResize();
});

// Handle window resize event
window.addEventListener("resize", handleResize);