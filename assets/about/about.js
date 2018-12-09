import './styles.scss'
import './media.scss'

const call = document.querySelector('.call')
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

call.addEventListener('click', handleModal)
close.addEventListener('click', closeModal)