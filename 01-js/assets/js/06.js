/*----------------------
    LES FONCTIONS
-------------------------*/

/* 
// Déclarer une fonction
// NB : Cette fonction ne retourne aucune valeur et ne prend pas de paramètres
*/

function Bonjour() {
    alert ('Bonjour !');
}

/* 
// Je vais executer ma fonction "bonjour" et déclencher ses instructions
*/

Bonjour();

// Déclarer une fonction qui prend des variables en paramètre
// @param {string} Prenom
// @param {string} nom 


function ditBonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> ! </p>");
}

/* Appeler / Executer une fonction avec des paramètres*/

ditBonjour("Salim", "Soumare");

/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */

function Addition(nb1, nb2) {
    return nb1 + nb2;
}

document.write("<p>" + Addition(10, 5) + "</p>");

/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

