let lastHash = '';
let scrollHandler = () => { };

function scrollToHash(hash) {
    if (hash == '') return;
    hash = hash.substring(1);
    const el = document.getElementById(hash);
    el.scrollIntoView({ inline: 'start' });
};

function setBodyHeight() {
    document.body.style.height = window.innerHeight + 'px';
    requestAnimationFrame(() => {
        scrollToHash(lastHash);
    });
}

window.addEventListener("resize", setBodyHeight);
setBodyHeight();

screen.orientation.addEventListener('change', () => {

    requestAnimationFrame(() => {
        scrollToHash(lastHash);
    });

});

//// Header animation
////////////////////////////

const msg = document.getElementById('header-msg');
const msgs = ['¿Eres un trabajador y quieres impulsar tu carrera profesional?',
    '¿Eres un empresario y necesitas equipos de trabajo con mejor motivación, rendimiento y eficiencia?'];

let letterCount = 1;
let msgCount = 0;

function addLetter() {
    msg.innerHTML = msgs[msgCount].substring(0, letterCount);
    letterCount++;
    if (letterCount > msgs[msgCount].length) {
        letterCount = 1;
        msgCount++;
        if (msgCount >= msgs.length) {
            msgCount = 0;
        }
        setTimeout(addLetter, 2000);
        return;
    }
    setTimeout(addLetter, 40);
}

addLetter();


//// Burger button behavior
////////////////////////////

const btnBurger = document.getElementById('btn-burger');
const burgerPath = btnBurger.getElementsByTagName('path').item(0);
const btnCta = document.getElementById('btn-cta');
const menu = document.getElementById('main-menu');

const openPath = 'M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z';
const closePath = 'm12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z';


let menuOpen = false;


btnBurger.addEventListener('pointerdown', () => {
    if (!menuOpen) {
        menu.style.display = 'flex';
        burgerPath.setAttribute('d', closePath);
        menuOpen = true;
        return;
    }

    menu.style.display = 'none';
    burgerPath.setAttribute('d', openPath);
    menuOpen = false;
    return;
});

menu.addEventListener('pointerdown', (e) => {

    menu.style.display = 'none';
    burgerPath.setAttribute('d', openPath);
    menuOpen = false;
    if (e.target.hash != '') {
        lastHash = e.target.hash;
        e.target.click();
    }

});