/* Script para inicializar o AOS animate*/
AOS.init({
  duration: 600, 
  easing: 'ease-in-out',
});

/* Evento para header */
window.addEventListener('scroll', () => {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 10);

  //Back to top button
  if (window.scrollY > 100) {
    document.documentElement.querySelector(".back-to-top").style.display = "inline";
  } else {
    document.documentElement.querySelector(".back-to-top").style.display = "none";
  }
})

/* Evento para quando clicar no menu */
document.querySelector('header .menu').addEventListener('click', (event) => {
  const menu = document.querySelector('header .navigation');

  // Para retirar da tela o menu anterior
  document.querySelector('header .menu').style.opacity = 0;
  document.documentElement.style.overflowY = "hidden";

  //Retirar da tela os Social Icons
  document.querySelector('#sci').style.opacity = 0;

  // Adiciona a classe responsavel por criar o menu movel
  menu.style.display = "block";
  menu.classList.toggle('on');

});

/* Função chamada quanto clica no menu para sair do proprio */
function botaoSair() {
  const menu = document.querySelector('header .navigation');
  menu.style.display = "none";
  menu.classList.toggle('on');

  //Retirar da tela os Social Icons
  document.querySelector('#sci').style.opacity = 1;

  // Para colocar na tela o menu anterior
  document.querySelector('header .menu').style.opacity = 1;
  document.documentElement.style.overflowY = "scroll";
};

/* Função para o back to menu ir para cima*/
function backToMenu(){
  window.scrollTo(0, 0);
}