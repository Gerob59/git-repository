import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Piege extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Piege.nomAlteration,
      AlterationInformation.Piege.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
