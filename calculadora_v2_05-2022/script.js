// leitura dos dados manualmente
let dados = [
  {
    "pergunta": "Por que",
    "pessoa": "meu namorado",
    "resposta": "me atrai"
  },
  {
    "pergunta": "Por que",
    "pessoa": "meu namorado",
    "resposta": "me ama"
  },
  {
    "pergunta": "Por que",
    "pessoa": "meu namorado",
    "resposta": "não responde"
  },
  {
    "pergunta": "Por que",
    "pessoa": "meu namorado",
    "resposta": "gosta de mim"
  },
  {
    "pergunta": "Por que",
    "pessoa": "meu namorado",
    "resposta": "quer casar comigo"
  },
  {
    "pergunta": "Por que",
    "pessoa": "minha namorada",
    "resposta": "me atrai"
  },
  {
    "pergunta": "Por que",
    "pessoa": "minha namorada",
    "resposta": "me ama"
  },
  {
    "pergunta": "Por que",
    "pessoa": "minha namorada",
    "resposta": "não responde"
  },
  {
    "pergunta": "Por que",
    "pessoa": "minha namorada",
    "resposta": "gosta de mim"
  },
  {
    "pergunta": "Por que",
    "pessoa": "minha namorada",
    "resposta": "quer casar comigo"
  },
  {
    "pergunta": "O que",
    "pessoa": "meu namorado",
    "resposta": "quer de aniversário"
  },
  {
    "pergunta": "O que",
    "pessoa": "meu namorado",
    "resposta": "come demais"
  },
  {
    "pergunta": "O que",
    "pessoa": "meu namorado",
    "resposta": "diz que me ama"
  },
  {
    "pergunta": "O que",
    "pessoa": "meu namorado",
    "resposta": "acorda à noite"
  },
  {
    "pergunta": "O que",
    "pessoa": "meu namorado",
    "resposta": "faz no trabalho"
  },
  {
    "pergunta": "O que",
    "pessoa": "minha namorada",
    "resposta": "quer de aniversário"
  },
  {
    "pergunta": "O que",
    "pessoa": "minha namorada",
    "resposta": "come demais"
  },
  {
    "pergunta": "O que",
    "pessoa": "minha namorada",
    "resposta": "diz que me ama"
  },
  {
    "pergunta": "O que",
    "pessoa": "minha namorada",
    "resposta": "acorda à noite"
  },
  {
    "pergunta": "O que",
    "pessoa": "minha namorada",
    "resposta": "faz no trabalho"
  },
  {
    "pergunta": "Como",
    "pessoa": "meu namorado",
    "resposta": "dorme"
  },
  {
    "pergunta": "Como",
    "pessoa": "meu namorado",
    "resposta": "consegue ser magro"
  },
  {
    "pergunta": "Como",
    "pessoa": "meu namorado",
    "resposta": "pode ficar sem me responder"
  },
  {
    "pergunta": "Como",
    "pessoa": "meu namorado",
    "resposta": "quer dormir comigo"
  },
  {
    "pergunta": "Como",
    "pessoa": "meu namorado",
    "resposta": "acorda cedo"
  },
  {
    "pergunta": "Como",
    "pessoa": "minha namorada",
    "resposta": "dorme"
  },
  {
    "pergunta": "Como",
    "pessoa": "minha namorada",
    "resposta": "consegue ser magro"
  },
  {
    "pergunta": "Como",
    "pessoa": "minha namorada",
    "resposta": "pode ficar sem me responder"
  },
  {
    "pergunta": "Como",
    "pessoa": "minha namorada",
    "resposta": "quer dormir comigo"
  },
  {
    "pergunta": "Como",
    "pessoa": "minha namorada",
    "resposta": "acorda cedo"
  },
  {
    "pergunta": "Quem",
    "pessoa": "meu namorado",
    "resposta": "me atrai"
  },
  {
    "pergunta": "Quem",
    "pessoa": "meu namorado",
    "resposta": "me ama"
  },
  {
    "pergunta": "Quem",
    "pessoa": "meu namorado",
    "resposta": "não responde"
  },
  {
    "pergunta": "Quem",
    "pessoa": "meu namorado",
    "resposta": "gosta de mim"
  },
  {
    "pergunta": "Quem",
    "pessoa": "meu namorado",
    "resposta": "quer casar comigo"
  },
  {
    "pergunta": "Quem",
    "pessoa": "minha namorada",
    "resposta": "me atrai"
  },
  {
    "pergunta": "Quem",
    "pessoa": "minha namorada",
    "resposta": "me ama"
  },
  {
    "pergunta": "Quem",
    "pessoa": "minha namorada",
    "resposta": "não responde"
  },
  {
    "pergunta": "Quem",
    "pessoa": "minha namorada",
    "resposta": "gosta de mim"
  },
  {
    "pergunta": "Quem",
    "pessoa": "minha namorada",
    "resposta": "quer casar comigo"
  },
  {
    "pergunta": "Onde",
    "pessoa": "meu namorado",
    "resposta": "quer de aniversário"
  },
  {
    "pergunta": "Onde",
    "pessoa": "meu namorado",
    "resposta": "come demais"
  },
  {
    "pergunta": "Onde",
    "pessoa": "meu namorado",
    "resposta": "diz que me ama"
  },
  {
    "pergunta": "Onde",
    "pessoa": "meu namorado",
    "resposta": "acorda à noite"
  },
  {
    "pergunta": "Onde",
    "pessoa": "meu namorado",
    "resposta": "faz no trabalho"
  },
  {
    "pergunta": "Onde",
    "pessoa": "minha namorada",
    "resposta": "quer de aniversário"
  },
  {
    "pergunta": "Onde",
    "pessoa": "minha namorada",
    "resposta": "come demais"
  },
  {
    "pergunta": "Onde",
    "pessoa": "minha namorada",
    "resposta": "diz que me ama"
  },
  {
    "pergunta": "Onde",
    "pessoa": "minha namorada",
    "resposta": "acorda à noite"
  },
  {
    "pergunta": "Onde",
    "pessoa": "minha namorada",
    "resposta": "faz no trabalho"
  },
  {
    "pergunta": "Quando",
    "pessoa": "meu namorado",
    "resposta": "me atrai"
  },
  {
    "pergunta": "Quando",
    "pessoa": "meu namorado",
    "resposta": "me ama"
  },
  {
    "pergunta": "Quando",
    "pessoa": "meu namorado",
    "resposta": "não responde"
  },
  {
    "pergunta": "Quando",
    "pessoa": "meu namorado",
    "resposta": "gosta de mim"
  },
  {
    "pergunta": "Quando",
    "pessoa": "meu namorado",
    "resposta": "quer casar comigo"
  },
  {
    "pergunta": "Quando",
    "pessoa": "minha namorada",
    "resposta": "me atrai"
  },
  {
    "pergunta": "Quando",
    "pessoa": "minha namorada",
    "resposta": "me ama"
  },
  {
    "pergunta": "Quando",
    "pessoa": "minha namorada",
    "resposta": "não responde"
  },
  {
    "pergunta": "Quando",
    "pessoa": "minha namorada",
    "resposta": "gosta de mim"
  },
  {
    "pergunta": "Quando",
    "pessoa": "minha namorada",
    "resposta": "quer casar comigo"
  }
]

