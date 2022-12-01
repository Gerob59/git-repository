import Attaque from "./Attaque";

export default class AttaqueStatus implements Attaque {
  nom: string;
  pp: number;
  descriptionAttaque: string;
  protected _effet: string;

  constructor(
    nomAttaque: string,
    ppAttaque: number,
    descriptionAttaque,
    effetAttaque: string
  ) {
    this.nom = nomAttaque;
    this.pp = ppAttaque;
    this.descriptionAttaque = descriptionAttaque;
    this._effet = effetAttaque;
  }

  public get effet() {
    return this._effet;
  }

  lancerAttaque() {
    throw new Error("Method not implemented.");
  }
}
