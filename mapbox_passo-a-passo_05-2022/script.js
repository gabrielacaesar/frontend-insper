mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbGFjYWVzYXIiLCJhIjoiY2wzYnNkMTNtMGljbzNqbzE3dmw5Z2w2ZCJ9.P46AUfDHOf004qL6rCXFLw';
 

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/gabrielacaesar/cl3c7kgdh005n15pfsjmxyv1q',
  center: [-60,-15],
  zoom: 3,
  pitch: 10,
  scrollWheelZoom: false
})

let botao_home = document.querySelector('#btn-home');
let botao_uf = document.querySelector('#btn-uf');
let botao_capital = document.querySelector('#btn-capital');
let botao_saltinho = document.querySelector('#btn-saltinho');

botao_home.addEventListener('click', function(e) {
  
  map.flyTo({
    center: [-60, -15], // home
    zoom: 3,
    pitch: 0,
    bearing: 0
  }) 
})

botao_uf.addEventListener('click', function(e) {
  
  map.flyTo({
    center: [-48, -22], // estado de sp
    zoom: 6,
    pitch: 20
  }) 
})

botao_capital.addEventListener('click', function(e) {
  
  map.flyTo({
    center: [-46.6236, -23.5829], // capital
    zoom: 11.15,
    pitch: 30
  }) 
})

botao_saltinho.addEventListener('click', function(e) {
  
  map.flyTo({
    center: [-47.67652, -22.81049], // saltinho
    zoom: 11,
    pitch: 90,
    bearing: 40
  }) 
})

/////////////

// 1. criar uma função para verificar 
// se o gatilho chegou ao topo da página
function escutaScroll(event){
    // A função deve...
    // Pegar a lista de gatilhos
    let gatilhos = document.querySelectorAll(".gatilhos > section");

    // A função deve...
    // Fazer loop pela lista de gatilhos
    for(let gatilho of gatilhos){
        // Para cada um deles, pegar a posição atual
        let posicao = gatilho.getBoundingClientRect();
        // Para cada um deles, pegar o valor da propriedade data-alvo
        let alvo = gatilho.dataset.alvo;
        // Verificar se o gatilho está acima do topo da página
        if(alvo == "1"){
            // se sim, adiciona a classe que exibe o gráfico
            alvo.classList.add('passo-ativo');
        }else{
            // caso contrário, retire a classe
            alvo.classList.remove('passo-ativo');
        }
    }
}

// 2. pedir ao navegador para escutar 
// o evento de rolagem da página
window.addEventListener('scroll', escutaScroll);