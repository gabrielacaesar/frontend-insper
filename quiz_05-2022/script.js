// define as variávies de acordo com 
// a classe definida no html e estilizada no css
let quiz   = document.querySelector('.quiz')
let options = document.querySelector('.full-options')
let result = document.querySelector('.result')
let answer = document.querySelector('.answer')
let chart  = document.querySelector('.chart')

// seleciona cada li que representa as alternativas, 
// usando document.querySelectorAll()
let listOptions = document.querySelectorAll('li')

function checkAnswer(event) {

  // altera visibilidade, mostrando resultado diferente em caso de acerto e erro, usando display: none (para esconder um elemento) ou display: block (para mostrá-lo)
  options.classList.add('inactive');

  let quizOption = event.target

  quizOption.classList.add('clicked');

  // checa condição, testando se a alternativa clicada
  // tem a classe "correta", usando o método classList.contains()
  if (quizOption.classList.contains('correct')) {

    // define o texto de 'result' para esta condição
    result.textContent = 'Resposta correta';

    // define estilo de 'result' para esta condição
    result.style.backgroundColor = 'green';

  } else {

  // define o texto de 'result' para esta condição
    result.textContent = 'Resposta errada!';

  // define estilo de 'result' para esta condição
    result.style.backgroundColor = 'red';

  }

  // mostra explicação para todas as condições
  answer.style.display = 'initial';

  // mostra gráfico para todas as condições
  chart.style.display = 'initial';
  
}


// loop pelas alternativas, usando o método for … of
for (let option of listOptions) {

  // cria evento de clique usando o método addEventListener()
  option.addEventListener('click', checkAnswer)

}


