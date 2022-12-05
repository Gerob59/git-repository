import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class ATerre extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.ATerre.nomAlteration,
      AlterationInformation.ATerre.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
