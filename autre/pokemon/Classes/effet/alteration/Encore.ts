import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Encore extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Encore.nomAlteration,
      AlterationInformation.Encore.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
