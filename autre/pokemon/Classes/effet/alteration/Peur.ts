import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Peur extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Peur.nomAlteration,
      AlterationInformation.Peur.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
