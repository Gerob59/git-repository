import Effet from "../../Interfaces/Effet";
import Pokemon from "../Pokemon";

export default class Cauchemar implements Effet {
  nomAlteration: string;
  descriptionAlteration: string;

  constructor(nomAlteration: string, descriptionAlteration: string) {
    this.nomAlteration = nomAlteration;
    this.descriptionAlteration = descriptionAlteration;
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
