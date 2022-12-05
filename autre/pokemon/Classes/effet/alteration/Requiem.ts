import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Requiem extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Requiem.nomAlteration,
      AlterationInformation.Requiem.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
