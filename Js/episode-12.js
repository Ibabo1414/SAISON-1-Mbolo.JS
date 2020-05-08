/*Dans l'épisode 12, j'ai écris un programme qui fait la somme des 10 premiers 
nombres entiers à partir de 1. Le résultat est affiché en console.*/
var i;
var somme = 1; // variable pour la somme

for(i=1; i<=10; i++)
        somme += i; // on ajoute la valeur du compteur à notre somme
console.log(somme);