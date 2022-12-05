import Statistique from "../../statistique/Statistique";
import Effet from "../../../Interfaces/Effet";
import Type from "../../../Interfaces/Type";
import AttaqueAbstrait from "../AttaqueAbstrait";

export default class AttaqueSpeciale extends AttaqueAbstrait {
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
  protected typeDegats(statistiquePokemon: Statistique): number {
    return this.puissanceAttaque * statistiquePokemon.attaqueSpeciale;
  }
}
