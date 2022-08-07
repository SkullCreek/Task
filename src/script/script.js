// script
const hamburger_button = document.getElementById("hamburger");
const mobile_menu = document.getElementById("mobile-menu");
hamburger_button.onclick = () => {
    mobile_menu.style.display = "grid";
}

const crossbtn = document.getElementById("cross-btn");
crossbtn.onclick = () => {
    mobile_menu.style.display = "none";
}