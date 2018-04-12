// alert('WOW ! Tu es toujours avec moi...');

// 1. déclarer une variable dans JS
var Prenom;

// 2.Affecter une valeur
Prenom = "Salim";

// 3.Afficher la valeur de ma variable dans la console
console.log(Prenom);

/*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LES TYPES DE VARIABLES   ~ ~ ~ ~ ~ ~ |
---------------------------------------------------*/

// Ici, typeof me permet de connaitre le type de ma variable.
console.log(typeof Prenom);

// Déclaration d'un nombre
var Age = 40;

// Afficher dans la console
console.log(Age);

// Connaitre son type
console.log(typeof Age);

/*--------------------------------------------------\ 
| ~ ~ ~ ~ ~   LA PORTEE DES VARIABLES   ~ ~ ~ ~ ~ ~ |
|                                                   |
|Les variables déclarées directement à la racine du | 
|fichier JS sont appelées variables GLOBALES.       |
|                                                   |
|Elles sont disponibles dans l'ensemble de votre    | 
|document, y compris dans les fonctions.            |
|                                                   |
|###                                                |
|                                                   |
|Les variables déclarées à l'interieur d'une        |
|fonction sont appelées variables LOCALES.          |
|                                                   |
|Elles sont disponibles uniquement dans le contexte | 
|de la fonction ou du bloc qui les contient.        |
|                                                   |
|###                                                |
|                                                   |
|Depuis Ecma6, vous pouvez declarer une variable    |
|avec le mot clé "let"                               |
|                                                   |
|Votre variable sera alors accesible uniquement dans|
| le bloc dans lequel elle est contenu.             |
|                                                   |
|Si elle est déclarées dans une condition, elle     |
|sera alors disponible uniquement dans le bloc de   |
|la condition.                                      |
|                                                   |
---------------------------------------------------*/

// Les variables de type FLOAT
var uneDecimal = -2.984;
console.log(uneDecimal);
console.log(typeof uneDecimal);

// Les booléens (TRUE / FALSE)
var unBooleen = false;
console.log(unBooleen);
console.log(typeof unBooleen);

// Les Constantes

/* La déclaration "CONST" permet de créer une constante accessible uniquement en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieure. Une constante ne peut pas être déclarée à nouveau.

Généralement part convention, les constantes sont en majuscules.

Depuis Ecma6, on recommande l'utilisation des constantes plutôt que var ou let s'il n'y aura pas de modification de valeur à votre variable.
*/

const HOST = "localhost";

const USER = "root";

const PASSWORD = "mysql";

/* Je ne peux pas faire cela... */
// (USER ="SALIM")
// Uncaught TypeError: Assignment to constant variable

// (const USER = "SALIM")
// Uncaught SyntaxError: Identifier 'USER' has already been declared

/*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LA MINUTE INFO   ~ ~ ~ ~ ~ ~          |
|Au fur et à menure que l'on affect et ré-affecte   |
|des valeurs à une variable, celle-ci prend la      |
|nouvelle valeur et le nouveau type.                |
|                                                   |
|En JAVASCRIPT, les variables sont autotypées.      |
|                                                   |
|Pour convertir une variable de type "number" en    |
|"stringe", et "string" en "number", je peux        |
|utiliser les fonctions natives de JS.              |
|                                                   |
---------------------------------------------------*/

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);


/* La fonction parseInt() pour retourner un Entier à partir de mon string. */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Je ré-affecte une valeur à ma variable
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre)
console.log(unNombre);
console.log(typeof unNombre);

// Conversion d'un nombre en string avec la fonction toString
unNombre = 10;
var monNombreEnString =  unNombre.toString();
console.log(unNombre);
console.log(monNombreEnString); 