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
	let dadosCard = dadosTse.filter(function(linha){return (linha.sg_uf == siglaUf) && (linha.nr_turno == 2)})
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

	///// 2018
	// abertura
	document.querySelector('.uf > .sg_uf').textContent = dados_2018[0].sg_uf
	document.querySelector('.uf > .nr_turno').textContent = dados_2018[0].nr_turno
	document.querySelector('.uf > .regiao').textContent = dados_2018[0].regiao
	document.querySelector('.uf > .qtd_elei_2022').textContent = dados_2018[0].qtd_elei_2022
	document.querySelector('.uf > .perc_elei_2022').textContent = dados_2018[0].perc_elei_2022

	// ano
	document.querySelector('.eleicao_2018 > .ano_eleicao').textContent = dados_2018[0].ano_eleicao
	
	// pt
	document.querySelector('.eleicao_2018 > .pt > .candidato_1').textContent = dados_2018[0].candidato_1
	document.querySelector('.eleicao_2018 > .pt > .partido_1').textContent = dados_2018[0].partido_1
	//document.querySelector('.eleicao_2018 > .pt > .situacao_1').textContent = dados_2018[0].situacao_1
	document.querySelector('.eleicao_2018 > .pt > .perc_1').textContent = dados_2018[0].perc_1
	document.querySelector('.eleicao_2018 > .pt > .votos_1').textContent = dados_2018[0].votos_1

	// psl
	document.querySelector('.eleicao_2018 > .psl > .candidato_2').textContent = dados_2018[0].candidato_2
	document.querySelector('.eleicao_2018 > .psl > .partido_2').textContent = dados_2018[0].partido_2
	//document.querySelector('.eleicao_2018 > .psl > .situacao_2').textContent = dados_2018[0].situacao_2
	document.querySelector('.eleicao_2018 > .psl > .perc_2').textContent = dados_2018[0].perc_2
	document.querySelector('.eleicao_2018 > .psl > .votos_2').textContent = dados_2018[0].votos_2

	// diferença
	document.querySelector('.eleicao_2018 > .dif > ul > li > .diferenca_pp').textContent = dados_2018[0].diferenca_pp
	document.querySelector('.eleicao_2018 > .dif > ul > li > .diferenca_absoluta').textContent = dados_2018[0].diferenca_absoluta
	
	///// 2014
	// abertura
	document.querySelector('.uf > .sg_uf').textContent = dados_2014[0].sg_uf
	document.querySelector('.uf > .nr_turno').textContent = dados_2014[0].nr_turno
	document.querySelector('.uf > .regiao').textContent = dados_2014[0].regiao
	document.querySelector('.uf > .qtd_elei_2022').textContent = dados_2014[0].qtd_elei_2022
	document.querySelector('.uf > .perc_elei_2022').textContent = dados_2014[0].perc_elei_2022

	// ano
	document.querySelector('.eleicao_2014 > .ano_eleicao').textContent = dados_2014[0].ano_eleicao
	
	// pt
	document.querySelector('.eleicao_2014 > .pt > .candidato_1').textContent = dados_2014[0].candidato_1
	document.querySelector('.eleicao_2014 > .pt > .partido_1').textContent = dados_2014[0].partido_1
	//document.querySelector('.eleicao_2014 > .pt > .situacao_1').textContent = dados_2014[0].situacao_1
	document.querySelector('.eleicao_2014 > .pt > .perc_1').textContent = dados_2014[0].perc_1
	document.querySelector('.eleicao_2014 > .pt > .votos_1').textContent = dados_2014[0].votos_1

	// psdb
	document.querySelector('.eleicao_2014 > .psdb > .candidato_2').textContent = dados_2014[0].candidato_2
	document.querySelector('.eleicao_2014 > .psdb > .partido_2').textContent = dados_2014[0].partido_2
	//document.querySelector('.eleicao_2014 > .psdb > .situacao_2').textContent = dados_2014[0].situacao_2
	document.querySelector('.eleicao_2014 > .psdb > .perc_2').textContent = dados_2014[0].perc_2
	document.querySelector('.eleicao_2014 > .psdb > .votos_2').textContent = dados_2014[0].votos_2

	// diferença
	document.querySelector('.eleicao_2014 > .dif > ul > li > .diferenca_pp').textContent = dados_2014[0].diferenca_pp
	document.querySelector('.eleicao_2014 > .dif > ul > li > .diferenca_absoluta').textContent = dados_2014[0].diferenca_absoluta
	
	///// 2010
	// abertura
	document.querySelector('.uf > .sg_uf').textContent = dados_2010[0].sg_uf
	document.querySelector('.uf > .nr_turno').textContent = dados_2010[0].nr_turno
	document.querySelector('.uf > .regiao').textContent = dados_2010[0].regiao
	document.querySelector('.uf > .qtd_elei_2022').textContent = dados_2010[0].qtd_elei_2022
	document.querySelector('.uf > .perc_elei_2022').textContent = dados_2010[0].perc_elei_2022

	// ano
	document.querySelector('.eleicao_2010 > .ano_eleicao').textContent = dados_2010[0].ano_eleicao
	
	// pt
	document.querySelector('.eleicao_2010 > .pt > .candidato_1').textContent = dados_2010[0].candidato_1
	document.querySelector('.eleicao_2010 > .pt > .partido_1').textContent = dados_2010[0].partido_1
	//document.querySelector('.eleicao_2010 > .pt > .situacao_1').textContent = dados_2010[0].situacao_1
	document.querySelector('.eleicao_2010 > .pt > .perc_1').textContent = dados_2010[0].perc_1
	document.querySelector('.eleicao_2010 > .pt > .votos_1').textContent = dados_2010[0].votos_1

	// psdb
	document.querySelector('.eleicao_2010 > .psdb > .candidato_2').textContent = dados_2010[0].candidato_2
	document.querySelector('.eleicao_2010 > .psdb > .partido_2').textContent = dados_2010[0].partido_2
	//document.querySelector('.eleicao_2010 > .psdb > .situacao_2').textContent = dados_2010[0].situacao_2
	document.querySelector('.eleicao_2010 > .psdb > .perc_2').textContent = dados_2010[0].perc_2
	document.querySelector('.eleicao_2010 > .psdb > .votos_2').textContent = dados_2010[0].votos_2

	// diferença
	document.querySelector('.eleicao_2010 > .dif > ul > li > .diferenca_pp').textContent = dados_2010[0].diferenca_pp
	document.querySelector('.eleicao_2010 > .dif > ul > li > .diferenca_absoluta').textContent = dados_2010[0].diferenca_absoluta
	
	///// 2006
	// abertura
	document.querySelector('.uf > .sg_uf').textContent = dados_2006[0].sg_uf
	document.querySelector('.uf > .nr_turno').textContent = dados_2006[0].nr_turno
	document.querySelector('.uf > .regiao').textContent = dados_2006[0].regiao
	document.querySelector('.uf > .qtd_elei_2022').textContent = dados_2006[0].qtd_elei_2022
	document.querySelector('.uf > .perc_elei_2022').textContent = dados_2006[0].perc_elei_2022

	// ano
	document.querySelector('.eleicao_2006 > .ano_eleicao').textContent = dados_2006[0].ano_eleicao
	
	// pt
	document.querySelector('.eleicao_2006 > .pt > .candidato_1').textContent = dados_2006[0].candidato_1
	document.querySelector('.eleicao_2006 > .pt > .partido_1').textContent = dados_2006[0].partido_1
	//document.querySelector('.eleicao_2006 > .pt > .situacao_1').textContent = dados_2006[0].situacao_1
	document.querySelector('.eleicao_2006 > .pt > .perc_1').textContent = dados_2006[0].perc_1
	document.querySelector('.eleicao_2006 > .pt > .votos_1').textContent = dados_2006[0].votos_1

	// psdb
	document.querySelector('.eleicao_2006 > .psdb > .candidato_2').textContent = dados_2006[0].candidato_2
	document.querySelector('.eleicao_2006 > .psdb > .partido_2').textContent = dados_2006[0].partido_2
	//document.querySelector('.eleicao_2006 > .psdb > .situacao_2').textContent = dados_2006[0].situacao_2
	document.querySelector('.eleicao_2006 > .psdb > .perc_2').textContent = dados_2006[0].perc_2
	document.querySelector('.eleicao_2006 > .psdb > .votos_2').textContent = dados_2006[0].votos_2

	// diferença
	document.querySelector('.eleicao_2006 > .dif > ul > li > .diferenca_pp').textContent = dados_2006[0].diferenca_pp
	document.querySelector('.eleicao_2006 > .dif > ul > li > .diferenca_absoluta').textContent = dados_2006[0].diferenca_absoluta
	
	///// 2002
	// abertura
	document.querySelector('.uf > .sg_uf').textContent = dados_2002[0].sg_uf
	document.querySelector('.uf > .nr_turno').textContent = dados_2002[0].nr_turno
	document.querySelector('.uf > .regiao').textContent = dados_2002[0].regiao
	document.querySelector('.uf > .qtd_elei_2022').textContent = dados_2002[0].qtd_elei_2022
	document.querySelector('.uf > .perc_elei_2022').textContent = dados_2002[0].perc_elei_2022

	// ano
	document.querySelector('.eleicao_2002 > .ano_eleicao').textContent = dados_2002[0].ano_eleicao
	
	// pt
	document.querySelector('.eleicao_2002 > .pt > .candidato_1').textContent = dados_2002[0].candidato_1
	document.querySelector('.eleicao_2002 > .pt > .partido_1').textContent = dados_2002[0].partido_1
	//document.querySelector('.eleicao_2002 > .pt > .situacao_1').textContent = dados_2002[0].situacao_1
	document.querySelector('.eleicao_2002 > .pt > .perc_1').textContent = dados_2002[0].perc_1
	document.querySelector('.eleicao_2002 > .pt > .votos_1').textContent = dados_2002[0].votos_1

	// psdb
	document.querySelector('.eleicao_2002 > .psdb > .candidato_2').textContent = dados_2002[0].candidato_2
	document.querySelector('.eleicao_2002 > .psdb > .partido_2').textContent = dados_2002[0].partido_2
	//document.querySelector('.eleicao_2002 > .psdb > .situacao_2').textContent = dados_2002[0].situacao_2
	document.querySelector('.eleicao_2002 > .psdb > .perc_2').textContent = dados_2002[0].perc_2
	document.querySelector('.eleicao_2002 > .psdb > .votos_2').textContent = dados_2002[0].votos_2

	// diferença
	document.querySelector('.eleicao_2002 > .dif > ul > li > .diferenca_pp').textContent = dados_2002[0].diferenca_pp
	document.querySelector('.eleicao_2002 > .dif > ul > li > .diferenca_absoluta').textContent = dados_2002[0].diferenca_absoluta
	

}
