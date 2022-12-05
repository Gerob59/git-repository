import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Provoc extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Provoc.nomAlteration,
      AlterationInformation.Provoc.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
