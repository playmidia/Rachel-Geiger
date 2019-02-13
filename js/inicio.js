let arrow = document.querySelector('.arrow-down');
let scrollText = document.querySelector('.section-one span');
let scrolldown = document.querySelector('.scroll-down');

function scroll() {
    location.href = "#section-two";
}

arrow.onclick = () => scroll();
scrollText.onclick = () => scroll();
scrolldown.onclick = () => scroll();