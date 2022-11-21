let compteur = 0;

// get body to add children
const body = document.querySelector("body");

let booleanBloquer = false;

// label compteur : children of body
let label = document.createElement("p");
label.innerText = compteur;
body.append(label);

// create button - : children of body
const buttonMoins = document.createElement("button");
buttonMoins.innerText = "-";
buttonMoins.addEventListener("click", (event) => {
  if (!booleanBloquer) {
    compteur--;
    label.innerText = compteur;
  }
});
body.append(buttonMoins);

// create button reset : children of body
const buttonReset = document.createElement("button");
buttonReset.innerText = "Reset";
buttonReset.addEventListener("click", (event) => {
  if (!booleanBloquer) {
    compteur = 0;
    label.innerText = compteur;
  }
});
body.append(buttonReset);

// create button + : children of body
const buttonPlus = document.createElement("button");
buttonPlus.innerText = "+";
buttonPlus.addEventListener("click", (event) => {
  if (!booleanBloquer) {
    compteur++;
    label.innerText = compteur;
  }
});
body.append(buttonPlus);

// create button bloquer : children of body
const buttonBloquer = document.createElement("button");
buttonBloquer.innerText = "Bloquer";
buttonBloquer.addEventListener("click", (event) => {
  booleanBloquer = !booleanBloquer;
});
body.append(buttonBloquer);
