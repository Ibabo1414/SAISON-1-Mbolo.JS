/*Dans cette épisode, il s'agit d'écrire un programme qui demande la moyenne d’un élève et 
affiche sa mention (Passable, Assez-Bien, Bien, Très bien, Excellent).*/

var moyenne = parseInt(prompt("Quel est votre moyenne ?")); //La fonction "parseInt()" a été ajouté pour retourner une chaine en nombre entier.
while(isNaN(moyenne)){
	moyenne = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}

if(moyenne >= 0 && moyenne < 10){
   alert("Faible"); //Les moyennes comprises entre 0 et 9.
} 
 else if(moyenne >= 10 && moyenne < 12){
    alert("Passable"); //Les moyennes comprises entre 10 et 11.
}
if(moyenne >= 12 && moyenne < 14){
   alert("Assez-Bien"); //Les moyennes comprises entre 12 et 13.
}
else if(moyenne >= 14 && moyenne < 16){
    alert("Bien"); //Les moyennes comprises entre 14 et 15.
} 
if(moyenne >= 16 && moyenne < 18){
   alert("Très bien"); //Les moyennes comprises entre 16 et 17.
}
else if(moyenne >= 18 && moyenne === 20){
    alert("Excellent"); //Les moyennes comprises entre 18 et 20 uniquements.
} 