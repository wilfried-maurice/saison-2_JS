/**
 * Episode 6 : Quel jour sommes-nous ?
Ecrire un programme qui demande à l’utilisateur de saisir
le numéro d’un jour et renvoie le jour correspondant.
Exemple :
- Entrée : 3
- Sortie : Mercredi
 */
let day = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanhe'];
let num = Number(window.prompt("Type a number", ""));

if (num === 1) {
    alert('Lundi');
} else if (num === 2) {
    alert('Mardi');
} else if (num === 3) {
    alert('Mercredi');
} else if (num === 4) {
    alert('Jeudi');
} else if (num === 5) {
    alert('Vendredi');
} else if (num === 6) {
    alert('Samedi');
} else if (num === 7) {
    alert('Dimanche');
} else{
    alert("Ce nombre n'est pris en compte");
}
