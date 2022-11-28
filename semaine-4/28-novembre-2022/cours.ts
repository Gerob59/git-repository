// try {
//   // first
// } catch (error) {
//   // catch an error
// } finally {
//   // after a succesfull try
// }

type Chat = {
  nom: string;
  race: string;
  age: number;
  poid: number;
};

const chat: Chat = {
  nom: "pikachu",
  race: "europeen",
  age: 3,
  poid: 4,
};

function getChat(...surnoms: string[]): string {
  return `nom:${chat.nom}, race:${chat.race}, age:${chat.age}ans, poid:${
    chat.poid
  } kilos\nSes surnoms sont: ${surnoms.join(", ")}`;
}
console.log(getChat("chacha", "chachou", "pika", "gros tas"));

class Formateur {
  nom!: string;
  prenom!: string;
}

let formateur1: Formateur = new Formateur();
formateur1.nom = "Devos";
formateur1.prenom = "Alexandre";

console.log(
  `${formateur1.nom} ${formateur1.prenom} est le formateur aujourd'hui`
);
