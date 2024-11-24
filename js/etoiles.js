document.addEventListener("DOMContentLoaded", function() {
    const etoilesContainer = document.getElementById('etoiles');
  
    // Générer un nombre d'étoiles aléatoire, par exemple 50
    const nombreEtoiles = 100;
  
    // Fonction pour générer une étoile aléatoire
    function creerEtoile() {
      const etoile = document.createElement('div');
      etoile.classList.add('etoile');
  
      // Position aléatoire de l'étoile dans la fenêtre
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
  
      // Taille aléatoire entre 10px et 30px
      const taille = Math.random() * 20 + 5; // 10px à 30px
      etoile.style.width = `${taille}px`;
      etoile.style.height = `${taille}px`;
  
      // Appliquer la position
      etoile.style.left = `${x}px`;
      etoile.style.top = `${y}px`;
  
      // Opacité aléatoire (entre 0.1 et 1)
      const opacite = Math.random() * 0.9 + 0.1; // Cela donne une opacité entre 0.1 et 1
      etoile.style.opacity = opacite;
  
      // Délai d'animation aléatoire entre 0s et 5s
      const delay = Math.random() * 5; // Entre 0s et 5s
      etoile.style.animationDelay = `${delay}s`;
  
      // Ajouter l'étoile au conteneur
      etoilesContainer.appendChild(etoile);
    }
  
    // Créer les étoiles
    for (let i = 0; i < nombreEtoiles; i++) {
      creerEtoile();
    }
  });
  