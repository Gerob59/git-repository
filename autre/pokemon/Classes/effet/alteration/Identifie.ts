import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Identifie extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Identifie.nomAlteration,
      AlterationInformation.Identifie.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
