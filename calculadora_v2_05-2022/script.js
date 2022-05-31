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
let diasRelacionamento = document.querySelector('#dias-relacionamento')

// variavel para pegar elementos
// trecho que pega as opcoes selecionadas
let pergunta = document.querySelector('#pergunta')
let pessoa = document.querySelector('#pessoa')
let query = document.querySelector('#query')

// funcao para calcular tempo de relacionamento
function calcularTempo(entradaData) {
	// variavel do input
	let data = dataInicio.value
  console.log(data)
  // calculo
	let diasRelacionamento = hojeData - data
  mostrar(diasRelacionamento)
  // retorna valor para output
  return diasRelacionamento
}

function mostrar(diasRelacionamento) {
	saidaData.textContent = diasRelacionamento
}

function limpar() {
	saidaData.textContent = "..."
}

// definir query para mostrar
function definirResposta() {
  for (let dado of dados) {
    console.log(dado)
    // encontra a linha correspondente
    if (dado.pergunta == pergunta.value && dado.pessoa = pessoa.value){
      // operacao matematica para calcular gasto calorico
      query = dado.resposta
      mostrar(query)
      // para de checar depois de achar a correspondencia
      break
    }
  }
}

