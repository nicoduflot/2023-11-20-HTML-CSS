window.addEventListener('DOMContentLoaded', function(){
    const pModule = document.querySelectorAll('p[data-module]');

    /*console.log(pModule);*/

    /*
    on va "programmer" chaque paragraphe récupéré à une action selon la valeur du dataset module qu'il contient
    il faut donc parcourir la collection de paragraphes récupérés
    */
    pModule.forEach(function(element){
        const module = element.dataset.module;
        /*
        pour éviter de faire une série sans fin si - sinon - si sinon - ...
        on va utiliser une autre structure conditionnelle : switch
        */
        switch(module){
            case 'color':
                /* le code a appliquer */
                const color = element.dataset.color || '#ff0000';
                element.addEventListener('mouseover', function(){
                    this.style.setProperty('color', color);
                });
                element.addEventListener('mouseleave', function(){
                    this.style.removeProperty('color');
                });
            break;
            case 'font':
            case 'magie':
                const weight = element.dataset.weight || '900';
                element.addEventListener('mouseover', function(){
                    this.style.fontWeight = weight;
                });
                element.addEventListener('mouseleave', function(){
                    this.style.removeProperty('font-weight');
                });
            break;
            case 'after':
            default:
                /* code si on veux faire une action par défaut */
                element.addEventListener('click', function(){
                    element.classList.toggle('biffer');
                    /* utiliser toggle évite la forme suivante : */
                    /*
                    if(element.classList.contains('biffer')){
                        element.classList.remove('biffer');
                    }else{
                        element.classList.add('biffer');
                    }
                    */
                });
        }
    });


    

});