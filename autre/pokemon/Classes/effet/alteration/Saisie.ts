import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Saisie extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Saisie.nomAlteration,
      AlterationInformation.Saisie.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
