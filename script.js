var bx_x = document.querySelector(".bx-x");
var bx_menu = document.querySelector(".bx-menu");
var menuList = document.querySelector(".menu-list");
var navBar = document.querySelector(".nav-bar");
console.log(navBar)
bx_menu.onclick = function () {showMenu()};
bx_x.onclick=function(){showMenu()};
window.onscroll = function(){navInteraction()}

function showMenu() {
    menuList.classList.toggle("toggle-menu")/*en el css creamos un estilo llamado toggle menu donde mostramos el menu, y lo que hace esta linea de codigo es servir de palanca para agregar y quitar ese estilo, el menu por defecto tiene el estilo de esconder el menu*/

    bx_menu.classList.toggle("toggle-bx-menu");/*el bx-menu tiene un index mas alto que el bx-x por lo que si aplicamos panaca/toggle se esconderá pero el bx-x se seguira viendo y hace lo mismo que bx-menu*/
}

function navInteraction(){
    console.log("ok")
    if(document.body.scrollTop>80 ||document.documentElement.scrollTop>80){
        navBar.classList.add("nav-interaction");
    }else{
        navBar.classList.remove("nav-interaction");
    }
}