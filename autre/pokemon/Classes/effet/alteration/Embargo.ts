import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Embargo extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Embargo.nomAlteration,
      AlterationInformation.Embargo.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
