var bx_x = document.querySelector(".bx-x");
var bx_menu = document.querySelector(".bx-menu");
var menuList = document.querySelector(".menu-list");
var navBar = document.querySelector(".nav-bar");
bx_menu.onclick = function () {showMenu()};
bx_x.onclick=function(){showMenu()};
window.onscroll = function(){navInteraction()}

function showMenu() {
    menuList.classList.toggle("toggle-menu");
    bx_menu.classList.toggle("toggle-bx-menu");
}

function navInteraction(){
    if(document.body.scrollTop>80 ||document.documentElement.scrollTop>80){
        navBar.classList.add("nav-interaction");
    }else{
        navBar.classList.remove("nav-interaction");
    }
}