const section = document.querySelector('section');
const cases = document.createElement('div');
cases.classList.add('case');

const colors = [
    '#8B5F33', '#E0A96D', '#7C4E2F', '#B97B2F', '#C78203', '#9A6E3B',
    '#D89B5A', '#936F56', '#8D6E4B', '#A56E3C', '#D89B5A', '#7A513C',
    '#B56E31', '#E0A96D', '#8B5F33', '#9A6E3B', '#C78203', '#7C4E2F',
    '#B97B2F', '#A56E3C', '#936F56', '#D89B5A', '#8D6E4B', '#7A513C'
]; 


function afficherCalendrier() {   
    for(let i = 1; i <= 24; i++){ //obligé de passer par for
        const newCase = cases.cloneNode() 
        newCase.classList.add('case');       
        newCase.innerText = i;
        section.appendChild(newCase);        
    }
    shuffleCases();
    shuffleColors();
}

function shuffleCases() { 
    /*je ne peux pas utiliser la boucle for directement
    Obligée de créer les élément avec for
    Puis de les récupérer avec Array.from(section.children)*/

    let casesShuffle = Array.from(section.children); //new tableau de new numéros
    let i = casesShuffle.length, k, temp;
    
    while(--i > 0) {
        k = Math.floor(Math.random() * (i+1));
        temp = casesShuffle[k];
        casesShuffle[k] = casesShuffle[i];
        casesShuffle[i] = (temp); //on peut pas faire de appendChild comme dans l exo gameCards car ici = tableau
    }

    for (let i = 0; i < casesShuffle.length; i++) {
        section.appendChild(casesShuffle[i]); //Je met les new cases dans la section
    }
}

function shuffleColors() { 
    /*ici je peux utiliser mon tableau directement*/

    let i = colors.length, k, temp;
    
    while(--i > 0) {
        k = Math.floor(Math.random() * (i+1));
        temp = colors[k];
        colors[k] = colors[i];
        colors[i] = (temp); 
    }

    let colorsShuffle = Array.from(section.children);//new tableau de new colors
    
    for (let i = 0; i < colorsShuffle.length; i++) {
        colorsShuffle[i].style.backgroundColor = colors[i]; // Je réattribue les new colors
    }
}

afficherCalendrier();


//Création d'une boucle pour les numéros
//Mélanger avec math.random les numéros
//Mélanger avec math.random les couleurs

//Créer une popup : comment? je sais pas encore
/*Afficher un text
Modifier l'aspect de la case
Afficher un emoticone > remplacer dans le tableau*/