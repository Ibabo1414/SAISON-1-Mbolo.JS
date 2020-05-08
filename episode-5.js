/*Pour ce programme, il était question de demander à l'utilisateur 
un nombre et affiche son double en alerte.*/
var x = parseInt(prompt("insérez un nombre"));
while(isNaN(x)){
	x = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var multix = parseInt(x) * 2;
alert (multix);