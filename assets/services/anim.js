import anime from 'animejs';

export const animate = () => {
document.addEventListener("DOMContentLoaded", () => {

//Animations 
const img = anime({
    targets: '.feature__img',
    scale: [.95, 1],
    easing: 'easeOutSine'
})

const icons = anime({
    targets: '.icons-wrapper .icon',
    opacity: [0, 1],
    translateX: [-30, 0],
    delay: function(el, i, l) {
        return i * 100;
    },
    easing: 'easeOutSine'
})

})}