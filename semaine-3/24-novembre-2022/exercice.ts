// Exerice 1

/**
 * Fonction qui dit bonjour à 'prenom'
 * @param prenom prenom de la personne
 * @returns Bonjour personne
 */
function bonjour(prenom: string): string {
  return `Bonjour ${prenom} !`;
}

console.log(bonjour("Michel"));

// Exerice 2

/**
 * Fonction qui addition entre 2 temperatures
 * @param nombre1 nombre 1
 * @param nombre2 nombre 2
 * @returns nombre1 + nombre2
 */
function calcul(nombre1: number, nombre2: number): number {
  return nombre1 + nombre2;
}
console.log(calcul(3, 5));

// Exerice 3

/**
 * Fonction qui annonce le gain ou la perte en € d'un produit
 * @param coutFabrication cout de fabrication du produit
 * @param prixVente prix de vente du produit
 * @returns difference entre coutFabrication et prixVente
 */
function gain(coutFabrication: number, prixVente: number): string {
  if (coutFabrication >= prixVente) {
    return `Perte de ${coutFabrication - prixVente}€`;
  } else {
    return `Gain de ${prixVente - coutFabrication}€`;
  }
}
console.log(gain(20, 15));

// Exerice 4

/**
 * Fonction qui sert a savoir le plus grand entre 3 nombres
 * @param nombre1 un nombre
 * @param nombre2 un nombre
 * @param nombre3 un nombre
 * @returns Le plus grand des 3
 */
function plusGrand(nombre1: number, nombre2: number, nombre3: number): number {
  if (nombre1 >= nombre2 && nombre1 >= nombre3) {
    return nombre1;
  } else if (nombre2 >= nombre3) {
    return nombre2;
  } else {
    return nombre3;
  }
}
console.log(plusGrand(2, 4, 3));

// Exercice 4 - Bonus

/**
 * Fonction qui sert a savoir le plus grand entre 3 nombres avec Math.max()
 * @param nombre1 un nombre
 * @param nombre2 un nombre
 * @param nombre3 un nombre
 * @returns Le plus grand des 3
 */
function plusGrandMath(
  nombre1: number,
  nombre2: number,
  nombre3: number
): number {
  return Math.max(nombre1, nombre2, nombre3);
}
console.log(plusGrandMath(2, 4, 3));

// Exerice 5

/**
 * la fonction recoit une liste de nombre et détermine le plus grand
 * @param temperatures liste de nombre
 * @returns le plus grand de la liste
 */
function plusGrandTab(...temperatures: number[]): number {
  let plusGrand: number = temperatures[0];
  for (let index = 1; index < temperatures.length; index++) {
    if (temperatures[index] > plusGrand) {
      plusGrand = temperatures[index];
    }
  }
  return plusGrand;
}
console.log(plusGrandTab(12, 5, 3, 14, 14));

// Exercice 5 - bonus

/**
 * la fonction recoit une liste de nombre et détermine le plus grand
 * @param temperatures liste de nombre
 * @returns le plus grand de la liste
 */
function plusGrandTabMath(...temperatures: number[]): number {
  return Math.max(...temperatures);
}
console.log(plusGrandTabMath(12, 5, 3, 14, 14));

// Exerice 6

/**
 * prend un note de l'élève et vérifie si est elle valide
 * @param note une note de l'élève
 * @returns true si la note est valide, false sinon
 */
function verifierNote(note: number): boolean {
  if (note < 0 || note > 20) return false;
  else return true;
}

/**
 * Fait la moyenne de toutes les notes
 * @param notes liste des notes
 * @returns moyenne des notes
 */
function moyenne(notes: number[]): number {
  let moyenne: number = 0;
  for (let note of notes) {
    if (verifierNote(note)) moyenne += note;
    else
      console.log(
        `la note ${note} est 'non valide' et il est donc ignoré. DSL GROS.`
      );
  }
  return moyenne / notes.length;
}

/**
 * Donne l'appréciation par rapport a la moyenne de l'élève
 * @param moyenne moyenne des notes
 * @returns appreciation de l'élève par rapport a sa note
 */
function appreciation(moyenne: number): string {
  let resultat: string = "";
  if (moyenne < 5) {
    resultat = "Catastrophique";
  } else if (moyenne < 11) {
    resultat = "Insuffisant";
  } else if (moyenne < 15) {
    resultat = "Passable";
  } else if (moyenne < 19) {
    resultat = "Bien";
  } else {
    resultat = "Très bien";
  }
  return resultat;
}

/**
 * professeur paraisseux veux avoir l'appréciation automatique d'un élève par rapport a ses notes
 * @param prenom prenom de l'élève
 * @param notes utilise la fonction 'moyenne(notes:number[])' pour avoir la moyenne le l'élève
 * @returns prenom / moyenne / appreciation
 */
function paraisseux(prenom: string, ...notes: number[]): string {
  const moyenneEleve: number = moyenne(notes);
  return `${prenom} : ${moyenneEleve}, ${appreciation(moyenneEleve)}`;
}

console.log(paraisseux("Corine de la Compta", 12, 15, 10));

// Exerice 7

/**
 * permet le calcul entre 2 temperatures
 * @param nombre1 un nombre
 * @param nombre2 un nombre sauf 0 en cas de division
 * @param operateur uniquement '+' '-' '*' '/'
 * @returns calcul nombre 1 et nombre 2 selon operator
 */
