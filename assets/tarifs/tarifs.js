import 'reset-css'
import '../styles/index.scss'
import '../services/styles.scss'
import './styles.scss'
import './media.scss'

import '../js/hamburger.js'

const nav = document.querySelector('.nav__wrp')
const tables = [...document.querySelectorAll('.tarifs__table')]

const handleMenu = (e) => {
    const selected = e.target;
    const tabs = [...document.querySelectorAll('.nav__tab')]
    tabs.forEach((tab, i) => {
        if (tab == selected) {
            selected.classList.add('tab--active')
            tables[i].style.display = 'flex'
        }
        else {
            tab.classList.remove('tab--active')
            tables[i].style.display = 'none'
        }
    })
}

nav.addEventListener('click', handleMenu)

const getInfo = document.querySelector('.get-info')
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
close.addEventListener('click', closeModal)