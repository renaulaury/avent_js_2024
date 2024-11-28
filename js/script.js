import { citations } from './data.js';

const section = document.querySelector('section');
const cases = document.createElement('div');
cases.classList.add('case');
const popup = document.createElement('div');
popup.classList.add("popup");

const colors = [
    '#8B5F33', '#E0A96D', '#7C4E2F', '#B97B2F', '#C78203', '#9A6E3B',
    '#D89B5A', '#936F56', '#8D6E4B', '#A56E3C', '#D89B5A', '#7A513C',
    '#B56E31', '#E0A96D', '#8B5F33', '#9A6E3B', '#C78203', '#7C4E2F',
    '#B97B2F', '#A56E3C', '#936F56', '#D89B5A', '#8D6E4B', '#7A513C'
]; 

function afficherCalendrier() {   
    for(let i = 1; i <= 24; i++){ //obligé de passer par for
        const newCase = cases.cloneNode(true) 
        newCase.classList.add('case');       
        newCase.innerText = i;
        section.appendChild(newCase);   

        const newPopup = popup.cloneNode(true);
        newCase.appendChild(newPopup);
    }
    shuffleCases();
    shuffleColors();    
    openPopup();
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


let currentIndex = 1; // Début à la case 1

function openPopup() {
    // Récupérer toutes les cases dans le tableau
    const allCases = Array.from(section.children);

    // Initialement, toutes les popups sont cachées
    for (let i = 0; i < allCases.length; i++) {
        const caseElement = allCases[i];
        const popupContent = caseElement.querySelector('.popup');
        popupContent.style.display = 'none'; // Masquer les popups
    }

    // Ajouter un gestionnaire d'événements à chaque case
    for (let i = 0; i < allCases.length; i++) {
         
        const caseElement = allCases[i];
        const popupContent = caseElement.querySelector('.popup'); // Récupérer la popup de chaque case

        // Ajouter l'événement au clic sur chaque case
        caseElement.addEventListener('click', () => {
            // Vérifier si l'index de la case cliquée correspond à currentIndex
            const caseNumber = parseInt(caseElement.innerText); // Récupérer le numéro affiché sur la case
            if (caseNumber === currentIndex) { // Si le numéro correspond à currentIndex
                // Vérifier si la popup de cette case est déjà affichée
                if (popupContent.style.display === 'block') {
                    // Si la popup est déjà affichée, la cacher
                    popupContent.style.display = 'none';
                } else {
                    // Si la popup n'est pas affichée, afficher la popup
                    const citationText = citations[caseNumber - 1].texte; // Citation de la case cliquée
                    popupContent.innerHTML = citationText; // Ajouter texte

                    // Masquer toutes les autres popups
                    for (let j = 0; j < allCases.length; j++) {
                        const otherCaseElement = allCases[j];
                        const otherPopupContent = otherCaseElement.querySelector('.popup');
                        otherPopupContent.style.display = 'none'; // Masquer les autres popups
                    }

                    // Afficher la popup de la case cliquée
                    popupContent.style.display = 'block';
                }

                
                
            } else {
                // Si l'utilisateur clique sur une case qui n'est pas la suivante, afficher une alerte
                alert("Il faut cliquer sur la case " + currentIndex + " d'abord.");
            }
        });
        
        closePopup(popupContent);

    }
}

function closePopup(popupContent) {
    popupContent.addEventListener('click', (event) => {
        // Empêcher la propagation de l'événement pour éviter de fermer la popup quand on clique sur la case
        event.stopPropagation();
        // Masquer la popup en cliquant dessus
        popupContent.style.display = 'none';
        // Supprimer le texte de la case après la fermeture de la popup
        const caseElement = popupContent.parentElement; // Récupérer la case qui contient la popup
        const caseNumber = parseInt(caseElement.innerText);

        console.log('Case Number:', caseNumber);  // Afficher le numéro de la case
        console.log('Current Index:', currentIndex);
        if (caseNumber === currentIndex) { // Si le numéro correspond à currentIndex
            const icone = citations[caseNumber - 1].icone;
            caseElement.innerText = ''; 
            caseElement.innerHTML = icone;
            // Incrémenter l'index pour la case suivante
            currentIndex++; 
        }
                  
        caseElement.style.opacity = '0.5';  
        
    });
}



afficherCalendrier();


//Création d'une boucle pour les numéros
//Mélanger avec math.random les numéros
//Mélanger avec math.random les couleurs

/*Faire en sorte de bloquer la retournement des cases if le i pas cliqué alors alert*/

/*Créer une popup : */
/*qd je clic une popup s ouvre avec mouvement, je recupere le texte modif aspect case*/
/*close popup au clic*/
/*affichage d un emoji */ //> fonctionne pour la 1ere case mais pas les suivantes


/*Afficher un text
Modifier l'aspect de la case
Afficher un emoticone > remplacer dans le tableau*/