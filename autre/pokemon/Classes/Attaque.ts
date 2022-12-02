import Attaque from "./Attaque";
import { Type } from "./Type";
import Statistique from "./Statistique";

export default abstract class AttaqueQuiInfligeDesDegats implements Attaque {
  protected _nomAttaque: string;
  protected _typeAttaque: Type;
  protected _descriptionAttaque: string;
  protected _puissanceAttaque: number;
  protected _precisionAttaque: number;
  protected _ppAttaque: number;

  constructor(
    nomAttaque: string,
    typeAttaque: Type,
    ppAttaque: number,
    puissanceAttaque: number,
    precisionAttaque: number,
    descriptionAttaque?: string
  ) {
    this._nomAttaque = nomAttaque;
    this._typeAttaque = typeAttaque;
    this._descriptionAttaque = descriptionAttaque || "";
    this._puissanceAttaque = puissanceAttaque;
    this._precisionAttaque = precisionAttaque;
    this._ppAttaque = ppAttaque;
  }

  public abstract lancerAttaque(statistiquePokemon: Statistique): number;

  get nomAttaque(): string {
    return this.nomAttaque;
  }

  get typeAttaque(): Type {
    return this._typeAttaque;
  }

  get ppAttaque(): number {
    return this.ppAttaque;
  }

  get puissanceAttaque(): number {
    return this._puissanceAttaque;
  }

  get precisionAttaque(): number {
    return this._precisionAttaque;
  }

  get descriptionAttaque(): string {
    return this._descriptionAttaque;
  }
}
