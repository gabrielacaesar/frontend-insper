// leitura dos dados manualmente
let dados = [
  {
    "atividade": "Balé",
    "kcal": 8,
    "tempo": "min"
  },
  {
    "atividade": "Basquete",
    "kcal": 10,
    "tempo": "min"
  },
  {
    "atividade": "Beijando",
    "kcal": 8,
    "tempo": "min"
  },
  {
    "atividade": "Boxe",
    "kcal": 11,
    "tempo": "min"
  },
  {
    "atividade": "Caminhada",
    "kcal": "5,5",
    "tempo": "min"
  },
  {
    "atividade": "Capoeira",
    "kcal": 12,
    "tempo": "min"
  },
  {
    "atividade": "Ciclismo",
    "kcal": 6,
    "tempo": "min"
  },
  {
    "atividade": "Corrida",
    "kcal": 10,
    "tempo": "min"
  },
  {
    "atividade": "Dança de Salão",
    "kcal": "3,5",
    "tempo": "min"
  },
  {
    "atividade": "Esqui aquático",
    "kcal": 11,
    "tempo": "min"
  },
  {
    "atividade": "Esqui na neve",
    "kcal": "7,5",
    "tempo": "min"
  },
  {
    "atividade": "Futebol",
    "kcal": 9,
    "tempo": "min"
  },
  {
    "atividade": "Ginástica aeróbica",
    "kcal": 6,
    "tempo": "min"
  },
  {
    "atividade": "Ginástica olímpica",
    "kcal": 6,
    "tempo": "min"
  },
  {
    "atividade": "Golfe",
    "kcal": 3,
    "tempo": "min"
  },
  {
    "atividade": "Handebol",
    "kcal": 10,
    "tempo": "min"
  },
  {
    "atividade": "Hidroginástica",
    "kcal": 6,
    "tempo": "min"
  },
  {
    "atividade": "Jiu-jitsu",
    "kcal": 12,
    "tempo": "min"
  },
  {
    "atividade": "Judô",
    "kcal": 12,
    "tempo": "min"
  },
  {
    "atividade": "Mountain bike",
    "kcal": 12,
    "tempo": "min"
  },
  {
    "atividade": "Musculação",
    "kcal": 5,
    "tempo": "min"
  },
  {
    "atividade": "Natação",
    "kcal": 9,
    "tempo": "min"
  },
  {
    "atividade": "Remo",
    "kcal": 11,
    "tempo": "min"
  },
  {
    "atividade": "Squash",
    "kcal": 13,
    "tempo": "min"
  },
  {
    "atividade": "Surfe",
    "kcal": 8,
    "tempo": "min"
  },
  {
    "atividade": "Tênis",
    "kcal": 8,
    "tempo": "min"
  },
  {
    "atividade": "Vôlei",
    "kcal": 6,
    "tempo": "min"
  },
  {
    "atividade": "Windsurf",
    "kcal": 7,
    "tempo": "min"
  }
]

// variavel para pegar elementos
let entrada = document.querySelector('input')
let saida = document.querySelector('output')
let esporte = document.querySelector('select')

// aplica a funcao ao jnout
entrada.addEventListener('input', validar)

function validar() {
	// variavel do input
	let tempo = entrada.value
	// converte variavel para inteiro/numbero
	tempo = parseInt(tempo)
	//console.log(typeof tempo)

	// valida input
	// so pode acima de zero
	if(tempo > 0) {
		calcular(tempo)
	} else {
		limpar()
	}
}

function calcular (tempo) {
	//console.log(tempo)
	// para cada item do json 
	for (let dado of dados) {
		//console.log(dado)
		// encontra a linha correspondente
		if (dado.atividade == esporte.value){
			// operacao matematica para calcular gasto calorico
			caloriasGastas = tempo * parseInt(dado.kcal)
			mostrar(caloriasGastas)
			// para de checar depois de achar a correspondencia
			break
		}
	}

}

function mostrar (caloriasGastas) {
	saida.textContent = caloriasGastas
}

function limpar () {
	saida.textContent = "..."
}