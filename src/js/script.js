'use strict';

const headerPage = document.querySelector('.header');
const mainPage = document.querySelector('.page-main');
const navButton = headerPage.querySelector('.nav__button');
const rangeBlock = mainPage.querySelector('.percent');


navButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.toggle('nav__button--close');
    const nav = headerPage.querySelector('.nav');
    nav.classList.toggle('nav__open');
})

rangeBlock.addEventListener('change', (e) => {
    e.preventDefault();
    const rangeValue = rangeBlock.querySelector('.percent__range').value;
    const count = rangeBlock.querySelector('.count');
    count.textContent = rangeValue + ' %';
});
