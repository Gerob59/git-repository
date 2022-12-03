import Attaque from "../Attaque";
import Statistique from "../../statistique/Statistique";
import Effet from "../../../Interfaces/Effet";
import Type from "../../../Interfaces/Type";

export default class AttaqueSpeciale extends Attaque {
  constructor(
    nomAttaque: string,
    typeAttaque: Type,
    ppAttaque: number,
    puissanceAttaque: number,
    precisionAttaque: number,
    descriptionAttaque: string,
    infligeStatus: Effet
  ) {
    super(
      nomAttaque,
      typeAttaque,
      ppAttaque,
      puissanceAttaque,
      precisionAttaque,
      descriptionAttaque,
      infligeStatus
    );
  }
  public lancerAttaque(statistiquePokemon: Statistique): number {
    if (this.assezPP()) {
      if (this.reussisToucher()) {
        return this.puissanceAttaque * statistiquePokemon.attaqueSpeciale;
      } else {
        return 0;
      }
    } else {
      console.log("relancez une autre attaque");
      return -1; //cas d'arret à gérer au moment d'appel de l'attaque
    }
  }
}
