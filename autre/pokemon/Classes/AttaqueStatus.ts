import Attaque from "./Attaque";
import Statistique from "./Statistique";
import { Statut } from "./Status";
import { Type } from "./Type";

export default class AttaqueStatus extends Attaque {
  constructor(
    nomAttaque: string,
    typeAttaque: Type,
    ppAttaque: number,
    descriptionAttaque?: string,
    infligeStatus?: Statut
  ) {
    super(
      nomAttaque,
      typeAttaque,
      ppAttaque,
      0,
      100,
      descriptionAttaque || "",
      infligeStatus || Statut.DEFAULT
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
