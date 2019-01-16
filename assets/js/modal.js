import anime from 'animejs'

document.addEventListener("DOMContentLoaded", () => {

    const call = document.querySelector('button.call')
    const close = document.querySelector('.modal__close')
    const modal = document.querySelector('.modal-wrp')
    const modalOverlay = document.querySelector('.modal-overlay')

    const handleModal = () => {
        modal.classList.toggle('visible')
        modalOverlay.classList.toggle('visible')
    }

    call.addEventListener('click', handleModal)
    close.addEventListener('click', handleModal)

    const modalSuccessMsg = document.querySelector('.modal-success')

    modal.querySelector('button').addEventListener('click', () => {
        handleModal()
        modalSuccessMsg.classList.add('visible')
        anime({
            targets: modalSuccessMsg,
            opacity: 1,
            translateY: [100, 0]
        })
        setTimeout(() => {
            anime({
                targets: modalSuccessMsg,
                opacity: [1, 0],
                complete: () => modalSuccessMsg.classList.remove('visible')
            })
        }, 5000)
    })

    document.querySelector('.modal-success svg').addEventListener(
        'click', () => {
            modalSuccessMsg.classList.remove('visible')
    })

})