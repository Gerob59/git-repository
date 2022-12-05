import Type from "../../Interfaces/Type";
import Statistique from "../statistique/Statistique";
import Effet from "../../Interfaces/Effet";
import Attaque from "../../Interfaces/Attaque";

export default abstract class AttaqueAbstrait implements Attaque {
  nomAttaque: string;
  typeAttaque: Type;
  descriptionAttaque: string;
  puissanceAttaque: number;
  precisionAttaque: number;
  ppAttaque: number;
  infligeStatus: Effet;

  constructor(
    nomAttaque: string,
    typeAttaque: Type,
    ppAttaque: number,
    puissanceAttaque: number,
    precisionAttaque: number,
    descriptionAttaque: string,
    infligeStatus: Effet
  ) {
    this.nomAttaque = nomAttaque;
    this.typeAttaque = typeAttaque;
    this.descriptionAttaque = descriptionAttaque;
    this.puissanceAttaque = puissanceAttaque;
    this.precisionAttaque = precisionAttaque;
    this.ppAttaque = ppAttaque;
    this.infligeStatus = infligeStatus;
  }

  protected abstract typeDegats(statistiquePokemon: Statistique): number;

  public lancerAttaque(statistiquePokemon: Statistique): number {
    if (this.assezPP()) {
      if (this.reussisToucher()) {
        return this.typeDegats(statistiquePokemon);
      } else {
        return 0;
      }
    } else {
      console.log("relancez une autre attaque");
      return -1; //cas d'arret à gérer au moment d'appel de l'attaque
    }
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
    if (this.ppAttaque > 0) {
      this.ppAttaque--;
      return true;
    } else {
      console.log(
        "La compétence ne pas etre utilisé, elle ne possede plus de PP"
      );
      return false;
    }
  }
}
