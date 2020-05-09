
/*Ici, il est question d'écrire un programme qui demande sans cesse à l'utilisateur de renseigner 
la bonne réponse d’une opération (ex: Combien font 5+1 ?) 
jusqu’à ce qu’il renseigne la bonne réponse.*/
var x = 550;
var reponse = parseInt(prompt("Combien font 475 + 75 ?"));
while(isNaN(reponse)){
	reponse = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres pour l'addition. Ex. 18"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu des chiffres*/
}
while (reponse !== x){
	alert("Mauvaise reponse !");//alert s'affichera uniquement lorsque la reponse sera fausse.
	reponse = parseInt(prompt("Vous avez insérez une mauvaise reponse... Ne vous découragez pas ! Combien font 475 + 75 ?"));//Ce champ s'affiche lorsque la reponse est fausse.
}
alert("Félicitation, vous avez trouver la bonne reponse."); //alert ne va afficher ce champ que la reponse sera correcte.
