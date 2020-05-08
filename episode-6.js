/*Ici, j'ai écris un programme qui demande à l’utilisateur trois 
nombres et affiche la moyenne de ces nombres en alerte.
*/
var x = parseInt(prompt("insérez le prémier nombre"));
while(isNaN(x)){
	x = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var y = parseInt(prompt("insérez le deuxième nombre"));
while(isNaN(y)){
	y = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var z = parseInt(prompt("insérez le troisième nombre"));
while(isNaN(z)){
	z = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres"));
	/*JIdem*/
}
var moyenne = parseInt(x) + parseInt(y) + parseInt(z) / 2;
alert (moyenne);