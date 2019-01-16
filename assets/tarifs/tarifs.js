import 'reset-css'
import '../styles/index.scss'
import '../services/styles.scss'
import './styles.scss'
import './media.scss'

import '../js/modal.js'
import '../js/hamburger.js'

document.addEventListener("DOMContentLoaded", () => {

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

})