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
const btnCta = document.getElementById('btn-cta');
const menu = document.getElementById('main-menu');
const srcClose = 'assets/close_48.svg';
const srcOpen = 'assets/burger_48.png';


let menuOpen = false;


btnBurger.addEventListener('pointerdown', () => {
    if (!menuOpen) {
        menu.style.display = 'flex';
        btnBurger.setAttribute('src', srcClose);
        menuOpen = true;
        return;
    }

    menu.style.display = 'none';
    btnBurger.setAttribute('src',srcOpen);
    menuOpen = false;
    return;
});

menu.addEventListener('pointerdown', (e) => {

    menu.style.display = 'none';
    btnBurger.setAttribute('src', srcOpen);
    menuOpen = false;
    if (e.target.hash != '') {
        lastHash = e.target.hash;
        e.target.click();
    }

});