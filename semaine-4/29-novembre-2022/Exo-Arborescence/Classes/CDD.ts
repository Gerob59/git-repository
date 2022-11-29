import { Remunerer } from "../Interfaces/Remunerer";
import { DureeLimite } from "../Interfaces/DureeLimite";

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
export default CDD;
