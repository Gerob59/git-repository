// Exerice 1

/**
 *  Fonction qui dit bonjour à 'prenom'
 */
function bonjour(prenom: string): string {
  return `Bonjour ${prenom} !`;
}

console.log(bonjour("Michel"));

// Exerice 2

/**
 * Fonction qui addition entre 2 temperatures
 * @param nombre1
 * @param nombre2
 * @returns nombre1 + nombre2
 */
function calcul(nombre1: number, nombre2: number): number {
  return nombre1 + nombre2;
}
console.log(calcul(3, 5));

// Exerice 3

/**
 * Fonction qui annonce le gain ou la perte en €
 * @param coutFabrication
 * @param prixVente
 * @returns difference entre coutFabrication et prixVente
 */
function gain(coutFabrication: number, prixVente: number): string {
  if (coutFabrication >= prixVente) {
    return `Perte de ${coutFabrication - prixVente}€`;
  } else {
    return `Gain de ${prixVente - coutFabrication}€`;
  }
}
console.log(gain(15, 15));

// Exerice 4

/**
 * Fonction qui sert a savoir le plus grand entre 3 temperatures
 * @param nombre1
 * @param nombre2
 * @param nombre3
 * @returns Le plus grand
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

// Exerice 5

/**
 * la fonction recoit une liste de nombre
 * @param temperatures
 * @returns le plus grand
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

// Exerice 6

/**
 *
 * @param prenom prenom de l'élève
 * @param notes utilise la fonction 'moyenne(notes:number[])' pour avoir la moyenne le l'élève
 * @returns prenom + moyenne + appreciation
 */
function lazy(prenom: string, ...notes: number[]): string {
  const moy: number = moyenne(notes);
  return `${prenom} : ${moy}, ${appreciation(moy)}`;
}

/**
 * Fait la moyenne de toutes les notes
 * @param notes
 * @returns moyenne des notes
 */
function moyenne(notes: number[]): number {
  let moyenne: number = notes[0];
  for (let index = 1; index < notes.length; index++) {
    moyenne += notes[index];
  }
  return moyenne / notes.length;
}

/**
 * Donne l'appréciation par rapport a la moyenne de l'élève
 * @param moyenne
 * @returns appreciation de l'élève
 */
function appreciation(moyenne: number): string {
  let result: string = "";
  if (moyenne > 20 || moyenne < 0) {
    result = "Note non valide";
  } else if (moyenne >= 19) {
    result = "Très bien";
  } else if (moyenne >= 15) {
    result = "Bien";
  } else if (moyenne >= 11) {
    result = "Passable";
  } else if (moyenne >= 5) {
    result = "Insuffisant";
  } else {
    result = "Catastrophique";
  }
  return result;
}

console.log(lazy("Corine de la Compta", 12, 15, 10));

// Exerice 7

/**
 * permet le calcul entre 2 temperatures
 * @param nombre1
 * @param nombre2
 * @param operateur uniquement '+' '-' '*' '/'
 * @returns calcul nombre 1 et nombre 2 selon operator
 */
function operation(
  nombre1: number,
  nombre2: number,
  operateur: string
): number {
  let result: number = 0;
  if (operateur === "+") {
    result = nombre1 + nombre2;
  } else if (operateur === "-") {
    result = nombre1 - nombre2;
  } else if (operateur === "*") {
    result = nombre1 * nombre2;
  } else if (operateur === "/") {
    result = nombre1 / nombre2;
  } else {
    result = 0;
  }
  return result;
}
console.log(operation(12, 2, "/"));

// Exerice 8

/**
 * fabrique une pyramide horizontal de '*'
 * @param taille taille de la pyramide
 * @returns pyramide en *
 */
function pyramide(taille: number): string {
  let resultat: string = "";
  let ligne: string = "";
  for (let index = 0; index < taille * 2 - 1; index++) {
    if (index < taille) {
      ligne += "*";
    } else {
      ligne = ligne.substring(1);
    }
    resultat += ligne + "\n";
  }
  return resultat;
}
console.log(pyramide(5));

// Exercice 9

/**
 * liste de toutes les monnaies qui existe
 */
const monnaie: number[] = [
  500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

/**
 * permet de savoir se qu'il faut précisément rendre comme monnaie a la personne
 * @param somme
 * @returns string avec tous les billets/pieces present
 */
function billets(somme: number): string {
  let result: string = `Somme totale : ${somme}€\n`;
  let sommeCourante: number = somme;

  //permet de verifier si on une piece/un billet chaque monnaie qui existe
  monnaie.forEach((monnaie) => {
    let nombreMonnaie: number = Math.floor(sommeCourante / monnaie);
    sommeCourante = sommeCourante % monnaie;
    // on a des billets
    if (monnaie >= 5 && nombreMonnaie > 0) {
      result += `Billet de ${monnaie}€ : ${nombreMonnaie}\n`;
    }
    // on a des pieces
    else if (monnaie < 5 && nombreMonnaie > 0) {
      result += `Pièce de ${monnaie}€ : ${nombreMonnaie}\n`;
    }
  });
  return result;
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
    let currentString: string = temperatures[index];
    //contient uniquement la valeur numérique de la valeur que l'on test (ex : 18)
    let currentNumber: number = Math.abs(
      parseFloat(temperatures[index].substring(0, currentString.length - 2))
    );
    console.log(`currentNumber boucle ${index}: ${currentNumber}`);

    // verifie si la température courante est en °C ou °F
    if (currentString.substring(currentString.length - 2) === "°F") {
      currentNumber = (currentNumber - 32) * (5 / 9);
    }

    // compare pour savoir quelle température est la plus proche de 0 (positive ou negative)
    if (plusProcheZeroNumber > currentNumber) {
      plusProcheZeroNumber = currentNumber;
      plusProcheZeroString = currentString;
    }
  }
  return plusProcheZeroString;
}
console.log(plusProcheDeZero("15°C", "6°C", "24°C", "42°F"));

// exercice 11

function centraleDeTri(...nombres: number[]): number[] {
  return [];
}
