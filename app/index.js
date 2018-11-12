/**
 * Application entry point
 */

// Load application styles
import 'reset-css';
import 'styles/index.scss';

const btn = document.querySelector('.hamburger');
const links = document.querySelector('.menu__links');

btn.addEventListener('click', () => {
    btn.classList.toggle("is-active");
    links.classList.toggle("links-visible");
})