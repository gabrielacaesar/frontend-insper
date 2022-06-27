let mapaMalha;
let mapaDados;

async function loadMapData(){
	let mapaUrl = 'https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=UF';
	let dadosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
	
	let mapaSvg = await fetch(mapaUrl)
	mapaMalha = await mapaSvg.text();
	console.log(mapaSvg)

	let dadosJson = await fetch(dadosUrl);
    mapaDados = await dadosJson.json();

    let mapaConteudo = document.querySelector('#map-box');
    mapaConteudo.innerHTML = mapaMalha;

	// 1. seleciona todos os paths do svg (= id do mapaUrl)
	// 2. para cada path eventListener de hover
	// 3. dispara a funcao mostraHover(), criada fora

    let elemMunicipios = document.querySelectorAll('#mapa-conteudo svg path');
}
loadMapData();

function mostraHover(){
	// 1. get target = id do path
	let uf = event.target.id
	// 2. para uf de mapaDados > id (que ta no json) = uf
	// 3. agora pega a uf e coloca no hover
}

// 2h01min