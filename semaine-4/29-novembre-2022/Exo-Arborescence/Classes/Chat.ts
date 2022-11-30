import Mammifere from "./Mammifere";
import Terrestre from "../Interfaces/Terrestre";

export default class Chat extends Mammifere implements Terrestre {
  private _couleurs!: string[];
  constructor(
    nom: string,
    poids: number,
    dateNaissance: Date,
    ...couleurs: string[]
  ) {
    super(nom, poids, dateNaissance);
    this._couleurs = couleurs;
  }

  get couleurs(): string[] {
    return this._couleurs;
  }

  set couleurs(couleurs: string[]) {
    this._couleurs = couleurs;
  }

  ajouterCouleurs(...nouvellesCouleurs: string[]) {
    nouvellesCouleurs.forEach((couleur) => this._couleurs.push(couleur));
  }

  supprimerCouleur(couleurASupprimer: string): void {
    if (this.couleurs.includes(couleurASupprimer)) {
      this._couleurs = this._couleurs.filter((couleur) => {
        return couleur !== couleurASupprimer;
      });
    } else {
      console.log("cette couleur n'existe pas !");
    }
  }

  RespirerHorsDeLEau(): void {
    this.respirer();
  }
  marcher(): void {
    this.deplacer();
  }

  parler(): void {
    console.log(`Le ${this.constructor.name} Miaule: "MIAOU !"`);
  }

  deplacer(): void {
    console.log(`Le ${this.constructor.name} se déplace en marchant`);
  }

  respirer(): void {
    console.log(`Le ${this.constructor.name} respire de l'air`);
  }
}
