import 'reset-css'
import '../styles/index.scss'
import './styles.scss'
import './media.scss'

import '../js/hamburger.js';


import Glide from '@glidejs/glide'

const glide = new Glide('.glide', {
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