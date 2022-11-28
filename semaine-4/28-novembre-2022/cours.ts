// try {
//   // first
// } catch (error) {
//   // catch an error
// } finally {
//   // after a succesfull try
// }

// type Chat = {
//   nom: string;
//   race: string;
//   age: number;
//   poid: number;
// };

// const chat: Chat = {
//   nom: "pikachu",
//   race: "europeen",
//   age: 3,
//   poid: 4,
// };

// function getChat(...surnoms: string[]): string {
//   return `nom:${chat.nom}, race:${chat.race}, age:${chat.age}ans, poid:${
//     chat.poid
//   } kilos\nSes surnoms sont: ${surnoms.join(", ")}`;
// }
// console.log(getChat("chacha", "chachou", "pika", "gros tas"));

class Humain {
  #nom: string;
  #prenom: string;
  #dateNaissance: Date;

  constructor(nom: string, prenom: string, naissance: Date) {
    this.#nom = nom;
    this.#prenom = prenom;
    this.#dateNaissance = naissance;
  }

  getNom(): string {
    return this.#nom;
  }

  getPrenom(): string {
    return this.#prenom;
  }

  getDateNaissance(): Date {
    return this.#dateNaissance;
  }

  getAge(): number {
    const dob = this.getDateNaissance().toString();
    const year: number = Number(dob.substring(0, 4));
    const month: number = Number(dob.substring(4, 2)) - 1;
    const day: number = Number(dob.substring(6, 2));
    const today: Date = new Date();
    let age = today.getFullYear() - year;
    if (
      today.getMonth() < month ||
      (today.getMonth() == month && today.getDate() < day)
    ) {
      age--;
    }
    return age;
  }
}
class Formateur extends Humain {
  #societe!: string;
  constructor(nom: string, prenom: string, naissance: Date) {
    super(nom, prenom, naissance);
  }

  getSociete(): string {
    return this.#societe;
  }

  setSociete(nouvelleSociete: string) {
    this.#societe = nouvelleSociete;
  }
}

const formateur1: Formateur = new Formateur(
  "Devos",
  "Alexandre",
  new Date("1994-06-14")
);
formateur1.setSociete("Sémifir");

console.log(
  `Aujourd'hui, ${formateur1.getPrenom()} ${formateur1.getNom()} est le formateur venant de la société ${formateur1.getSociete()}. Il a ${formateur1.getAge()}ans`
);
