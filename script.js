// Sélection des éléments a prendre
const addButton = document.getElementById('addButton');
const drawButton = document.getElementById('drawButton');
const nameInput = document.getElementById('nameInput');
const namesList = document.getElementById('namesList');
const result = document.getElementById('result');

let names = []; // Liste des noms  qui seront ajoutés

// Ajouter un nom à la liste
addButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name) {
        names.push(name); // Ajouter le nom à la liste
        const nameElement = document.createElement('div');
        nameElement.textContent = name;
        namesList.appendChild(nameElement);
        nameInput.value = ''; // Effacer le champ de texte
    }
});
// Tirer au sort
drawButton.addEventListener('click', function() {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const drawnName = names[randomIndex];
        result.textContent = 'La prochaine part est pour : ' + drawnName;
// Supprimer le nom tiré pour qu'il ne soit pas tiré à nouveau
        names.splice(randomIndex, 1);
    } else {
        result.textContent = 'il y a plus de nom.';
    }
});

