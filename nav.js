// Récupération des éléments du DOM

const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const modaleMenu = document.getElementById("modaleMenu");

const menuItems = document.querySelectorAll(".modaleHeader__link");
console.log(menuItems);

// Ecoutes d'évenements des boutons

openButton.addEventListener("click", function(e){
    openCloseMenu(100);
})

closeButton.addEventListener("click", function(e){
    openCloseMenu(0);
})

menuItems.forEach(item => {
    item.addEventListener("click", function(e){
        openCloseMenu(0);
    })
})

// Fonction ouvrant ou fermant le menu

function openCloseMenu(width){
    modaleMenu.style.width = `${width}%`;
}