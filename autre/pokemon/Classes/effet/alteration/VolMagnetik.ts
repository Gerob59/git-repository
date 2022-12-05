import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class VolMagnetik extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.VolMagnetik.nomAlteration,
      AlterationInformation.VolMagnetik.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
