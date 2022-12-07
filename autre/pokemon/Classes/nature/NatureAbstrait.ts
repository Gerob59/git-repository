import Nature from "../../Interfaces/Nature";
import Statistique from "../statistique/Statistique";

export default abstract class NatureAbstrait implements Nature {
  _nomNature: string;

  constructor(nomNature: string) {
    this._nomNature = nomNature;
  }

  /**
   * Redéfinis dans les sous-classes pour avoir l'effet de la nature à appliquer au pokémon
   * @param statistiquePokemon Les stats du pokémon à modifier
   */
  abstract appliquerNature(statistiquePokemon: Statistique): void;
}
