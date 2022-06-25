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

    let elemMunicipios = document.querySelectorAll('#mapa-conteudo svg path');
}
loadMapData();

// 2h01min