import Animal from "../Interfaces/Animal";

export default abstract class Mammifere implements Animal {
  _nom: string;
  _poids: number;
  _dateNaissance: Date;
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

  public get nom(): string {
    return this._nom;
  }

  public get poids(): number {
    return this._poids;
  }

  public get dateNaissance(): Date {
    return this._dateNaissance;
  }

  public set nom(nouveauNom: string) {
    this._nom = nouveauNom;
  }

  public set poids(nouveauPoids: number) {
    this._poids = nouveauPoids;
  }

  public set dateNaissance(nouvelleDate: Date) {
    this._dateNaissance = nouvelleDate;
  }

  public get age(): number {
    const annee: number =
      new Date().getFullYear() - this._dateNaissance.getFullYear();
    const mois: number = new Date().getMonth() - this._dateNaissance.getMonth();
    if (mois < 0) return annee - 1;
    else return annee;
  }

  abstract parler(): void;
}
