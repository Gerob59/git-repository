import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Confusion extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Confusion.nomAlteration,
      AlterationInformation.Confusion.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
