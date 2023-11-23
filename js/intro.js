// commentaire en une ligne
/*
commentaire en bloc
Préconisé même sur une ligne => si le code est minifié, le commentaire en une ligne peut mettre à mal le script
*/

/* les déclarations de variable */
//var prenom = 'Jean'; // var pas bien
let prenom = 'Jean';
console.log(prenom);
console.log(typeof prenom);

function test(){
    let prenom = 'toto';
    console.log(prenom);
    return prenom;
}

test();

console.log(prenom);

let toto = null;

let nom = 'Neige';

console.log(prenom, nom);

/* console.log('Je m\'appelle ' + prenom + ' ' + nom); */

console.log(`Je m'appelle ${prenom} ${nom} !`);
console.log(`Je m'appelle ${test()} ${nom} !`);
console.log(`6 + 3 = ${6 + 3} !`);
/* l'interpolation de texte */

console.log(typeof nom);

nom = 35;

console.log(nom, typeof nom);

nom = nom + 0.5;

console.log(nom, typeof nom);

nom = nom + ''; /* ajouter une chaine de caractère à un nombre transforme le nombre en chaîne de caractère, c'est un transtypage */
console.log(nom, typeof nom);

const LANGFR = 'FR-fr';
const LANGUK = 'EN-uk';
const LANGUS = 'EN-us';
const POUND = '£';
const USD = '$';
const EURO = "€";

const SERVFR = '129.168.0.1';
const SERVUS = '129.168.0.63';

const laPause = 'Café ?';