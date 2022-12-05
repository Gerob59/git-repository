import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class ChangementDeType extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.ChangementDeType.nomAlteration,
      AlterationInformation.ChangementDeType.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
