/*Ecrire un programme qui demande l'âge de l’utilisateur et affiche : ​
Vous êtes mineur​ ou V​ ous êtes majeur​.*/
var age = parseInt(prompt("Quel âge avez-vous ?"));
while(isNaN(age)){
	age = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres pour votre âge"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
if(age >= 18)
{
   alert("Vous êtes majeur.");
}
else
   alert("Vous êtes mineur");