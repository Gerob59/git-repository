import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Entrave extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Entrave.nomAlteration,
      AlterationInformation.Entrave.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
