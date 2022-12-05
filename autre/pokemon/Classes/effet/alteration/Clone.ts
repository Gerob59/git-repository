import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Clone extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Clone.nomAlteration,
      AlterationInformation.Clone.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
