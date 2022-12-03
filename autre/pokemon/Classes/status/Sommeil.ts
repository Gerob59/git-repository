import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../Pokemon";

class Sommeil extends EffetAbstrait {
  constructor(nomAlteration: string, descriptionAlteration: string) {
    super(nomAlteration, descriptionAlteration);
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
