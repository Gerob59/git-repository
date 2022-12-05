import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Possesif extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Possesif.nomAlteration,
      AlterationInformation.Possesif.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
