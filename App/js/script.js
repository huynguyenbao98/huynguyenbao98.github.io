const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.hasFade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){ // close
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })
    }
    else { // open
        header.classList.add('open');
        body.classList.add('noscroll');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
    }
});