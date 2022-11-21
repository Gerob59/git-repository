/*

function plusGrand(tableauInteger) {
  let plusGrandTemporaire = tableauInteger[0];
  for (let index = 0; index < tableauInteger.length; index++) {
    const element = tableauInteger[index];
    if (element > plusGrandTemporaire) {
      plusGrandTemporaire = element;
    }
  }
  return plusGrandTemporaire;
}
console.log(plusGrand(tableau));

const plusGrandFleche = (tableauInteger) => {
  let plusGrandTemporaire = tableauInteger[0];
  for (let index = 0; index < tableauInteger.length; index++) {
    const element = tableauInteger[index];
    if (element > plusGrandTemporaire) {
      plusGrandTemporaire = element;
    }
  }
  return plusGrandTemporaire;
};

const max = (...nb) => {
  return Math.max(...nb);
};
let tableau = [12, 25, -10, 36, -50];
console.log(max(tableau));

const flemmard = (note) => {
  for (let index = 0; index < note.length; index++) {
    const element = note[index];
    if (element > 20 || element < 0) {
      console.log(`${element} n'est pas une note valide !`);
    } else if (element >= 18) {
      console.log(`votre note est ${element} : Excellent, bon travail`);
    } else if (element >= 15) {
      console.log(`votre note est ${element} : Bien`);
    } else if (element >= 11) {
      console.log(`votre note est ${element} : Peut mieux faire`);
    } else if (element >= 5) {
      console.log(`votre note est ${element} : Insuffant`);
    } else {
      console.log(
        `votre note est ${element} : Catastrophique, il faut tout revoir`
      );
    }
  }
};
let lesNotes = [0, 2, 4, 5, 7, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, -1, 21];
flemmard(lesNotes);

function lazy(note) {
  switch (true) {
    case note < 0:
    case note > 20:
      console.log("note impossible");
      break;
    case note <= 4:
      console.log("Catastrophique, il faut tout revoir");
      break;
    case note <= 10:
      console.log("Insuffant");
      break;
    case note <= 14:
      console.log("Peut mieux faire");
      break;
    case note <= 17:
      console.log("Bien");
      break;
    default:
      console.log("Excellent, bon travail");
      break;
  }
}
lazy(18);

const calculatrice = (nombre1, signe, nombre2) => {
  switch (signe) {
    case "*":
      console.log(`${nombre1} ${signe} ${nombre2} = ` + nombre1 * nombre2);
      break;
    case "/":
      console.log(`${nombre1} ${signe} ${nombre2} = ` + nombre1 / nombre2);
      break;
    case "-":
      console.log(`${nombre1} ${signe} ${nombre2} = ` + (nombre1 - nombre2));
      break;
    case "+":
      console.log(`${nombre1} ${signe} ${nombre2} = ` + (nombre1 + nombre2));
      break;
    default:
      console.log("bug");
      break;
  }
};
calculatrice(-15, "+", 3);
calculatrice(-15, "-", 3);
calculatrice(-15, "*", 3);
calculatrice(-15, "/", 3);

// Tu as accès au jeu de données ci-dessous, mais il t'est INTERDIT de toucher au code ci-desous !
const characterNames = [
  "36AIS",
  "A'misandra",
  "Amimari",
  "Alika",
  "54B2",
  "A'merpact",
  "Amazora",
];
console.log();
console.log("const characterNames = " + characterNames);
console.log();
console.log("----------------------------------------------------------------");
console.log();

console.log("Affiche le nombre de personnages dans le tableau");
console.log("resultat :");
console.log(characterNames.length);
console.log();

console.log("----------------------------------------------------------------");
console.log();
console.log("Affiche le nom du premier personnage");
console.log("resultat :");
console.log(characterNames[0]);
console.log();

console.log("----------------------------------------------------------------");
console.log();
console.log("Affiche le nom du dernier personnage (le 7eme)");
console.log("resultat :");
console.log(characterNames[6]);
console.log();

console.log("----------------------------------------------------------------");
console.log();
console.log(
  "Affiche le nom du dernier personnage **SANS** savoir qu'il est le 7eme"
);
console.log("resultat :");
console.log(characterNames[characterNames.length - 1]);
console.log();

console.log("----------------------------------------------------------------");
console.log();
console.log("Affiche les noms de tous les personnages");
console.log("resultat :");
characterNames.forEach((element) => {
  console.log(element);
});
console.log();

console.log("----------------------------------------------------------------");
console.log();
console.log(
  "Affiche le nom de chaque personnage accompagné du nombre de caractères qu'il contient"
);
console.log("Ex: Alika (5)");
console.log("resultat :");
characterNames.forEach((element) => {
  console.log(element, `(${element.length})`);
});
console.log();

console.log("----------------------------------------------------------------");
console.log();
console.log("Affiche le nom de chaque personnage en minuscules");
console.log("resultat :");
for (let index = 0; index < characterNames.length; index++) {
  console.log(characterNames[index].toLowerCase());
}

characterNames.forEach((element) => {});
console.log();

console.log("----------------------------------------------------------------");
console.log();
console.log(
  "Affiche les noms des personnages dont le nom contient la lettre 'a' (minuscule ou majuscule)"
);
console.log("resultat :");
for (let index = 0; index < characterNames.length; index++) {
  if (characterNames[index].toLowerCase().includes("a")) {
    console.log(characterNames[index]);
  }
}
console.log();

console.log("----------------------------------------------------------------");
console.log();
console.log(
  "Crée une fonction 'search(needle)' qui te renvoie les personnages dont le nom contient la lettre passée en paramètre"
);
function search(needle) {
  let result = [];
  characterNames.forEach((element) => {
    if (element.toLowerCase().includes(needle)) {
      result.push(element);
    }
  });
  return result;
}

function search2(needle) {
  for (let index = 0; index < characterNames.length; index++) {
    if (characterNames[index].toLowerCase().includes(needle)) {
      console.log(characterNames[index]);
    }
  }
}
let needle = "b";
console.log("needle : " + needle);
console.log("resultat :");
search(needle);

const sommeNPremiers = (num) => {
  let resultat = 0;
  let affichage = "";

  for (let index = 1; index <= num; index++) {
    resultat += index;
    if (index !== num) {
      affichage += `${index} + `;
    } else {
      affichage += `${index} = `;
    }
  }
  affichage += `${resultat}`;
  console.log(affichage);
};
sommeNPremiers(5);

function sommeRecursif(num, sum = 0, affichage = "") {
  sum += num;
  if (num !== 0) {
    affichage = `${num}+${affichage}`;
    sommeRecursif(num - 1, sum, affichage);
  } else {
    affichage = `${affichage.substring(0, affichage.length - 1)}=${sum}`;
    console.log(affichage);
  }
}
sommeRecursif(5);
*/
function test(num) {
  let affichage = "";
  if (num === 0) {
    return num;
  } else {
    return num + test(num - 1);
  }
}
console.log(test(5));
