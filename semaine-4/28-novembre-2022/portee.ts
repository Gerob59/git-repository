class Employe {
  private nom: string;
  private prenom: string;
  private salaire: number;
  constructor(nom: string, prenom: string, salaire: number = 1000) {
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
  }

  augmentation(pourcentage: number) {
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

const employe1: Employe = new Employe("Polnareff", "Michel");
employe1.augmentation(10);
