import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Stockage extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Stockage.nomAlteration,
      AlterationInformation.Stockage.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
