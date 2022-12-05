import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Tourmente extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Tourmente.nomAlteration,
      AlterationInformation.Tourmente.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