// generate todays date
// https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
let dataCompleta = new Date()
let hojeData = dataCompleta.toISOString().split('T')[0]

// variavel para pegar elementos
// trecho que calcula tempo de relacionamento
let dataInicio = document.querySelector('#inicio-relacionamento')
let outputDias = document.querySelector('#dias-relacionamento')
let outputFinde = document.querySelector('#finde-relacionamento')
let outputHora = document.querySelector('#hora-relacionamento')
let outputMinuto = document.querySelector('#minutos-relacionamento')

// define data maxima (impedir dados negativos)
// https://stackoverflow.com/questions/38638424/html5-input-type-date-disable-dates-before-today
var today = new Date().toISOString().slice(0,10);
dataInicio.setAttribute('max', today);

// variavel para pegar elementos
// trecho que pega as opcoes selecionadas
let inputPergunta = document.querySelector('#pergunta')
let inputPessoa = document.querySelector('#pessoa')
let outputQuery = document.querySelector('#query')

// funcao para mostrar dados
function mostrarDados(diasRelacionamento, findeRelacionamento, horaRelacionamento, minutoRelacionamento) {
  outputDias.textContent = diasRelacionamento;
  outputFinde.textContent = findeRelacionamento;
  outputHora.textContent = horaRelacionamento;
  outputMinuto.textContent = minutoRelacionamento;
}

// funcao para mostrar query
function mostrarQuery(query){
  outputQuery.textContent = query;
}

// deletar se nao for usar
function limpar() {
  outputDias.textContent = "____"
  outputFinde.textContent = "____"
  outputHora.textContent = "____"
  outputMinuto.textContent = "____"
  outputQuery.textContent = "____"
}

// ouve o evento e roda a funcao
dataInicio.addEventListener('change', calcularTempo)
inputPergunta.addEventListener('change', definirResposta)
inputPessoa.addEventListener('change', definirResposta)

// funcao para calcular tempo de relacionamento
function calcularTempo(entradaData) {
	// variavel do input
	let data = dataInicio.value
  // considera como data object
	let diferenca = new Date(hojeData) - new Date(data)
  // calculo do tempo de relacionamento
  let diasRelacionamento = diferenca / (1000 * 60 * 60 * 24)
  let findeRelacionamento = Math.round(diasRelacionamento / 7)
  let horaRelacionamento = diferenca / (1000 * 60 * 60)
  let minutoRelacionamento = diferenca / (1000 * 60)

  // executa funcao mostrar()
  mostrarDados(diasRelacionamento, findeRelacionamento, horaRelacionamento, minutoRelacionamento)
}

// definir query para mostrar
function definirResposta() {
  for (let dado of dados) {
    console.log(dado)
    // encontra a linha correspondente
    if (dado.pergunta == inputPergunta.value && dado.pessoa == inputPessoa.value){
      // guarda o resultado na variavel
      let query = dado.resposta
      // exibe a resposta no site
      mostrarQuery(query)
      // para de checar depois de achar a correspondencia
      break
    }
  }
}

