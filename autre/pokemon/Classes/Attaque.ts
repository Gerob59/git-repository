import Attaque from "./Attaque";
import { Type } from "./Type";
import Statistique from "./Statistique";
import { Statut } from "./Status";

export default abstract class AttaqueQuiInfligeDesDegats implements Attaque {
  protected _nomAttaque: string;
  protected _typeAttaque: Type;
  protected _descriptionAttaque: string;
  protected _puissanceAttaque: number;
  protected _precisionAttaque: number;
  protected _ppAttaque: number;
  protected _infligeStatus: Statut;

  constructor(
    nomAttaque: string,
    typeAttaque: Type,
    ppAttaque: number,
    puissanceAttaque: number,
    precisionAttaque: number,
    descriptionAttaque: string,
    infligeStatus?: Statut
  ) {
    this._nomAttaque = nomAttaque;
    this._typeAttaque = typeAttaque;
    this._descriptionAttaque = descriptionAttaque;
    this._puissanceAttaque = puissanceAttaque;
    this._precisionAttaque = precisionAttaque;
    this._ppAttaque = ppAttaque;
    this._infligeStatus = infligeStatus || Statut.DEFAULT;
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

  protected reussisToucher(): boolean {
    let rate: number = Math.random() * this.precisionAttaque;
    if (rate > this.precisionAttaque) {
      return false;
    } else {
      return true;
    }
  }

  protected assezPP(): boolean {
    if (this._ppAttaque > 0) {
      this._ppAttaque--;
      return true;
    } else {
      console.log(
        "La compétence ne pas etre utilisé, elle ne possede plus de PP"
      );
      return false;
    }
  }
}
