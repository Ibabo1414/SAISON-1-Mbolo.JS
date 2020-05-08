/*Il s'agissait dans cette épisode d'écrire un programme qui demande à l'utilisateur 
deux nombres et affiche leur somme en alerte.
*/
var nombre1 = parseInt(prompt("insérez le premier nombre")); //L'utilisateur insére le nombre qu'il souhaite.
while(isNaN(nombre1)){
	nombre1 = parseInt(prompt("Vous vous êtes trompé... Veillez insérer le premier nombre"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var nombre2 = parseInt(prompt ("insérez le deuxième nombre"));//Idem.
while(isNaN(nombre2)){
	nombre2 = parseInt(prompt("Vous vous êtes trompé... Veillez insérer le deuxième nombre"));
	/*Idem avec le nombre1*/
}

var nombre1etnombre2 = parseInt(nombre1) + parseInt(nombre2);
alert (nombre1etnombre2);