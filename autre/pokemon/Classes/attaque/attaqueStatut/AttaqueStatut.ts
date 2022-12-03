import Attaque from "../Attaque";
import Statistique from "../../statistique/Statistique";
import Effet from "../../../Interfaces/Effet";
import Type from "../../../Interfaces/Type";

export default class AttaqueStatut extends Attaque {
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

  public lancerAttaque(statistiquePokemon: Statistique): number {
    if (this.assezPP()) {
      return 0; // /!\ attention valeur a changer par la suite /!\
    } else {
      console.log("relancez une autre attaque");
      return -1; //cas d'arret à gérer au moment d'appel de l'attaque
    }
  }
}
