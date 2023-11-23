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