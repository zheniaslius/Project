import 'reset-css'
import '../styles/index.scss'
import './styles.scss'

import Glide from '@glidejs/glide'

const glide = new Glide('.glide', {
    perView: 3,
    focusAt: 'center',
    startAt: 1,
}).mount()

const services = [...document.querySelectorAll('.feature-desc')]

const getNext = i => {
    services.map((element, pos) => {
        element.style.display = (pos == i) ? 'block' : 'none'
    })
    // const toShow = services[i] 
    // toShow.style.display = 'block'
}

glide.on('move', () => getNext(glide.index))

const next = document.querySelector('.arrow-next')
const prev = document.querySelector('.arrow-prev')


// const getPrevious = i => {
//     const prevItem = document.querySelector(`body > section:nth-of-type(${(i == 6) ? 1 : i+1})`)
//     prevItem.style.display = 'none'
//     const toShow = document.querySelector(`body > section:nth-of-type(${i})`)
//     toShow.style.display = 'block'
// }

// let i = 1
// next.addEventListener('click', () => {
//     i = (i < 6) ? ++i : 1
//     getNext(i)
// })

// prev.addEventListener('click', () => {
//     i = (i > 1) ? --i : 6
//     getPrevious(i)
// })