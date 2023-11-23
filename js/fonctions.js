function circo(rayon){
    let circonference = 0;
    circonference = 2 * Math.PI * rayon;
    return circonference;
}

/* console.log(Math.PI); */

console.log(circo(2));
console.log(circo(5));

/*
Opérateur variadique ou traduit rest parameter
*/

function test(...valeurs){
    console.log(valeurs);
}

test(1,2,3,4,5,6);

function test2(toto, ...valeurs){
    console.log(valeurs);
}

test2(1,2,3,4,5,6);

/*
il ne peut y avoir qu'un et un seul opératieur variadique dans les paramètres d'une fonction ET il doit OBLIGATOIREMENT être appelé en DERNIER
*/

function addition(...valeurs){
    let res = 0;
    for(let nombre of valeurs){
        if( !isNaN(nombre)){
            res = res + parseFloat(nombre);
        }
    }
    return res;
}

console.log(addition(1,2,'3',4,5,'test',6,7.5,8,9));

/* les fonctions d'arrondi */
console.log(`2.4 arrondi mathématique : ${Math.round(2.4)}`);
console.log(`2.5 arrondi mathématique : ${Math.round(2.5)}`);
console.log(`2.4 arrondi au supérieur : ${Math.ceil(2.4)}`);
console.log(`2.5 arrondi au supérieur : ${Math.ceil(2.5)}`);
console.log(`2.4 arrondi à l'inférieur : ${Math.floor(2.4)}`);
console.log(`2.5 arrondi à l'inférieur : ${Math.floor(2.5)}`);

/* Les fonction de rappel ou callback function ou fonction anonyme */

const maFonctionAnonyme = function(name = null){
    /* 
    un if simple simple peut être écrit sous la forme raccourcie d'un ternaire

    (condition a vérifier)? comportement si la condition est vérifiée : comportement si la condition n'est pas vérifiée;

    */

    /*
    if(name === null){
        return 'Hello Kitty';
    }else{
        return `Hello ${name}`;
    }
    */
    const res = (name === null)? 'Kitty' : name;
    return `Hello ${res}`;
};

console.log(maFonctionAnonyme());
console.log(maFonctionAnonyme('Jon'));

/*
fonction auto-éxécutée 
( la fonction de rappel avec ou sans paramètre)( les paramètre a envoyer dans la fonction de rappel si il y en a );
*/

(
    function(name = null){
        const res = (name === null)? 'Anonyme' : name;
        console.log(`Hello auto-éxécuté ${res}`);
    }
)('Nicolas');

/* La destructuration */

const liste = [1,2,3,4];

/* assigner aux variables suivantes a, b et c les variables du tableau */
/*
const a = liste[0];
const b = liste[1];
const c = liste[2];
*/

const [a, b, c] = liste;
console.log(`a : ${a}, b : ${b}, c : ${c}`);

const [d, , f, g] = liste;
console.log(`d : ${d}, f : ${f}, g : ${g}`);

const [h, i, j, k = 0, l = 5] = liste;
console.log(`h : ${h}, i : ${i}, j : ${j}, k : ${k}, l : ${l}`);