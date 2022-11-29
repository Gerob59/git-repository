interface Collaborateur {
  nom: string;
  prenom: string;
  travailler(): string;
}

interface Remunerer extends Collaborateur {
  salaire: number;
  augmentation(pourcentage: number): void;
}

interface DureeLimite extends Collaborateur {
  finContract: Date;
  prolonger(jours: number): void;
}

class CDI implements Remunerer {
  nom: string;
  prenom: string;
  salaire: number;

  constructor(nom: string, prenom: string, salaire: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
  }

  travailler(): string {
    return `${this.prenom} ${this.nom} a travaillé comme un pro !`;
  }

  augmentation(pourcentage: number): void {
    if (pourcentage < 0) {
      throw new Error("le pourcentage doit être positif");
    } else {
      console.log(
        `le salaire de ${this.prenom} ${this.nom} va être augmenté de ${pourcentage}%. Il est actuellement de ${this.salaire}`
      );
      const augmentation = (this.salaire * pourcentage) / 100;
      console.log(`Il gagnera ${augmentation}€ supplémentaires`);
      this.salaire += augmentation;
      console.log(`Son nouveau salaire est de ${this.salaire}€`);
    }
  }
}

class Stagiaire implements DureeLimite {
  nom: string;
  prenom: string;
  finContract: Date;

  constructor(nom: string, prenom: string, finContract: Date) {
    this.nom = nom;
    this.prenom = prenom;
    this.finContract = finContract;
  }

  get fin(): string {
    return this.finContract.toLocaleDateString();
  }

  travailler(): string {
    return `${this.prenom} ${this.nom} a bien fait les photocopies et ramené le café !`;
  }
  prolonger(jours: number): void {
    this.finContract.setDate(this.finContract.getDate() + jours);
    console.log(
      `La date de fin de contrat a été prolongée jusqu'au ${this.fin}`
    );
  }
}

class CDD implements Remunerer, DureeLimite {
  nom: string;
  prenom: string;
  salaire: number;
  finContract: Date;

  constructor(nom: string, prenom: string, salaire: number, finContract: Date) {
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
    this.finContract = finContract;
  }

  get fin(): string {
    return this.finContract.toLocaleDateString();
  }

  travailler(): string {
    return `${this.prenom} ${this.nom} a travaillé comme un fou pour avoir un cdi`;
  }

  augmentation(pourcentage: number): void {
    if (pourcentage < 0) {
      throw new Error("le pourcentage doit être positif");
    } else {
      console.log(
        `le salaire de ${this.prenom} ${this.nom} va être augmenté de ${pourcentage}%. Il est actuellement de ${this.salaire}`
      );
      const augmentation = (this.salaire * pourcentage) / 100;
      console.log(`Il gagnera ${augmentation}€ supplémentaires`);
      this.salaire += augmentation;
      console.log(`Son nouveau salaire est de ${this.salaire}€`);
    }
  }

  prolonger(jours: number): void {
    this.finContract.setDate(this.finContract.getDate() + jours);
    console.log(
      `La date de fin de contrat a été prolongée jusqu'au ${this.fin}`
    );
  }
}

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
