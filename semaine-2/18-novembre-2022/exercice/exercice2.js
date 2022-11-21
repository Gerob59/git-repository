function horaire() {
  let now = new Date();
  let annee = now.getFullYear();
  let mois = now.getMonth() + 1;
  let jour = now.getDate();
  let heure = now.getHours();
  let minute = now.getMinutes();
  let seconde = now.getSeconds();
  return (p2.innerText = `Nous sommes le ${jour}/${mois}/${annee} et il est ${heure}heure ${minute}minutes ${seconde}secondes`);
}

const body2 = document.querySelector("body");
let p2 = document.createElement("p");
p2.innerText = "wait !";
body2.append(p2);
setInterval(horaire, 1000);
