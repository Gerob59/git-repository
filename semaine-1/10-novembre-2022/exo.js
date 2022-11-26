/*
//age:Number dateDeNaissance:string
let age = 22;
const dateDeNaissance = "28 janvier 2000";
console.log(`J'ai ${age} et je suis né le ${dateDeNaissance}`);

//Affiche prenom si age pair
let prenom = "Robin";
console.log(age % 2 === 0 ? prenom : "");

//Affiche prenom si age > 27 sinon affiche nom
let nom = "Hotton";
console.log(age > 27 ? prenom : nom);

//Ecrire 10x "Je ne copierai pas du code bêtement"
let nbBoucle = 10;
let phrase = "Je ne copierai pas du code bêtement";
for (let i = 0; i < nbBoucle; i++) {
  console.log(phrase);
}

//getToto return "toto"
function getToto() {
  return "toto";
}
console.log(getToto());

//getTotoArrow return "toto" avec syntaxe fléchée
const toto = () => "toto";
console.log(toto());

//funtion d6 -> nb aléa 1 < x < 6
function d6() {
  return Math.floor(Math.random() * 6 + 1);
}
console.log(`Les jeux sont faits, rien ne va plus ! Le résultat est : ${d6()}`);

//function add(num1, num2)
let num1 = 10;
let num2 = 5;
function myAdd(num1, num2) {
  return num1 + num2;
}
console.log(`${num1} + ${num2} = ${myAdd(num1, num2)}`);

const myAddArrow = (num1, num2) => num1 + num2;
console.log(`${num1} + ${num2} = ${myAddArrow(num1, num2)}`);

// sans poo: prenom,nom,age,sexe,loisirs,langage + function presenter()
const humain = {
  prenom: "Robin",
  nom: "Hotton",
  age: 22,
  sexe: "Homme",
  loisirs: ["informatique", "Jeux vidéo", "japanimation", "natation"],
  langageDePredilection: ["Java", "sql"],
  presenter() {
    return `Bonjour je m'appelle ${this.prenom} ${this.nom}`;
  },
};
console.log(humain.presenter());

let couleur = "Rouge";
function feuRouge(couleur) {
  switch (couleur.toLowerCase()) {
    case "VERT": // permet d'avoir plusieur flag d'arret pour 1 action à effectuer
    case "vert":
      return "Avancez !";
      break;
    case "orange":
      return "Préparez vous à vous arrêter !";
      break;
    case "rouge":
      return "Arrêtez vous !";
      break;
    default:
      return "Cette couleur n'est pas présente sur le feu rouge !";
      break;
  }
}
console.log(feuRouge(couleur));

let etoile = "*";
let chaine = "";
let tailleDessin = 5;
for (let index = 0; index < tailleDessin; index++) {
  chaine += etoile;
  console.log(chaine);
}

function fizzBuzz(nombreRecu) {
  let resultat = "";
  if (nombreRecu % 15 === 0) {
    resultat = "FizzBuzz";
  } else if (nombreRecu % 3 === 0) {
    resultat = "Fizz";
  } else if (nombreRecu % 5 === 0) {
    resultat = "Buzz";
  } else {
    resultat = "raté";
  }
  return resultat;
}
function fullFizzBuzz(taille) {
  for (let index = 1; index < taille + 1; index++) {
    console.log(`Le nombreRecu ${index} obtient un : ${fizzBuzz(index)}`);
  }
}
fullFizzBuzz(100);

function eleves1(eleve, eleve1, eleve2) {
  console.log(eleve);
}
eleves1("Lamia", "Eddy", "Peter");
//resultat : Lamia

function eleves2(...eleve) {
  console.log(eleve);
}
eleves2("Lamia", "Eddy", "Peter");
//resultat : [ 'Lamia', 'Eddy', 'Peter' ]

function eleves3(...eleve) {
  console.log(eleve[2]);
}
eleves3("Lamia", "Eddy", "Peter");
//Resultat : Peter

const obj = {
  nom: "Luigi",
  age: 41,
  dateDeNaissance: "30/08/81",
};

// ...rest

*/

let prixFab = parseInt(prompt("Prix de fabrication ?"));
let prixProd = parseInt(prompt("Prix du produit ?"));

function profit(prixFabrication, prixVente) {
  if (prixFabrication > prixVente) {
    console.log(`perte de ${prixFabrication - prixVente}€`);
  } else if (prixFabrication < prixVente) {
    console.log(`Profit de ${prixVente - prixFabrication}€`);
  } else {
    console.log("equivalent");
  }
}
profit(prixFab, prixProd);

const profitFleche = (prixFabrication, prixVente) => {
  prixVente > prixFabrication
    ? console.log(`Profit de ${prixVente - prixFabrication}€`)
    : console.log(`perte de ${prixFabrication - prixVente}€`);
};
profitFleche(prixFab, prixProd);
