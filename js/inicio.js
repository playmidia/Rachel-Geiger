let arrow = document.querySelector('.arrow-down');
let scrolldown = document.querySelector('.scroll-down');
let arrowUp = document.querySelector('.top');


function scroll() {
    location.href = "#section-two";
    setTimeout(() => {
        arrow.style.display = 'none';
        scrolldown.style.display = 'none';
    },500);
}

arrowUp.onclick = () => {
    arrow.style.display = 'flex';
    scrolldown.style.display = 'flex';
    scrollTo(0, 0);

}

body.onscroll = () => {
    if(scrollY > 45){
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
}

arrow.onclick = () => scroll();
scrolldown.onclick = () => scroll();