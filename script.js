
const humbergur = document.getElementsByClassName("humbergur")[0];
const hero = document.getElementsByClassName("hero")[0];


var navLinks = document.getElementsByClassName("nav-links")[0];
var navBar = document.getElementsByClassName("navbar")[0];
let center = document.getElementsByClassName("content-center")[0];
let check = true;
humbergur.onclick = ()=>{

    navLinks.classList.toggle("showMenu");
    hero.classList.toggle("heroHidden");
    /*navLinks.classList.toggle("navBlack");
    navBar.classList.toggle("navBlack");*/
    center.classList.toggle("navBlack");

    if(check === true){
        document.getElementsByClassName("humbergur")[0].getElementsByTagName("img")[0].src = "./images/icon-close.svg";
        check = false;
    }else{
        document.getElementsByClassName("humbergur")[0].getElementsByTagName("img")[0].src = "./images/icon-hamburger.svg";
        check = true;
    }
}




