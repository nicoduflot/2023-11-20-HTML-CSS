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

    const imgPipBoy = document.querySelector('#imgOver');
    imgPipBoy.addEventListener('mouseenter', function(){
        this.setAttribute('src', './images/pip-boy-thumb-up.png');
        this.setAttribute('alt', 'Pip boy avec le bras droit');
        this.nextElementSibling.innerHTML = 'Pip boy sans le bras droit';
    });
    
    imgPipBoy.addEventListener('mouseleave', function(){
        this.setAttribute('src', './images/pip-boy-thumb-down.png');
        this.setAttribute('alt', 'Pip boy sans le bras droit');
        this.nextElementSibling.innerHTML = 'Pip boy avec le bras droit';
    });

    let cptSpan = 0;
    document.querySelector('#addSpan').addEventListener('click', function(e){
        e.stopPropagation();
        cptSpan = cptSpan + 1;
        /* création d'un élément span */
        const span = document.createElement('span');
        /* si besoin ajouter un ou plusieurs attributs, classes, etc au span */
        span.classList.add('testSpan', 'toto');
        /* ajouter le n°du span à l'élément */
        const content = document.createTextNode(`span n°${cptSpan}`);
        /* ajouter le noeud de texte au span */
        span.appendChild(content);
        /* ajouter un écouteur d'événement au span */
        span.addEventListener('click', function(event){
            event.stopPropagation();
            this.remove();
        });
        /* ajouter l'élément au paragraphe */
        document.querySelector('#spanP').appendChild(span);
        console.log(span);
    });

    const allDocs = document.querySelectorAll('a[data-url][data-target]');
    console.log(allDocs);
    allDocs.forEach(function(link){
        link.addEventListener('click', function(event){
            event.preventDefault();
            /*
            console.log(link.dataset);
            console.log(link.dataset.url);
            console.log(link.dataset.target);
            */
            document.querySelector(`iframe[name="${link.dataset.target}"]`).setAttribute('src', link.dataset.url);
        });
    });

});