/**
 * Application entry point
 */

// Load application styles
import anime from 'animejs';
import inView from 'in-view';

import 'reset-css';
import 'styles/index.scss';
import 'js/hamburger.js';

// Mouse animation
// const numbersAnim = anime({
//     targets: '.mouse rect',
//     translateY: [
//         { value: -10 },
//         { value: 10 }
//     ],
// })

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

// Icon animations

// const icons = anime({
//     targets: `.service__icon path:not([fill="white"]):nth-of-type(2)`,
//     translateX: -10,
//     direction: 'alternate',
//     delay: function(el, i, l) {
//         return i * 100;
//     },
//     loop: true
// })

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