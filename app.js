const sideMenu = document.querySelector("#side-menu");
const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#close-img");
const btnContact = document.querySelector("#contact-btn");


btnMenu.addEventListener('click',function(){
    sideMenu.style.width="100%";
})

btnClose.addEventListener('click',function(){
    sideMenu.style.width="0";
})

btnContact.addEventListener('click',function(){
    sideMenu.style.width="0";
})
