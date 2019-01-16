/**
 * Application entry point
 */

// Load application styles
import anime from 'animejs';
import inView from 'in-view';
import SmoothScroll from 'smooth-scroll';
import Typed from 'typed.js';

import 'reset-css';
import 'styles/index.scss';
import 'js/hamburger';
import 'js/modal';


document.addEventListener("DOMContentLoaded", () => {

    // Marker
    if (window.screen.width > 600) {
        const marker = document.querySelector('.map-marker')

        const markerTimeline = anime.timeline({
            targets: marker,
            easing: 'easeInCubic',
            loop: true,
        })

        markerTimeline
            .add({
                translateX: -150,
                opacity: 0
            })
            .add({
                delay: 1000,
                rotate: {
                    value: -45,
                    duration: 0
                },
                translateX: [0, -340],
                opacity: [0, 1, 0]
            })
            .add({
                delay: 1000,
                rotate: {
                    value: '140deg',
                    duration: 0
                },
                translateX: [0, -150],
                opacity: [0, 1, 0]
            })
            .add({
                delay: 1000
            })
    }

    const getInfo = document.querySelector('.hero .btn')
    getInfo.onclick = () => window.location = '/#join';

    const typed = new Typed('.hero__capt', {
        strings: ['Маштабирование Вашего бизнеса'],
        typeSpeed: 30,
        showCursor: false
    });

    //Scroll
    const scroll = new SmoothScroll('a[href*="#join"]', {
        speed: 1600,
        speedAsDuration: true
    });


    // Mouse animation
    const mouse = anime({
        targets: '.mouse svg rect',
        translateY: [{
            value: 4
        }, ],
        direction: 'alternate',
        loop: true
    })

    // Numbers animation
    const numVals = {
        packages: 0,
        size: 0,
        call: 0,
        clients: 0
    };

    const numbersAnim = anime({
        targets: numVals,
        packages: 20000,
        size: 1000,
        call: 700,
        clients: 400,
        easing: 'easeOutCubic',
        round: 1,
        autoplay: false,
        update: function () {
            const nums = document.querySelectorAll('.results__wrp .number');
            [...nums].map((num, i) => {
                const key = Object.keys(numVals)[i];
                num.innerText = (i == 0) ? numVals[key].toLocaleString('ru-RU') : numVals[key];
            });
        }
    })

    inView('.results__wrp')
        .on('enter', () => numbersAnim.play());


    //Services
    const services = anime({
        targets: '.service',
        opacity: [0, 1],
        translateX: [-30, 0],
        delay: function (el, i, l) {
            return i * 200;
        },
        easing: 'easeOutQuad',
        autoplay: false
    })

    inView('.services__wrp')
        .on('enter', () => services.play());


    //Price comparison
    const price = anime.timeline({
        easing: 'easeOutQuad',
        autoplay: false
    })

    const totalPercentage = {
        total: '0%'
    };

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
            update: function () {
                const percents = document.querySelector('.price .total');
                percents.innerText = totalPercentage.total;
            }
        })

    inView('.comparison-right')
        .on('enter', () => price.play());

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
