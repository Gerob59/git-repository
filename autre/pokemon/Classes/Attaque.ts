import Type from "./Type";
import Categorie from "./Categorie";

export default class Attaque {
  private _nom: string;
  private _type: Type;
  private _categorie: Categorie;
  private _pp: number;
  private _puissance: number;
  private _precision: number;
  private _descriptionAttaque: string;

  constructor(
    nom: string,
    type: Type,
    categorie: Categorie,
    pp: number,
    puissance?: number,
    precision?: number,
    descriptionAttaque?: string
  ) {
    this._nom = nom;
    this._type = type;
    this._categorie = categorie;
    this._pp = pp;
    this._puissance = puissance || 0;
    this._precision = precision || 100;
    this._descriptionAttaque = descriptionAttaque || "";
  }

  get nom(): string {
    return this._nom;
  }

  get type(): Type {
    return this._type;
  }

  get categorie(): Categorie {
    return this._categorie;
  }

  get pp(): number {
    return this._pp;
  }

  get puissance(): number {
    return this._puissance;
  }

  get precision(): number {
    return this._precision;
  }

  get descriptionAttaque(): string {
    return this._descriptionAttaque;
  }
}
