// # 1. 
// - Récupère la div dont l'id est #content
// - Ajoute un h2 dedans
// - Ajout le texte suivant au h2 "Part 6 - Exercice 1" 

const content = document.getElementById('content');
const h2 = document.createElement('h2');
h2.innerText = "Part 6 - Exercice 1";
content.appendChild(h2);

// # 2.
// - Créer un paragraphe avec du lorem ipsum
// - Ajoute le apres le h2
const paragraph = document.createElement('p');
paragraph.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, minus!";
content.appendChild(paragraph);

// # 3.
// - Créer un h1 
// - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
// - Place le en premier enfant de la div #content
const h1 = document.createElement('h1');
h1.innerText = "Le DOM - Création de HTML";
content.insertAdjacentElement("afterbegin", h1);

// # 4.
// - Prend le contenu de la div #content
// - Copie le dans la div #secondaire
// - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire
const secondaire = document.getElementById('secondaire');
secondaire.innerHTML = content.innerHTML;
document.querySelector('#secondaire h2').innerText = "Part 6 - Exercice 2";

// # 5.
// - Créer une nouvelle div #matiere
// - Créer une liste ordonnée des 3 dernières choses que tu as appris
