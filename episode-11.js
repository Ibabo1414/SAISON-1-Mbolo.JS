/*J'ai écris un programme qui demande un nombre à l’utilisateur 
et affiche la table de multiplication de ce nombre jusqu’à 10.*/
var somme = parseInt(prompt("Veuillez insérer n'importe quel nombre pour obtenir votre table de multiplication !"));
while(isNaN(somme)){
	somme = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres pour votre table de multiplication"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var x = 10;
var y;

for (var i = 0; i <=10; i++){
	y = somme * i;

	document.write(" "+somme+ "*" +i+ "=", + y +"<br/>"); 
	/*Le résultat va s'afficher sur la page web 
	car nous avons utilisé la fonction : "document.write"*/
}
