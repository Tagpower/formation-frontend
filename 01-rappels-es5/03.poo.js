
//Fonction constructeur
function Personne(nom, prenom, pseudo) {
	this.nom = nom;
	this.prenom = prenom;
	this.pseudo = pseudo;

	this.getNomComplet = function() {
		return this.prenom + ' ' + this.nom + " (" + this.pseudo + ")";
	}
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");

var paul = new Personne("LEMAIRE", "Paul", "paul44");

console.log(jules.nom)
console.log(jules.prenom)
console.log(jules.pseudo)

console.log(jules.getNomComplet())

function afficherPersonne(personne) {
	console.log(personne.nom)
	console.log(personne.prenom)
	console.log(personne.pseudo)

	console.log(personne.getNomComplet())
}

afficherPersonne(paul);

//Modifier un objet
jules.pseudo = "jules44"

console.log(jules.getNomComplet())

//Ajouter une propriété à Personne
console.log(jules.age)

Personne.prototype.age = "Non renseigné"

console.log(jules.age)

jules.age = 30;

console.log(jules.age)


//Ajouter une méthode à Personne
Personne.prototype.getInitiales = function() {
	return this.prenom.charAt(0) + this.nom.charAt(0);
}

console.log(jules.getInitiales());

//Objet sans fonction constructeur
var robert = {prenom : "Robert",
			  nom : "LEPREFET",
			  pseudo : "robert77",
			  getNomComplet : function() {return this.prenom + ' ' + this.nom + " (" + this.pseudo + ")";}}

afficherPersonne(robert);

//Héritage via une fonction constructeur
function Client(nom, prenom, pseudo, numero) {
	Personne.call(this, nom, prenom, pseudo);
	this.numero = numero;
	this.getInfos = function() {return this.prenom + ' ' + this.nom + " - Client " + this.numero;}
}
Client.prototype = new Personne();
Client.prototype.constructor = Client;

var steve = new Client("LUCAS", "Steve", "steve44", "A01");


afficherPersonne(steve)
console.log(steve.numero)
console.log(steve.getInfos());