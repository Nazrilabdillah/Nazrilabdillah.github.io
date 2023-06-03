const menu =document.querySelector("#mnu")
const navbar =document.querySelector(".navbar-list")
menu.addEventListener("click",function(){
  navbar.classList.toggle("active")
});