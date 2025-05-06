const hamburgerr = document.getElementById("hamburger");
const navLink = document.getElementById("nav-link");

hamburgerr.addEventListener("click", () =>{
    navLink.classList.toggle("hidden");
})