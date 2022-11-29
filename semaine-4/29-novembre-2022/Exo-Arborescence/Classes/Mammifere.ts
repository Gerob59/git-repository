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

  abstract display(): void;
}
