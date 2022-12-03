import Effet from "./Interfaces/Effet";
import Paralysie from "./Classes/effet/status/Paralysie";

const statut: Effet = new Paralysie();
console.log(statut.nomAlteration);
console.log(statut.descriptionAlteration);
