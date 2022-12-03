import Pokemon from "../Pokemon";
import EffetAbstrait from "../EffetAbstrait";

export default class PrelevementDuDestin extends EffetAbstrait {
  constructor(nomAlteration: string, descriptionAlteration: string) {
    super(nomAlteration, descriptionAlteration);
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
