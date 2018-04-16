/*---------------------------------------
    INCREMENTATION ET DECREMENTATION
----------------------------------------*/

// ##### INCREMENTATION ##### //

var nb1 = 1;
nb1 = nb1 + 1;
nb1 += 1;
// Ecriture simplifiée //
nb1++; // toujours par pas de 1 //

// ##### DECREMENTATION ##### //

var nb1 = 1;
nb1 = nb1 - 1;
nb1 -= 1;
// Ecriture simplifiée //
nb1--; // toujours par pas de 1 //

// ##### subtilité ##### //
nb1 = 0;
console.log(nb1++)
console.log(nb1);

nb1 = 0;
console.log(++nb1);