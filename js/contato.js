let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let assunto = document.getElementById("assunto");
let mensagem = document.getElementById("mensagem");
let button = document.querySelector('.btn-active');
let more1 = document.querySelector('.more1');
let more2 = document.querySelector('.more2');
let map1 = document.querySelector('.map1');
let map2 = document.querySelector('.map2');
let loading = document.querySelector('.loading');
let form = document.getElementById('form');

function verificar() {
    if(name.value.trim() != "" && email.value.trim() != "" && phone.value.trim() != "" && assunto.value.trim() != "" && mensagem.value.trim() != "" ){
        button.disabled = false;
        button.classList.remove('btn-disable');
    }
    else{
        button.disabled = true;
        button.classList.add('btn-disable');
    }
    if(mensagem.value.trim() != ""){
        mensagem.style.height = "150px";
    }
    else{
        mensagem.style.height = "45px";
    }
}

setInterval(verificar, 100);

more1.onclick = () => {
    map1.classList.toggle('map3')
    more1.classList.toggle('more3');
}
more2.onclick = () => {
    map2.classList.toggle('map3')
    more2.classList.toggle('more3');
}
button.onclick = () => {
    enviar();
    event.preventDefault();
    button.innerHTML = "ENVIADO!";
}

function enviar() {
    if(name.value.trim() != "" && email.value.trim() != "" && email.value.indexOf('@') != -1 && phone.value.trim() != "" && assunto.value.trim() != "" && mensagem.value.trim() != ""){
    event.preventDefault();
    form.submit();
    return true;
    }
    else{
        console.log('erro');
    }
}
