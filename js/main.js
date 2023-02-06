const button = document.getElementById('btn-burger');
const menu = document.getElementById('main-menu');

let menuOpen = false;

button.addEventListener('pointerdown', () => {
    if (!menuOpen) {
        menu.classList.remove('hide-menu');
        button.setAttribute('src','assets/close_48.svg');
        menuOpen = true;
        return;
    }

    menu.classList.add('hide-menu');
    button.setAttribute('src','assets/menu_48.svg');
    menuOpen = false;
    return;


});