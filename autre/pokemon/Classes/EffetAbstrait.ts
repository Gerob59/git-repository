import Effet from "../Interfaces/Effet";
import Pokemon from "./Pokemon";

export default abstract class AbstractEffet implements Effet {
  nomAlteration: string;
  descriptionAlteration: string;

  constructor(nomAlteration: string, descriptionAlteration: string) {
    this.nomAlteration = nomAlteration;
    this.descriptionAlteration = descriptionAlteration;
  }

  public abstract appliquerEffet(pokemon: Pokemon): void;
}
