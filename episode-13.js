
/*Ici, il est question d'écrire un programme qui demande sans cesse à l'utilisateur de renseigner 
la bonne réponse d’une opération (ex: Combien font 5+1 ?) 
jusqu’à ce qu’il renseigne la bonne réponse.*/

var reponse = parseInt(prompt("Combien font 10 + 12 ?"));
while(isNaN(reponse)){
	reponse = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres pour l'addition. Ex. 18"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var x = 22;

while (reponse != 22){
	alert("Mauvaise reponse !");
	reponse = parseInt(prompt("Vous avez insérez une mauvaise reponse... Combien font 10 + 12 ?")); //Ce champ s'affiche lorsque la reponse est fausse.
	alert("Vous avez encore donné une fausse reponse... !");
	reponse = parseInt(prompt("Vous avez une nouvelle fois insérez une mauvaise reponse... Combien font 10 + 12 ?")); //Ce champ s'affiche lorsque la reponse est fausse.
 	break; //Break a été utilisé ici pour éviter que la boucle ne se repete à l'infini.
}
if(reponse === 22){
 	alert("Félicitation, vous avez trouver la bonne reponse.");
}
