var navMenu = document.getElementById('navi-section'),
    menuButton = document.getElementById('menu__btn'),
    CloseButton = document.getElementById('close__btn');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        // navMenu.classList.add('Nav__shown');
        console.log("touced")
        menuButton.style.display="none";
        navMenu.style.top="0%";

    })

}

if (CloseButton) {
    CloseButton.addEventListener('click', () => {
        navMenu.classList.remove('Nav__shown');
        navMenu.style.top="-100%";
        menuButton.style.display="inline";
    })
}

//      only for nav bar
