import 'reset-css'
import '../styles/index.scss'
import './styles.scss'

import Glide from '@glidejs/glide'

const glide = new Glide('.glide', {
    gap: 0,
    perView: 3,
    focusAt: 'center',
    startAt: 1,
}).mount()

const services = [...document.querySelectorAll('.feature-desc')]

const toShow = i => {
    services.map((element, pos) => {
        element.style.display = (pos == i) ? 'block' : 'none'
    })
}

glide.on('move', () => toShow(glide.index))