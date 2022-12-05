import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class PrelevementDuDestin extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.PrelevementDuDestin.nomAlteration,
      AlterationInformation.PrelevementDuDestin.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
