import { DureeLimite } from "../Interfaces/DureeLimite";

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

export default Stagiaire;
