var villes = new Array("nantes","paris","saint-nazaire","angers","le mans")

villes.forEach(function(ville) {
	console.log(ville);
})

function lettreA(string) {
	return string.indexOf('a') > -1;
}

console.log("lettreADansToutesLesVilles == " + villes.every(lettreA))

console.log("auMoinsUneVilleAvecUnTiret == " + villes.some(function(ville) {return ville.indexOf('-') > -1}));

var villesSansTiretSansEspace = [];

villes.forEach(function(ville) {
	if (ville.indexOf('-') == -1 && ville.indexOf(' ') == -1) {
		villesSansTiretSansEspace.push(ville);
	}
})

console.log("villesSansTiretSansEspace == [" + villesSansTiretSansEspace.toString() + "]");


var villesMajusculeSeTerminantParS = [];

villes.forEach(function(ville) {
	if (ville.charAt(ville.length-1) == 's') {
		villesMajusculeSeTerminantParS.push(ville.toUpperCase());
	}
})

console.log("villesMajusculeSeTerminantParS == [" + villesMajusculeSeTerminantParS.toString() + "]");
