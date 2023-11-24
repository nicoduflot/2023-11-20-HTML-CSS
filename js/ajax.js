function listAjax(data){
    let list = '<ul>';
    data.forEach(function(element){
        /*console.log(element);*/
        for(key in element){
            list = list + '<ul>';
            if(typeof element[key] !== 'object'){
                list = list + `
                <li>
                    ${key} => ${element[key]}
                </li>
                `;
                console.log(`${key} => ${element[key]}`);
            }else{
                const subObj = element[key];
                list = list + '<ul>';
                console.log(`${key} => `);
                for(subKey in subObj){
                    if(typeof subObj[subKey] !== 'object'){
                        list = list + `
                        <li>
                            \t${subKey} => ${subObj[subKey]}
                        </li>
                        `;
                        console.log(`\t${subKey} => ${subObj[subKey]}`);
                    }
                }
                list = list + '</ul>';
            }
            list = list + '</ul>';
        }
        console.log('------------');
        
    });
    list = list + '</ul>';
    return list;
}

window.addEventListener('DOMContentLoaded', function(){
    const allRessourcesBtn = this.document.querySelectorAll('button[data-type][data-url]');
    allRessourcesBtn.forEach(function(button){
        button.addEventListener('click', function(){
            fetch(button.dataset.url)
            .then(function(reponse){
                return reponse.json();
            })
            .then(function(data){
                /*console.log(data);*/
                document.querySelector('#resultats').innerHTML = listAjax(data);
            })
        });
    });
});