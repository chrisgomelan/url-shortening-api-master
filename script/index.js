const burger = document.querySelector('.menu');
const navList = document.querySelector('.functions');

burger.addEventListener('click', function() {
    navList.classList.toggle('active');
})