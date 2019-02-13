let body = document.querySelector('body');
let nav = document.querySelector('nav');
let navAncoras = document.querySelectorAll('nav a');
let menu = document.querySelector('.menu');
let lines = document.querySelectorAll('.line');



menu.onclick = () => {
    nav.classList.toggle('nav-toggle');
    for(let line of lines){
    line.classList.toggle('line-click');
    }
    for(let navAncora of navAncoras){
    navAncora.classList.toggle('nav-a-toggle');
    }
}

