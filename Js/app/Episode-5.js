/**
 * Episode 5 : Fiche de renseignement
Ecrire un programme qui :2
- demande à l'utilisateur de saisir son nom, prénom
ainsi que son sexe ;
- stocke ces informations dans un objet;
- ajoute une clé titre à cet objet ayant comme valeur M
ou Mme en fonction du sexe de l’utilisateur;
- Affiche l’objet en console.

 */
let name = prompt('Donnez votre nom'); pre = prompt('Donnez votre prenom');
let genre = prompt('Donnez votre sexe');

    let utilisateur = {
        nom: 'Obame',
        prenom: 'Tedy',
        sexe: 'masculin',
        titre: 'M',
    }
    console.log(utilisateur);