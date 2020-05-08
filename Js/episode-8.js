/*J'ai écrire un programme qui demande le nom de l’utilisateur et 
son sexe et affiche ​Bonjour monsieur ​<nom> ou ​
Bonjour madame​​<nom>.​​​Où<​ nom>​estlenomsaisiparl’utilisateur.
*/
var nom = prompt("Quel est votre nom ?");
var sexe = prompt("Quel est votre sexe ?");

if(sexe === "homme" || sexe === 'HOMME' || sexe === 'Homme' || sexe === 'H' || sexe === 'h')
{
   alert("Bonjour monsieur" + " " + nom);
}
else if(sexe === 'femme' || sexe === 'FEMME' || sexe === 'Femme' || sexe === 'F' || sexe === 'f')
{
    alert("Bonjour madame" + " " + nom);
}
