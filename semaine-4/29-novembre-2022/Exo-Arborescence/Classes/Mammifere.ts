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

  display(): void {
    console.log(
      `je suis un ${this.constructor.name}. Mon nom est ${this._nom}, je pèse ${this._poids}kg et je suis né le ${this.dateNaissance}`
    );
  }

  private get dateNaissance(): string {
    return this._dateNaissance.toLocaleDateString();
  }
}
