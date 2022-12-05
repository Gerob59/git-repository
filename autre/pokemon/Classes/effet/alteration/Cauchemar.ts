import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Cauchemar extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Cauchemar.nomAlteration,
      AlterationInformation.Cauchemar.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
