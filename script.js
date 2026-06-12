// animação ao rolar

function revelar() {

const reveals = document.querySelectorAll('.reveal');

reveals.forEach(item => {

const alturaJanela = window.innerHeight;

const topo = item.getBoundingClientRect().top;

if(topo < alturaJanela - 100){
item.classList.add('active');
}

});

}

window.addEventListener('scroll', revelar);

revelar();


// contador animado

const contadores = document.querySelectorAll('.contador');

contadores.forEach(contador => {

contador.innerText = '0';

const atualizar = () => {

const alvo = +contador.getAttribute('data-target');

const atual = +contador.innerText;

const incremento = alvo / 100;

if(atual < alvo){

contador.innerText =
`${Math.ceil(atual + incremento)}`;

setTimeout(atualizar,20);

}else{

contador.innerText = alvo;

}

};

atualizar();

});