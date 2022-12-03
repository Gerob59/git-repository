import Effet from "../../Interfaces/Effet";
import Pokemon from "../Pokemon";

export default abstract class AbstractEffet implements Effet {
  nomEffet: string;
  descriptionEffet: string;

  constructor(nomEffet: string, descriptionEffet: string) {
    this.nomEffet = nomEffet;
    this.descriptionEffet = descriptionEffet;
  }

  public abstract appliquerEffet(pokemon: Pokemon): void;
}
