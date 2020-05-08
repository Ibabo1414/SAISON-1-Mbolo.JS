/*Il s'agissait dans cette épisode d'écrire un programme qui demande le montant d’une facture et affiche 
le total à payer après avoir appliqué une remise de 10% si 
le montant de la facture dépasse 40.000 F.*/
var montant = parseInt(prompt("Quel est le montant de la facture ?"));
while(isNaN(montant)){
	montant = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres pour votre montant. Ex. 40000"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var remise = 10 ; //la remise de 10%
var totaleremise = parseInt(montant) * parseInt(remise)  / 100 ;

 if(montant >= 40000  &&  totaleremise === parseInt(montant) * parseInt(remise)  / 100){
    alert("Le montant de votre facture après remise est de :" + " " + totaleremise + " " + "F");
}
 else if (montant < 40000 ){
    alert("Vous ne bénéficiez pas de ce forfait !");
}