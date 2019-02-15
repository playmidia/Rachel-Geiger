let body = document.querySelector('body'); //Elemento Pai de Todos
let scrolldown = document.querySelector('.scroll-down'); //Bolinhas em cima da seta
let arrow = document.querySelector('.arrow-down'); //Seta para descer página
let arrowUp = document.querySelector('.top'); //Botão para subir ao topo
let estatisticas = document.querySelector('.contain-numbers h2'); //Titulo "Nossas estatísticas"
let containNumbers = document.querySelectorAll('.number'); //Div com os numeros, icones e descrição das medidas

// let containTitle = document.querySelector('.contain-title');
// let containSobre = document.querySelector('.contain-sobre');

//Função para descer para a segunda sessão
function scroll() {
    location.href = "#section-two";
}
// Ativação da função "scroll" ao clicar
arrow.onclick = () => scroll();
scrolldown.onclick = () => scroll();
// Função de clique, vai para o topo da página ao clicar
arrowUp.onclick = () => scrollTo(0, 0);

let calorie = document.querySelector('.calories'); //Números de Calorias
let kilos = document.querySelector('.kilos'); //Números de Kilos
let measures = document.querySelector('.measures'); //Números de medidas
// Contadores
let icont1 = 0; 
let icont2 = 0;
let kcont1 = 0;
let kcont2 = 0;
let jcont1 = 0;
let jcont2 = 0;
// Função do contador de Calorias
function contador1() {
    if(icont1 < 267){
        icont1++;
    }
    if(icont2 < 32){
        icont2++;
    }
    calorie.innerHTML = `${icont1}${icont2}`;
};
// Função do contador de Kilos
function contador2() {
    if(kcont1 < 76){
        kcont1++;
    } 
    if(kcont2 < 12){
        kcont2++;
    } 
    kilos.innerHTML = `${kcont1}${kcont2}`;
};
// Função do contador de medidas
function contador3() {
    if(jcont1 < 34){
        jcont1++;
    } 
    if(jcont2 < 51){
        jcont2++;
    } 
    measures.innerHTML = `${jcont1}${jcont2}`;
};
// Função que ativa ao descer a página
body.onscroll = () => {
    if(scrollY >= 50){
        arrow.style.display = 'none';
        scrolldown.style.display = 'none';
    }else{
        arrow.style.display = 'flex';
        scrolldown.style.display = 'flex';
    }
    if(scrollY > 243){
        arrowUp.classList.add('top-visible');
        
    }else{
        arrowUp.classList.remove('top-visible');
    }
    if(scrollY >= 325){
        estatisticas.classList.add('animation-scroll');
        
    }
    if(scrollY >= 400){
        for(let containNumber of containNumbers){
            containNumber.classList.add('animation-scroll');
            }
        setInterval(contador1, 50);
        setInterval(contador2, 100);
        setInterval(contador3, 150); 
    }
}


