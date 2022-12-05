import Statistique from "../../statistique/Statistique";
import Effet from "../../../Interfaces/Effet";
import Type from "../../../Interfaces/Type";
import AttaqueAbstrait from "../AttaqueAbstrait";

export default class AttaquePhysique extends AttaqueAbstrait {
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

  /**
   * On redéfinis que l'attaque utilisé est l'attaque physique.
   * @param statistiquePokemon Les statistiques du pokémon afin de calculer le montant de dégâts.
   * @returns Le montant de dégâts de l'attaque avant calcul de la défense adverse.
   */
  protected typeDegats(statistiquePokemon: Statistique): number {
    return this.puissanceAttaque * statistiquePokemon.attaquePhysique;
  }
}
