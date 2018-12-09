/**
 * Application entry point
 */

// Load application styles
import anime from 'animejs';
import inView from 'in-view';
import SmoothScroll from 'smooth-scroll';

import 'reset-css';
import 'styles/index.scss';
import 'js/hamburger.js';


document.addEventListener("DOMContentLoaded", () => {

//Modal 
const call = document.querySelector('.call')
const getInfo = document.querySelector('.hero .btn')
const close = document.querySelector('.modal__close')
const modal = document.querySelector('.modal-wrp')
const modalOverlay = document.querySelector('.modal-overlay')

const closeModal = () => {
    modal.classList.toggle('visible')
    modalOverlay.classList.toggle('visible')
}

const handleModal = () => {
    modal.classList.toggle('visible')
    modalOverlay.classList.toggle('visible')
}

getInfo.addEventListener('click', handleModal)
call.addEventListener('click', handleModal)
close.addEventListener('click', closeModal)

//Scroll
const scroll = new SmoothScroll('a[href*="#join"]', {
    speed: 1600
});


// Mouse animation
const mouse = anime({
    targets: '.mouse svg rect',
    translateY: [
        { value: 4 },
    ],
    direction: 'alternate',
    loop: true
})

// Numbers animation
const numVals = { packages: 0, size: 0, call: 0, clients: 0 };

const numbersAnim = anime({
    targets: numVals,
    packages: 20000,
    size: 1000,
    call: 700,
    clients: 400,
    easing: 'easeOutCubic',
    round: 1,
    autoplay: false,
    update: function() {
        const nums = document.querySelectorAll('.results__wrp .number');
        [...nums].map((num, i) => {
            const key = Object.keys(numVals)[i];
            num.innerText = (i == 0) ? numVals[key].toLocaleString('ru-RU') : numVals[key];
        });
    }
})

inView('.results__wrp')
    .on('enter', () =>  numbersAnim.play());


//Price comparison
const price = anime.timeline({
    easing: 'easeOutQuad',
    autoplay: false
}) 

const totalPercentage = { total: '0%' };

price
    .add({
        targets: document.querySelector('.price h3:first-of-type'),
        opacity: [0, 1],
    })
    .add({
        targets: document.querySelector('.price img'),
        translateX: ['-50', 0],
        opacity: [0, 1],
        offset: 0
    })
    .add({
        targets: document.querySelector('.price:last-of-type h3'),
        opacity: [0, 1],
    })
    .add({
        targets: document.querySelector('.price:last-of-type img'),
        translateX: ['-50', 0],
        opacity: [0, 1],
        offset: '-=1000'
    })
    .add({
        targets: document.querySelector('.price:last-of-type h3:last-of-type'),
        opacity: [0, 1]
    })
    .add({
        targets: document.querySelector('.price:last-of-type .total'),
        opacity: [0, 1],
        offset: '-=1000'
    })
    .add({
        targets: totalPercentage,
        total: '38%',
        round: 1,
        easing: 'easeOutCubic',
        offset: '-=1000',
        update: function() {
            const percents = document.querySelector('.price .total');
            percents.innerText = totalPercentage.total;
        }
    })

inView('.comparison-right')
    .on('enter', () =>  price.play());

// Rocket launch
const launch = anime.timeline({
    easing: 'easeInCubic',
    autoplay: false,
    loop: false
});

const shuttle = document.querySelector('.shuttle.plane img:first-child');
const smoke = document.querySelector('.shuttle.plane img:last-child');

launch
    .add({
        targets: smoke,
        translateY: 100,
        duration: 600,
        opacity: 0,
        offset: 0
    })
    .add({
        targets: shuttle,
        translateY: -700,
        offset: 0
    })
    .add({
        targets: shuttle,
        opacity: 0,
        offset: '-=600'
    })

document.querySelector('.btn-join').onclick = launch.play;

})