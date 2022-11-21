// definition des variables
let compteurParent = 0;
let compteurEnfant = 0;

//recuperation des variables
const body = document.querySelector("body");
const divParent = document.querySelector("#parent");
const boutonEnfant = document.querySelector("#enfant");

//recuperation des elements
const spanParentCompteur = document.querySelector("#parent-compteur");
const spanEnfantCompteur = document.querySelector("#enfant-compteur");

// event pour ecouter le click sur la div
divParent.addEventListener("click", (event) => {
  compteurParent++;
  spanParentCompteur.innerHTML = compteurParent;
});

// Event pour ecouter le click sur le bouton
boutonEnfant.addEventListener("click", (event) => {
  event.stopPropagation();
  compteurEnfant++;
  spanEnfantCompteur.innerHTML = compteurEnfant;
});
