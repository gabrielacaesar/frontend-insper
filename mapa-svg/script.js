let mapaMalha;
let dadosTse;
let dadosIbge;

async function loadMapData(){
	let mapaUrl = 'https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=UF';
	let arquivoTse =`./resultados/election-data.json`;
	let urlIbge = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
	
	// svg
	let mapaSvg = await fetch(mapaUrl)
	mapaMalha = await mapaSvg.text();
	console.log(mapaSvg)

	// tse
	let dadosJsonTse = await fetch(arquivoTse);
    dadosTse = await dadosJsonTse.json();
	console.log(dadosTse)

	// ibge
	let dadosJsonIbge = await fetch(urlIbge);
	dadosIbge = await dadosJsonIbge.json();
	console.log(dadosIbge)

	// coloca o mapa no local certo
    let mapaConteudo = document.querySelector('#map-box');
    mapaConteudo.innerHTML = mapaMalha;

	// 1. seleciona todos os paths do svg (= id do mapaUrl)
	let ufs = document.querySelectorAll('#map-box svg path');

	// 2. para cada path eventListener de hover
	for (let uf of ufs){
		// 3. dispara a funcao mostraHover(), criada fora
		uf.onmouseover = mostraHover
	}	
}
loadMapData();

function mostraHover(event){
	// 1. get target = id do path
	let userUf = event.target.id
	console.log(userUf)
	// 2. para uf de mapaDados > id (que ta no json) = uf
	let siglaUf = dadosIbge.filter(function(linha){return linha.id == userUf})[0].sigla
	//console.log(siglaUf)
	let dadosCard = dadosTse.filter(function(linha){return (linha.sg_uf == siglaUf) && (linha.nr_turno == 1)})
	// no futuro pegar o valor do botao para substituir acima
	console.log(dadosCard)
	// 3. agora pega a uf e coloca no hover
	preencheCard(dadosCard)
}

function preencheCard(dados){
	let dados_2018 = dados.filter(function(linha){return linha.ano_eleicao == 2018})
	let dados_2014 = dados.filter(function(linha){return linha.ano_eleicao == 2014})
	let dados_2010 = dados.filter(function(linha){return linha.ano_eleicao == 2010})
	let dados_2006 = dados.filter(function(linha){return linha.ano_eleicao == 2006})
	let dados_2002 = dados.filter(function(linha){return linha.ano_eleicao == 2002})
	console.log(dados_2018, dados_2018.candidato_1)
	document.querySelector('.eleicao_2018 > .pt > .nm_cand').textContent = dados_2018[0].candidato_1
	
}