function operation(
  nombre1: number,
  nombre2: number,
  operateur: string
): number {
  let resultat: number = 0;
  if (operateur === "+") {
    resultat = nombre1 + nombre2;
  } else if (operateur === "-") {
    resultat = nombre1 - nombre2;
  } else if (operateur === "*") {
    resultat = nombre1 * nombre2;
  } else if (operateur === "/" && nombre2 !== 0) {
    resultat = nombre1 / nombre2;
  } else {
    resultat = 0;
  }
  return resultat;
}
console.log(operation(12, 2, "/"));

// Exerice 8

/**
 * fabrique une pyramideVertical horizontal de '*'
 * @param taille taille de la pyramideVertical
 * @returns pyramideVertical en *
 */
function pyramideVertical(taille: number): string {
  let resultatat: string = "";
  let ligne: string = "";
  for (let index = 0; index < taille * 2 - 1; index++) {
    if (index < taille) {
      ligne += "*";
    } else {
      ligne = ligne.substring(1);
    }
    resultatat += ligne + "\n";
  }
  return resultatat;
}
console.log(pyramideVertical(5));

// Exercice 9

/**
 * liste de toutes les monnaiess qui existe
 */
const monnaies: number[] = [
  500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

/**
 * permet de savoir se qu'il faut précisément rendre comme monnaies a la personne
 * @param somme somme d'agent a rendre
 * @returns resultat avec tous les billets/pieces present
 */
function billets(somme: number): string {
  let resultat: string = `Somme totale : ${somme}€\n`;
  let sommeCourante: number = somme;

  //permet de verifier si on une piece/un billet chaque monnaies qui existe
  monnaies.forEach((monnaies) => {
    let nombreMonnaies: number = Math.floor(sommeCourante / monnaies);
    sommeCourante = sommeCourante % monnaies;
    // on a des billets
    if (monnaies >= 5 && nombreMonnaies > 0) {
      resultat += `Billet de ${monnaies}€ : ${nombreMonnaies}\n`;
    }
    // on a des pieces
    else if (monnaies < 5 && nombreMonnaies > 0) {
      resultat += `Pièce de ${monnaies}€ : ${nombreMonnaies}\n`;
    }
  });
  return resultat;
}
console.log(billets(888.88));

// Exercice 10

/**
 *
 * @param nombres liste de températures
 * @returns la températur la plus proche de 0
 */
function procheDeZero(...nombres: number[]): number {
  let plusProche: number = nombres[0];
  for (let index = 1; index < nombres.length; index++) {
    if (Math.abs(plusProche) > Math.abs(nombres[index]))
      plusProche = nombres[index];
  }
  return plusProche;
}
console.log(procheDeZero(15, 10, -10));

// Extension Exercice 10

/**
 * Permet d'avoir la température en °C ou en °F la plus proche de 0 parmis une liste de température
 * @param temperatures liste de températures °C/°F
 * @returns la température la plus proche de 0
 */
function plusProcheDeZero(...temperatures: string[]): string {
  // initialisé au premier élèment de la list
  //contient toute la string de la température la plus proche de 0 (ex: "42°C")
  let plusProcheZeroString: string = temperatures[0];
  //contient uniquement la valeur numérique de la température (ex : 42, 7, 404)
  let plusProcheZeroNumber: number = Math.abs(
    parseFloat(temperatures[0].substring(0, plusProcheZeroString.length - 2))
  );

  //boucle pour parcourir tout le tableau
  for (let index = 1; index < temperatures.length; index++) {
    //contient toute la string de la température que l'on test (ex: "18°C")
    let elementString: string = temperatures[index];
    //contient uniquement la valeur numérique de la valeur que l'on test (ex : 18)
    let elementNumber: number = Math.abs(
      parseFloat(temperatures[index].substring(0, elementString.length - 2))
    );

    // verifie si la température courante est en °C ou °F
    if (elementString.substring(elementString.length - 2) === "°F") {
      elementNumber = (elementNumber - 32) * (5 / 9);
    }

    // compare pour savoir quelle température est la plus proche de 0 (positive ou negative)
    if (plusProcheZeroNumber > elementNumber) {
      plusProcheZeroNumber = elementNumber;
      plusProcheZeroString = elementString;
    }
  }
  return plusProcheZeroString;
}
console.log(plusProcheDeZero("15°C", "6°C", "24°C", "42°F"));

// // exercice bonus

// /**
//  * prends en parametre un tableau de nombre et le renvoi rangé en ordre croissant
//  * @param nombres la liste de nombre à trier
//  * @returns tableau de nombre rangé en ordre croissant
//  */
// function centraleDeTri(nombres: number[]): number[] {
//   //on verifie la condition d'arret (plus qu'un seul element dans le tableau)
//   if (nombres.length > 1) {
//     //nombre pivot que l'on utilise pour partiellement trier le tableau
//     const pivot: number = nombres[nombres.length];
//     //tableau contenant les nombres plus petit que le pivot
//     const plusPetitTab: number[] = [];
//     //tableau contenant les nombres plus grand que le pivot
//     const plusGrandTab: number[] = [];

//     //length - 1, car on ne tri pas le pivot
//     for (let index = 0; index < nombres.length - 1; index++) {
//       const element = nombres[index];
//       if (element < pivot) {
//         plusPetitTab.push(element);
//       } else {
//         plusGrandTab.push(element);
//       }
//     }

//     // appel récursif en concaténant les tableaux
//     return centraleDeTri(plusPetitTab).concat(
//       [pivot],
//       centraleDeTri(plusGrandTab)
//     );
//   } else {
//     return nombres;
//   }
// }
// console.log(centraleDeTri([9, -3, 5, 2, 6, 8, -6, 1, 3]));
