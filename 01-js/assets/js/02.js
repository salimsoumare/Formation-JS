// Déclarer un tableau indexé
var monTableau = [];
var myArray    = new Array;

monTableau [0] = "Rahma";
monTableau [1] = "Freddy";
monTableau [2] = "Ousmane";

// Affiche toutes les données
console.log(monTableau);

// Affiche Freddy (valeur [2] de monTableau
console.log(monTableau[1]);

var NosPrenoms = ["Salim", "Greg", "Cheffia", "Glenn", "Julien"];
console.log (NosPrenoms);

// Déclarer et affecter des valeurs à un objet
// PAS DE TABLEAU ASSOCIATIF EN JS

var coordonee = {
    prenom : "Salim",
    nom : "Soumaré",
    taille : 190,
};

console.clear();
console.log(coordonee);
console.log(coordonee['prenom']);
console.log(coordonee.prenom);
console.log(coordonee.nom);

// Je vais créer deux tableaux indexés

// var listeDePrenom = ["Ousmane", "Cheffia", "Hugo"];
// var listeDeNom = ["MAMA", "BANALLAL", "LIEGEARD"];
// var Annuaire = [listeDePrenom, listeDeNom];
// console.log(Annuaire);
// document.write(Annuaire[0][1]);
// document.write('')
// document.write(Annuaire[1][1]);

/*--------------------------------------------
| ~ ~ ~ ~ ~   EXERCICE   ~ ~ ~ ~ ~ ~          |
|Créer un tableau à deux dimension appelé     |
|"AnnuaireDesStagiaires" qui contiendra toutes|
|les coordonées pour chaque stagiaire         |
|Ex. Nom, Prénom, Tel                         |
----------------------------------------------*/
console.clear();
var lesPrenoms = ["Salim", "Freddy","Julien"]
var lesNom = ["Soumare", "Mounamia","Jul"]
var lesTel =  ["07", "08","09"]
var Annuaire = [lesPrenoms, lesNom, lesTel]
console.log(Annuaire)

var AnnuaireDesStagiaires = [
    { prenom : "Hugo", nom : "LIEGEARD", tel : "0783 97 15 15" },    
    { prenom : "Salim", nom : "SOUMARE", tel : "XXXX XX XX XX" },
    { prenom : "Pransun", nom : "BALASUBRAMANIAM", tel : "XXXX XX XX XX" },
];

console.log(AnnuaireDesStagiaires); 

// -- Exemple 3D

var Contacts = [

    {
        prenom      :   "Hugo",
        nom         :   "LIEGEARD",
        coordonnees :   {
            email   :   "wf3@hl-media.fr",
            tel     :   {
                fixe    :   "0596 108 328",
                fax     :   "0596 108 632",
                port    :   {
                    prive   :   "07 83 97 10 15",
                    pro     :   "07 83 97 15 15"
                }
            },
            adresse :  {
                ville   :   "Ducos",
                cp      :   "97224",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Rodrigue",
        nom         :   "NOUEL",
        coordonnees :   {
            email   :   "rodrigue.nouel@hl-media.fr",
            tel     :   {
                fixe    :   "0596 56 78 89",
                fax     :   "0596 32 15 22",
                port    :   {
                    prive   :   "0696 78 89 56",
                    pro     :   "0696 89 23 45"
                }
            },
            adresse :  {
                ville   :   "Fort-de-France",
                cp      :   "97200",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Gregory",
        nom         :   "D'HAEM",
        coordonnees :   {
            email   :   "greg.dhaem@hl-media.fr",
            tel     :   {
                fixe    :   "0675 89 78 45",
                fax     :   "",
                port    :   {
                    prive   :   "0620 86 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "les Mesnuls",
                cp      :   "78490",
                region  :   "Ile de France",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    }

];

var CollecteDeDonnees = [
    {
        Name : "Salim",
        Surname : "Soumare",
        Birth : "30/05/91",
        tel : {
            Landline : "01 34 74 76 19",
            Mob : "07 81 10 53 19",
            fax : "01 01 01 01 01"
        },
        email : "salim.soumare@hotmail.fr",
        coordonees : {
            Adress : "9 Allée des chênes",
            ville : "Les Mureaux",
            cp : "78130",
        },
    }
]

/* console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email); */

// console.log(Contacts[0].coordonnees.adresse.pays.nom);

// () = fonctions / {} = objets du tableau / [] = tableau

/*--------------------------------------------
| ~ ~ ~ ~ ~   Ajouter un élément  ~ ~ ~ ~ ~ ~ |
|Créer un tableau à deux dimension appelé     |
|"AnnuaireDesStagiaires" qui contiendra toutes|
|les coordonées pour chaque stagiaire         |
|Ex. Nom, Prénom, Tel                         |
----------------------------------------------*/

var Couleurs = ['Rouge', 'Jaune', 'Vert'];

/* Si je souhaite ajouter un élément dans mon tableau. Je fais appel à la fonction push () qui me renvoie le nom nombre d'élémént. */

console.clear();
console.log(Couleurs);
var nbElementsDeMonTableau = Couleurs.push('Orange')
console.log(Couleurs);
console.log(nbElementsDeMonTableau);

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift

/* NB: La fonction unshift() permet d'ajouter un ou plusieurs éléments de mon tableau et d'en récuperer la valeur. Je peux accessoirement récuperer cette valeur dans un variable */

/*------------------------------------------*\
| ~ RECUPERER ET SORTIR LE DERNIER ELEMEN ~ |                       
\*------------------------------------------*/

/* La fonction pop() me permet de supprimer un ou plusieurs éléments de mon tableau et d'en récuperer la valeur. Je peux accessoirement récuperer cette valeur dans une variable  */

var monDernierElement = Couleurs.pop()
console.log(Couleurs);
console.log(monDernierElement);

/* La même chose est possible avec le 1er élément en utilisant la fonction shift.

NB : La fonction splice() vous permet de sortir un pour plusieurs éléments de votre tableau.*/
