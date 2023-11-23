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

/* Les tableaux */

/* avant es6 on les déclarait ainsi */
/*
var tableau = new Array('valeur', 1, 12, 13.5, true);
console.log(tableau);
console.table(tableau);
*/

const tableau = ['valeur', 1, 12, 13.5, true];
console.log(tableau);
console.table(tableau);
console.log(typeof tableau);
console.log(tableau.length);

/* 
les tableau associatif peuvent être créés "artificiellement" grace (à cause) de la permissivité de JS 
*/

let tabAsso = [];
console.log(tabAsso);
tabAsso['fruit'] = 'cerise';
console.log(tabAsso);

/* 
Il est interdit de créer un tableau associatif de cette manière 
on utilsera une collection, particulièrement la collection map
*/

let cars = ['Peugeot', 'Citroën', 'Renault'];

console.table(cars);

/* ajouter une valeur à un tableau en bout de tableau */

cars[cars.length] = 'Ford'; 
/* non non non, il y a une méthode associée aux tableau qui existe */
console.table(cars);

let tabMoche = [];
tabMoche[0] = 1;
tabMoche[1] = 2;
tabMoche[12] = 3;

console.log(tabMoche);

/* .push() */

cars.push('Fiat');
console.log(cars);

/* comment parcourir un tableau ? */
/* 
les tableaux sont des objets itérables : on peut les parcourir avec des boucles (et avec certaines méthodes associées aux tableaux et objets)
*/

console.log('------------------- les boucles -----------------');
console.log('------------------- boucle for ------------------');

for(let i = 0; i < cars.length; i = i + 1){
    console.log(`cars[${i}] : ${cars[i]}`);
}

for(let index in cars){
    console.log(`cars[${index}] : ${cars[index]}`);
}

/* le for in permet aussi de parcourir les objets */

/* prenont un objet litéralement */

const obj = {
    nom: 'Duflot',
    prenom: 'Nicolas',
    presentation: function(){
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
    }
};

console.log(obj);
console.log(typeof obj);
console.log(obj.nom);
console.log(obj.presentation());

for(let key in obj){
    if(typeof obj[key] !== 'function'){
        console.log(`la clef est ${key}, la valeur de la clef est ${obj[key]}`);
        console.log(typeof obj[key]);
    }
}

/* avec es6 est arrive le for of */

for(let value of cars){
    console.log(`la valeur actuelle dans cars est ${value}`);
}

console.log('------------- boucles "tant que" et "faire tant que" ------------');
console.log('------------- boucle "tant que" ------------------');
/* tant que la condition n'est pas atteinte, on éxécute le comportement indiqué */

cpt = 0;
while(cpt < cars.length){
    console.log(cars[cpt]);
    cpt = cpt + 1;
}

console.log('------------- boucle "faire tant que" ------------------');
cpt = 0;
do{
    console.log(`cpt = ${cpt}`);
    cpt = cpt + 1;
}while(cpt < 0);


console.log('------------- méthodes des tableaux ------------------');
console.log('------------- parcours des tableaux ------------------');
console.log('------------- foreach (n\'est pas limié au tableaux, fonctionne aussi avec les objets itérables) ------------------');

cars.forEach(function(value, index, tab){
    console.log(value, index, tab);
});

let tabTaux = [1.1, 1.5, 1.8];

console.log(tabTaux);

tabTaux.forEach( function(value, index, tab){
    tab[index] = value * 23.5;
});

console.log(tabTaux);

console.log('------------- .map() (limié au tableaux) ------------------');

cars.map(function(value, index, tab){
    console.log(value, index, tab);
});

tabTaux = [1.1, 1.5, 1.8];

console.log(tabTaux);

tabTaux.map( function(value, index, tab){
    tab[index] = value * 23.5;
});

console.log(tabTaux);

console.log('------------- .entries() ------------------');
/*
extrait la clef et la valeur de l'élément parcouru du tableau, et renvoi le tout sous la forme d'un tableau
*/

for( let entry of cars.entries() ){
    console.log(entry);
}

cars.push('Hyundai');
cars.push('Seat', 'Toyota');
cars.push('Lexus','Volvo');

/* 
"Supprimer" les valeur d'un tableau 
.pop(), .shif(), .splice()
*/

/* .pop() => extrait la dernière valeur du tableau */
console.log(cars);
const lastEntry = cars.pop();
console.log(cars);
console.log(lastEntry);

/* .shift() => extrait la première valeur du tableau */
const firstEntry = cars.shift();
console.log(cars);
console.log(firstEntry);

/* .splice() #1 extraire une ou des valeur contigües */
const removed = cars.splice(1, 3);
console.log(cars);
console.log(removed);

/* .splice() #2 remplacer une ou des valeurs contigües par un ou plusieurs valeurs */
const replaced = cars.splice(0, 1, 'Alpine', 'Mazda');
console.log(cars);
console.log(replaced);

/* .splice() #2 remplacer une ou des valeurs contigües par un ou plusieurs valeurs */
cars.splice(1, 0, lastEntry, firstEntry, removed[0], removed[1], removed[2], replaced[0]);
console.log(cars);

/* comment créer une copie d'un tableau ? */
/*
let carsClone = cars;
*/

/* 
.slice() permet de copier une ou plusieurs valeurs d'un tableau renvoyées sous forme de tableau
*/

let carsClone = cars.slice(2, 7);
console.log(cars);
console.log(carsClone);
carsClone.pop();
console.log(cars);
console.log(carsClone);

carsClone.sort();
console.log(carsClone);
carsClone.reverse();
console.log(carsClone);

let tabExemple = '123.5, 12, 54.3'.split(',');
console.log(tabExemple);
let chaineExemple = [123.5, 12, 54.3].join(';');
console.log(chaineExemple);

let unMot = 'toto';
unMot = unMot.split('').reverse().join('');
console.log(unMot);

/* et les tableaux à deux dimension ? */

let tab2d = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
];

console.table(tab2d);
tab2d[0][3] = 1;
console.table(tab2d);

let tab2d2 = [
    [12, 23, 56],
    ['toto', 'tata'],
    [21, 32, 45, ['titi']]
];

console.table(tab2d2);

carsTest = [ 
    ['Fiat', 1996], 
    ['Kya', 1995], 
    ['Kya', 1990], 
    ['Ford', 1950]
];

console.table(carsTest);
carsTest.sort();
console.table(carsTest);