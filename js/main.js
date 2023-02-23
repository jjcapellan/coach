let lastHash = '';
let scrollHandler = () => { };

function scrollToHash(hash) {
    if (hash == '') return;

    hash = hash.substring(1);
    const el = document.getElementById(hash);
    let distance = Math.abs(el.offsetTop - window.scrollY);
    if (distance > 100) return;

    el.scrollIntoView(true);
};

function setBodyHeight() {
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
const msgs = [
    '¿Estás estancado en tu trabajo?',
    '¿Tus empleados no son competitivos?',
    '¿Te bloqueas cuando hablas en público?',
    '¿Tienes problemas de liderazgo?',
    '¿No sabes como afrontar un proceso de selección?',
    '¿Sientes que desperdicias el talento de tus empleados?',
    '¿Quieres reorientar tu carrera profesional?',
    '¿Sabes que hacer ante un conflicto laboral?'];

let msgCount = 0;
function popUpMsg() {    
    msg.style.opacity = '0';
    setTimeout(() => {
        msg.innerHTML = msgs[msgCount];
        msg.style.opacity = '1';
    }, 400);    
    msgCount++;
    if (msgCount >= msgs.length) {
        msgCount = 0;
    }
    setTimeout(popUpMsg, 3000);
}

popUpMsg();


//// Burger button behavior
////////////////////////////

const btnBurger = document.getElementById('btn-burger');
const btnCta = document.getElementById('btn-cta');
const menu = document.getElementById('burger-menu');
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
    btnBurger.setAttribute('src', srcOpen);
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

//// Contact form
///////////////////////////////////
const formContact = document.getElementById('contac-form');
const btnContact = document.getElementById('contac-btn');
const chkContact = document.getElementById('fprivacy');

btnContact.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    console.log(chkContact.checked);
    if (chkContact.checked) {
        alert('Tu mensaje se ha enviado. Gracias, te responderé lo antes posible.');
    } else {
        alert('Debes aceptar la política de privacidad para poder enviar tu mensaje.');
    }
});