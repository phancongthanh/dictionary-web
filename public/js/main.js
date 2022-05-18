//menu
const menu=document.querySelector(".navbar-links")
const menuButton=document.querySelector(".navbar-icons")

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar-open");
    menuButton.classList.toggle("open");
})