const personnages = [
  {
    nom: "Twilight Sparkle",
    Genre: ["Alicorne", "Humaine"],
    Sexe: "féminin",
    Résidence: ["Poneyville", "Canterlot (anciennement)"],
    Occupation: ["Princesse de l'amitié", "Professeur"],
    presenter() {
      return `${this.nom}, ${this.Genre[0]}`;
    },
  },
  {
    nom: "Applejack",
    Genre: ["Poney terrestre", "Humaine"],
    Sexe: "féminin",
    Résidence: "Ferme de la Douce Pomme à l'extérieur de Poneyville",
    Occupation: "Fermière",
    presenter() {
      return `${this.nom}, ${this.Genre[0]}`;
    },
  },
  {
    nom: "Fluttershy",
    Genre: ["Pégase", "Humaine"],
    Sexe: "féminin",
    Résidence:
      "Maisonnette à la lisière de la forêt désenchantée à l'extérieur de Poneyville",
    Occupation: ["Gardienne d'animaux", "Chanteuse des Poneyphoniques"],
    presenter() {
      return `${this.nom}, ${this.Genre[0]}`;
    },
  },
  {
    nom: "Rarity",
    Genre: ["Licorne", "Humaine"],
    Sexe: "féminin",
    Résidence: "Boutique Carrousel à Poneyville",
    Occupation: ["Couturière", "Chanteuse des Poneyphoniques"],
    presenter() {
      return `${this.nom}, ${this.Genre[0]}`;
    },
  },
  {
    nom: "Pinkie Pie",
    Genre: ["Poney terrestre", "Humaine"],
    Sexe: "féminin",
    Résidence: "Sugarcube Corner à Poneyville",
    Occupation: ["Pâtissière chez M. et Mme Cake", "Organisatrice de fêtes"],
    presenter() {
      return `${this.nom}, ${this.Genre[0]}`;
    },
  },
  {
    nom: "Rainbow Dash",
    Genre: ["Pégase", "Humaine"],
    Sexe: "féminin",
    Résidence: "Poneyville",
    Occupation: "Wonderbolt",
    presenter() {
      return `${this.nom}, ${this.Genre[0]}`;
    },
  },
  {
    nom: "Spike",
    Genre: "Dragon",
    Sexe: "masculin",
    Résidence: ["Poneyville", "Canterlot (anciennement)"],
    Occupation: [
      "Assistant de Twilight Sparkle",
      "Ambassadeur de l'amitié auprès des dragons",
    ],
    presenter() {
      return `${this.nom}, ${this.Genre}`;
    },
  },
];

const body1 = document.querySelector("body");
let p1 = document.createElement("p");
p1.innerText = "test";
body1.append(p1);
let texte = "";
personnages.forEach((element) => {
  texte += element.presenter() + "\n";
});
p1.innerText = texte;
