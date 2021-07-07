/*Hacemos que el menu hamburguer se abra y cierre*/
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerMenu = document.getElementById('hamburger-menu');

let HAMBURGER_IMG_DIC = {
    opened: 'assets/images/icon-close.svg',
    closed: 'assets/images/icon-hamburger.svg',
}

hamburgerButton.addEventListener('click', (e) => {
    hamburgerMenu.classList.toggle('hidden');
    let hamburgerImg = hamburgerButton.querySelector('img');
    if (hamburgerImg.getAttribute('src') === HAMBURGER_IMG_DIC['opened']) {
        hamburgerImg.setAttribute('src', HAMBURGER_IMG_DIC['closed']);
    } else {
        hamburgerImg.setAttribute('src', HAMBURGER_IMG_DIC['opened']);
    }
});

/*Hacemos que los submenus hamburger se abran y cierren*/
const hamburgerSubMenus = document.querySelectorAll('.hamburger-submenu');

for (let submenu of hamburgerSubMenus) {
    //eventos para las imagenes de mobil
    let imgList = submenu.querySelectorAll('h4 img.mobile-only-image');
    for (let img of imgList) {
        img.addEventListener('click', (e) => {
            submenu.classList.toggle('hidden');
            img.classList.toggle('flipped');
            submenu.querySelector('h4 span').classList.toggle('opened');
        });
    }
    //eventos para las imagenes de desktop
    imgList = submenu.querySelectorAll('h4 img.desktop-only-image');
    for (let img of imgList) {
        img.addEventListener('click', (e) => {
            img.classList.toggle('flipped');
            checkHiddenLarge(submenu)
        });
    }
}

function checkHiddenLarge(submenu){
    if(submenu.classList.contains('hidden-large')){
        for(let restSubmenu of hamburgerSubMenus) restSubmenu.classList.add('hidden-large')
    }
    submenu.classList.toggle('hidden-large')
}