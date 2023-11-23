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

/**
 * 
 * Types
 * [primitif]
 * number           => nombre (entier, à virgule)
 * bool             => Booléen true ou false
 * 
 * [référence]
 * String           => chaîne de caractère
 * Array            => tableau de données
 * Object           => object
 * JSON             => JavaScript Object Notation
 * 
*/

/**
 *      Opérateurs
 *      
 *      Mathématiques
 *      
 *      +    => addition (mais aussi la concaténation pour les chaîne de caractère) 'toto' + 'tata' => 'tototata';
 *                      'nicolas a ' + age + ' ans' => 'nicolas a 43 ans'
 *                      `nicolas a ${age} ans`
 *      -    => soustraction
 *      /    => division
 *      %    => modulo : renvoi le reste d'une division entière 5%2 => 1
 *      *    => multiplication
 *      **   => Opérateur puissance remplace Math.pow()
 *           => 2 exposant 3 Math.pow(2,3) <=> 2**3
 *      ++   => incrémentation
 *      --   => décrémentation
 * 
*/

let cpt = 0;

cpt = cpt + 1; // ajoute 1 à cpt = 1
console.log(cpt ); // affiche 1
cpt++; // ajoute 1 à cpt = 2
console.log(cpt);
console.log(cpt++); // affiche 2 puis augmente de 1 cpt
console.log(cpt); // affiche le résultat du cpt++ précédent : 3
console.log(++cpt); // ajoute 1 à cpt puis l'affiche : 4

/**
 *      Logique
 *      
 *      && (ET)
 *               a && b => a est vrai et b est vrai  =>  vrai
 *               a && b => a est vrai et b est faux  =>  faux
 *               a && b => a est faux et b est vrai  =>  faux
 *               a && b => a est faux et b est faux  =>  faux
 *      
 *       || (OU)
 *               a || b => a est vrai et b est vrai  =>  vrai
 *               a || b => a est vrai et b est faux  =>  vrai
 *               a || b => a est faux et b est vrai  =>  vrai
 *               a || b => a est faux et b est faux  =>  faux
 *      
 *      ! (NON)  
 *               !a  => si a est vrai, !a => faux
 *               !a  => si a est faux, !a => vrai
 *      
 *      ^ (NON OU ou XOR) : OU EXCLUSIF BINAIRE
 *               a ^ b => a est vrai et b est vrai  =>  faux
 *               a ^ b => a est vrai et b est faux  =>  vrai
 *               a ^ b => a est faux et b est vrai  =>  vrai
 *               a ^ b => a est faux et b est faux  =>  faux
 * 
*/

/*
créer deux variables nombre et afficher
    leur addition
    leur soustraction
    leur multiplication
         division
         le modulo
    var1 puissance var2
*/

const a = 42;
const b = 66;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a}**${b} = ${a**b}`);

/**
 * 
 *      Opérateurs de comparaison
 *      
 *      < strictement inférieur à
 *      >    "        supérieur à
 *      <= inférieur ou égal
 *      >= supérieur ou égal
 *      
 *      == égalité non stricte (compare la valeur)
 *      === égalité stricte (compare valeur et type)
 *      
 *      '2' == 2 => vrai
 *      '2' === 2 => faux
*/

const c = 1;
const d = '1';
console.log(c == d); // en valeur 1 == '1' => vrai
console.log(c === d); // en aleur ET en type 1 !== '1' => faux

/**
 *      
 *      !=  différence non stricte (compare la valeur)
 *      !==  différence stricte (compare valeur et type)
 *      
 *      '2' != 2 => faux
 *      '2' !== 2 => vrai
 * 
*/

