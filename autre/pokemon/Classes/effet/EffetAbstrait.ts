import Effet from "../../Interfaces/Effet";
import Pokemon from "../pokemon/Pokemon";

export default abstract class AbstractEffet implements Effet {
  nomEffet: string;
  descriptionEffet: string;

  constructor(nomEffet: string, descriptionEffet: string) {
    this.nomEffet = nomEffet;
    this.descriptionEffet = descriptionEffet;
  }

  /**
   * Redéfinis dans une sous-classe afin d'avoir une multitude d'effets différents.
   * @param pokemon Le pokémon adverse qui recevra l'effet.
   */
  public abstract appliquerEffet(pokemon: Pokemon): void;
}
