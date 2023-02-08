const button = document.getElementById('btn-burger');
const btnPath = button.getElementsByTagName('path').item(0);
const menu = document.getElementById('main-menu');

const openPath = 'M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z';
const closePath = 'm12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z';


let menuOpen = false;

button.addEventListener('pointerdown', () => {
    if (!menuOpen) {
        menu.classList.remove('hide-menu');
        btnPath.setAttribute('d', closePath);
        btnPath.setAttribute('fill', '#ffffff');
        menuOpen = true;
        return;
    }

    menu.classList.add('hide-menu');
    btnPath.setAttribute('d', openPath);
    btnPath.setAttribute('fill', '#222222');
    menuOpen = false;
    return;
});