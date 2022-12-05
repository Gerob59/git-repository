import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Somnolent extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Somnolent.nomAlteration,
      AlterationInformation.Somnolent.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
