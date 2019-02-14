let arrow = document.querySelector('.arrow-down');
let scrolldown = document.querySelector('.scroll-down');
let arrowUp = document.querySelector('.top');
let estatisticas = document.querySelector('.contain-numbers h2');
let containNumbers = document.querySelectorAll('.number');

function scroll() {
    location.href = "#section-two";
}

arrowUp.onclick = () => scrollTo(0, 0);

let calorie = document.querySelector('.calories');
let kilos = document.querySelector('.kilos');
let measures = document.querySelector('.measures');
let icont1 = 0;
let icont2 = 0;
let kcont1 = 0;
let kcont2 = 0;
let jcont1 = 0;
let jcont2 = 0;

function contador1() {
    if(icont1 < 267){
        icont1++;
    }
    if(icont2 < 32){
        icont2++;
    }
    calorie.innerHTML = `${icont1}${icont2}`;
};
function contador2() {
    if(kcont1 < 76){
        kcont1++;
    } 
    if(kcont2 < 12){
        kcont2++;
    } 
    kilos.innerHTML = `${kcont1}${kcont2}`;
};
function contador3() {
    if(jcont1 < 34){
        jcont1++;
    } 
    if(jcont2 < 51){
        jcont2++;
    } 
    measures.innerHTML = `${jcont1}${jcont2}`;
};

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


arrow.onclick = () => scroll();
scrolldown.onclick = () => scroll();