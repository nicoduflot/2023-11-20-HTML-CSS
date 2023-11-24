console.log('début du chargement de la page');
/* 
La page (document) une fois chargée, renvoi l'événement DOMContentLoaded, si on ajoute un écouteur d'événement à la page sur cet événement, la fonction de rappel à l'intérieur se jouera uniquement une fois tous les éléments de la page chargés
*/
document.addEventListener('DOMContentLoaded', function(){
    /* 
    je peux récupérer un élément dans la page et le lier à une variable ou une constante 
    Ici j'utilise querySelector, qui me permet de ne récupérer qu'un seul élément correspondant au sélécteur CSS indiqué
    */
    const navPrinc = document.querySelector('body > nav');
    /*
    un élément est un objet composé d'attribut et de méthode.
    Tous les éléments de la page on les mêmes attribut et méthodes (ils sont sur le même modèle).
    Tous les éléments ont donc au moins un attribut qui contient une collection (un objet itérable) des élément qu'il contient.
    Tous les éléments ont donc au moins un attribut qui contient l'élément qui est leur parent direct.
    */
    /* les éléments enfants */
    console.log(navPrinc.children);
    /* on "remonte" à lélément parent et on récupère tous les éléments du parent (élément de départ et sa fratrie si elle existe) */
    console.log(navPrinc.parentNode.children);
    /* on récupère uniquement l'élément parent */
    console.log(navPrinc.parentElement);
    /* tous les éléments ont les même méthodes */
    navPrinc.setAttribute('data-test', 'toto');
    /* tous les élément peuvant avoir des dataset */
    console.log(navPrinc.dataset);
    /*on récupère tous les éléments possédant l'attrbut data-test  */
    const dataTestToto = document.querySelectorAll('[data-test]');
    console.log(dataTestToto);
    /* l'objet itérable récupéré peut donc être parcouru à l'aide d'un foreach */
    dataTestToto.forEach(function(value){
        console.log(value.dataset.test);
        /* je peux tester tous les éléments de l'objet itérable */
        if(value.dataset.test === 'toto'){
            /* si l'objet correspond à un test, je peux aller modifier, par exemple ses attributs */
            value.setAttribute('data-toto', 'titi');
        }
    });

    const btnTestezMoi = document.getElementById('testP');
    console.log(btnTestezMoi);
    const btnTest = document.querySelector('#testP');
    console.log(btnTest);
    btnTest.addEventListener('click', function(event){
        event.stopPropagation();
        console.log(event);
        console.log('on a cliqué sur le bouton testP');
        //const listP = document.getElementsByTagName('p');
        const listP = document.querySelectorAll('p');
        console.log(listP);
    });

    const affP = document.querySelector('#showP');
    const allP = document.querySelectorAll('p:not(.special)');
    allP.forEach(function(para){
        para.addEventListener('click', function(){
            affP.innerHTML = para.innerHTML;
        });
    });


});