let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let mylink = document.querySelector('.v-class');

burger.addEventListener("click", ()=>{
    navbar.classList.toggle('nav-res')
    mylink.classList.toggle('v-class')


})
