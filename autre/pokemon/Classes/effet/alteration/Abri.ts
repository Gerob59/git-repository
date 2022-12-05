import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Abri extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Abri.nomAlteration,
      AlterationInformation.Abri.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
