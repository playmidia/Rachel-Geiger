let body = document.querySelector('body');
let nav = document.querySelector('nav');
let navAncoras = document.querySelectorAll('nav a');
let menu = document.querySelector('.menu');
let lines = document.querySelectorAll('.line');
let arrowUp = document.querySelector('.top');

menu.onclick = () => {
    nav.classList.toggle('nav-toggle');
    for(let line of lines){
    line.classList.toggle('line-click');
    }
    for(let navAncora of navAncoras){
    navAncora.classList.toggle('nav-a-toggle');
    }
}

arrowUp.onclick = () => scrollTo(0, 0);

body.onscroll = () => {
    if(scrollY > 243){
        arrowUp.classList.add('top-visible');
    }else{
        arrowUp.classList.remove('top-visible');
    }
}