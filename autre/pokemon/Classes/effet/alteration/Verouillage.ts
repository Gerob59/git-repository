import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Verouillage extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Verouillage.nomAlteration,
      AlterationInformation.Verouillage.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
