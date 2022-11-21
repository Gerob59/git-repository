const cartes = [
  {
    titre: "le nav",
    description:
      "Vous devez créer une page qui accueillera les différents exercices. Chaque exercice sera affiché sous forme de carte avec un titre, un sous-titre et un lien vers la page de l'exercice. Vous insérerez également une barre de navigation qui permettra de naviguer entre les différentes cartes.",
  },
  {
    titre: "la liste",
    description:
      "Vous devez créer une liste qui contiendra les noms de 5 personnages de la série 'Firendship is Magic'. Vous pouvez trouver les noms sur ce lien : https://mlp.fandom.com/fr/wiki/Personnages Vous générerez une liste html qui affichera les différents noms de personnages.",
  },
  {
    titre: "l'horloge",
    description:
      "Vous devez créer une horloge qui affiche l'heure à l'écran. L'horloge doit se mettre à jour toutes les secondes pour afficher l'heure actuelle.",
  },
  {
    titre: "Le FizzBuzz",
    description:
      "Vous devez créer une page qui affichera la liste de tous les nombres entre 1 et 100. Pour chaque nom, on affichera à coté de ce dernier 'fizz' si le nom est un multiple de 3, 'buzz' si le nom est un multiple de 5 et 'fizzbuzz' si le nom est un multiple de 3 et 5. Vous utiliserez une fonction !",
  },
  {
    titre: "Le fizzbuzz ++",
    description:
      "Vous devez créer une page qui reprendra la logique du fizzbuzz. Seul un chiffre sera affiché à l'écran (et fizz/buzz/fizzbuzz si nécessaire) Cette fois, vous utiliserez des boutons pour incrémenter et décrémenter le chiffre. Vous utiliserez une écoute d'événement pour les boutons !",
  },
];

const body0 = document.querySelector("body");
const divContainer = document.createElement("div");
divContainer.className = "container";
body0.append(divContainer);
for (let index = 0; index < 5; index++) {
  let divCarte = document.createElement("div");
  divCarte.className = "carte";
  divContainer.append(divCarte);

  let hCarte = document.createElement("h1");
  hCarte.innerText = cartes[index].titre;
  divCarte.append(hCarte);

  let pCarte = document.createElement("p");
  pCarte.innerText = cartes[index].description;
  divCarte.append(pCarte);

  let aCarte = document.createElement("a");
  aCarte.href = `./exercice${index}.html`;
  aCarte.innerText = "Cliquez ici !";
  divCarte.append(aCarte);
}
