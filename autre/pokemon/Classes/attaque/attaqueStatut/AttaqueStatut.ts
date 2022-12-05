import Statistique from "../../statistique/Statistique";
import Effet from "../../../Interfaces/Effet";
import Type from "../../../Interfaces/Type";
import AttaqueAbstrait from "../AttaqueAbstrait";

export default class AttaqueStatut extends AttaqueAbstrait {
  constructor(
    nomAttaque: string,
    typeAttaque: Type,
    ppAttaque: number,
    descriptionAttaque: string,
    infligeStatus: Effet
  ) {
    super(
      nomAttaque,
      typeAttaque,
      ppAttaque,
      0,
      100,
      descriptionAttaque,
      infligeStatus
    );
  }

  protected typeDegats(statistiquePokemon: Statistique): number {
    return 0;
  }
}
