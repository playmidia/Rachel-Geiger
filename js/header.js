let nav = document.querySelector('nav'); //Barra de navegação
let navAncoras = document.querySelectorAll('nav a'); //Ancoras da barra de navegação
let menu = document.querySelector('.menu'); //Botão "menu"
let lines = document.querySelectorAll('.line'); //Barras do menu
// Função que ativa ao clicar no menu
menu.onclick = () => {
    nav.classList.toggle('nav-toggle');
    for(let line of lines){
    line.classList.toggle('line-click');
    }
    for(let navAncora of navAncoras){
    navAncora.classList.toggle('nav-a-toggle');
    }
}

