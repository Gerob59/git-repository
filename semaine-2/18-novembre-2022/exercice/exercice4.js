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

const body4 = document.querySelector("body");

let compteur = 0;

let pAffichage = document.createElement("p");
pAffichage.innerText = compteur;
body4.append(pAffichage);

let pFizzBuzz = document.createElement("p");
pFizzBuzz.innerText = fizzBuzz(compteur);
body4.append(pFizzBuzz);

let boutonMoins = document.createElement("button");
boutonMoins.innerText = "-";
body4.append(boutonMoins);
boutonMoins.addEventListener("click", (event) => {
  compteur--;
  pAffichage.innerText = compteur;
  pFizzBuzz.innerText = fizzBuzz(compteur);
});

let boutonPlus = document.createElement("button");
boutonPlus.innerText = "+";
body4.append(boutonPlus);
boutonPlus.addEventListener("click", (event) => {
  compteur++;
  pAffichage.innerText = compteur;
  pFizzBuzz.innerText = fizzBuzz(compteur);
});
