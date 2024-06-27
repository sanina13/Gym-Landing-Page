'use strict';

const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const secondPart = document.querySelector('.main-header');
openBtn.addEventListener('click', function () {
  secondPart.classList.toggle('nav-open');
});
closeBtn.addEventListener('click', function () {
  secondPart.classList.toggle('nav-open');
});
//.nav-open
