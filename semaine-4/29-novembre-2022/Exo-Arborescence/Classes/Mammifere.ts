import Animal from "../Interfaces/Animal";

export default abstract class Mammifere implements Animal {
  protected _nom: string;
  protected _poids: number;
  protected _dateNaissance: Date;

  constructor(nom: string, poids: number, dateNaissance: Date) {
    this._nom = nom;
    this._poids = poids;
    this._dateNaissance = dateNaissance;
  }

  public display(): void {
    console.log(
      `je suis un ${this.constructor.name}. Mon nom est ${this._nom}, je pèse ${
        this._poids
      }kg et je suis né le ${this.dateNaissance.toLocaleDateString()}`
    );
  }

  protected get nom(): string {
    return this._nom;
  }

  protected get poids(): number {
    return this._poids;
  }

  protected get dateNaissance(): Date {
    return this._dateNaissance;
  }

  protected set nom(nouveauNom: string) {
    this._nom = nouveauNom;
  }

  protected set poids(nouveauPoids: number) {
    this._poids = nouveauPoids;
  }

  protected set dateNaissance(nouvelleDate: Date) {
    this._dateNaissance = nouvelleDate;
  }

  abstract parler(): void;
}
