import CDI from "./Classes/CDI";
import CDD from "./Classes/CDD";
import Stagiaire from "./Classes/Stagiaire";

const employeCDI: CDI = new CDI("Terieur", "Alex", 1000);
const employeCDD: CDD = new CDD(
  "Nicouette",
  "Sandra",
  1000,
  new Date("2022/12/31")
);
const stagiaire: Stagiaire = new Stagiaire(
  "Nareff",
  "Pol",
  new Date("2022/12/31")
);

console.log("\n");
console.log(employeCDI.travailler());
employeCDI.augmentation(10);

console.log("\n");
console.log(employeCDD.travailler());
employeCDD.augmentation(10);
employeCDD.prolonger(90);

console.log("\n");
console.log(stagiaire.travailler());
stagiaire.prolonger(30);
