let input = document.querySelector("input");
input.addEventListener("change", (event) => {
  let valeur = event.target.value;
  console.log(valeur);
});

let select = document.querySelector("#monSelect");
let body = document.querySelector("body");
let result = document.createElement("p");
select.addEventListener("change", (event) => {
  let valeurSelect = event.target.value;
  result.innerText = `vous aimez le ${valeurSelect} !`;
  body.append(result);
});
