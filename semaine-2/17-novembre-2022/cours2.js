// const eleves = [
//   {
//     nom: "Joudet",
//     prenom: "Nathan",
//     age: 22,
//   },
//   {
//     nom: "Hotton",
//     prenom: "Robin",
//     age: 22,
//   },
//   {
//     nom: "Boudedja",
//     prenom: "Lamia",
//     age: 18,
//   },
// ];

// //destructuration
// //const { nom, prenom, age } = eleves;

// let divEleve = document.querySelector("#eleve");
// //divEleve.innerHTML = `<p>${nom} ${prenom} ${age}</p>`;

// let liste = document.createElement("ul");
// divEleve.append(liste);

// Méthode 1
// let liEleve = "";
// for (let index = 0; index < eleves.length; index++) {
//   let eleve = eleves[index];
//   liEleve += `<li> ${eleve.prenom} ${eleve.nom} ${eleve.age} </li>`;
// }
// liste.innerHTML = liEleve;

//Méthode 2
// for (let index = 0; index < eleves.length; index++) {
//   let puce = document.createElement("li");
//   puce.innerText = `${eleves[index].prenom} ${eleves[index].nom} ${eleves[index].age}`;
//   liste.append(puce);
// }

//const body = document.querySelector("body");
// const h1 = document.createElement("h1");
// body.append(h1);
// h1.classList.add("titre1");
// h1.classList.remove("titre1");

const h1 = document.querySelector("h1");
//const verif = h1.classList.replace("titre1", "titre2");
h1.addEventListener("mouseover", (event) => {
  h1.style.color = "#00FF00";
});
h1.addEventListener("mouseout", (event) => {
  h1.style.color = "#FF0000";
});
h1.addEventListener("click", (event) => {
  h1.style.color = "#0000FF";
});
