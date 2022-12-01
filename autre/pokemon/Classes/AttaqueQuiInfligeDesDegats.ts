import Attaque from "./Attaque";
import { Type } from "./Type";

export default abstract class AttaqueQuiInfligeDesDegats implements Attaque {
  nom: string;
  pp: number;
  descriptionAttaque: string;
  protected _type: Type;
  protected _puissance: number;
  protected _precision: number;

  constructor(
    nom: string,
    type: Type,
    pp: number,
    puissance?: number,
    precision?: number,
    descriptionAttaque?: string
  ) {
    this.nom = nom;
    this.pp = pp;
    this.descriptionAttaque = descriptionAttaque || "";
    this._type = type;
    this._puissance = puissance || 0;
    this._precision = precision || 100;
  }
  lancerAttaque() {
    throw new Error("Method not implemented.");
  }

  get type(): Type {
    return this._type;
  }

  get puissance(): number {
    return this._puissance;
  }

  get precision(): number {
    return this._precision;
  }
}
