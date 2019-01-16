import 'reset-css'
import '../styles/index.scss'
import './styles.scss'
import './media.scss'
import '../js/hamburger.js'
import '../js/modal'

import Glide from '@glidejs/glide'
import anime from 'animejs'
import {animate} from './anim'
import inView from 'in-view'

animate()

document.addEventListener("DOMContentLoaded", () => {
    
const glide = new Glide('.glide', {
    type: 'carousel',
    gap: 0,
    perView: 3,
    focusAt: 'center',
    startAt: 0,
    breakpoints: {
        1000: {
            perView: 1
        }
    }
}).mount()

const services = [...document.querySelectorAll('.feature-desc')]

const toShow = i => {
    services.map((element, pos) => {
        element.style.display = (pos == i) ? 'block' : 'none'
    })
}

glide.on('move', () => toShow(glide.index))

// Image animations

anime({
    targets: 'svg.agregator g#Layer_2, svg.call g#Layer_2',
    translateY: -10,
    direction: 'alternate',
    duration: 800,
    loop: true,
    easing: 'linear'
})

inView('.dostavka')
        .on('enter', () =>{
            anime({
                targets: 'svg.dostavka g#Layer_2',
                translateX: 300,
                translateY: -100,
                duration: 8000,
                easing: 'easeInOutQuad'
            })
        });

})