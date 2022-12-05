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

  /**
   * On redéfinis que l'attaque utilisé est 0, car les attaques statuts ne font pas de dégâts.
   * @param statistiquePokemon Les statistiques du pokémon afin de calculer le montant de dégâts.
   * @returns Le montant de dégâts de l'attaque avant calcul de la défense adverse.
   */
  protected typeDegats(statistiquePokemon: Statistique): number {
    return 0;
  }
}
