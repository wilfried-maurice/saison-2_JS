/**
 * Episode 4 : Dis-moi, quand es-tu né ?
Ecrire un programme demande la date de naissance d’un
utilisateur et vérifie si la date saisie est au format JJ/MM/AAAA.
Exemple : 13/05/2020.

 */

let date = promptInt('Donnez votre date de naissance');
let form = '00/00/0000';
    if (date === form) {
        alert('format correcte');
    } else {
        alert('non');
    }