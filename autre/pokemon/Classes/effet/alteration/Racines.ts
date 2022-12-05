import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Racines extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Racines.nomAlteration,
      AlterationInformation.Racines.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
