import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Vampigraine extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Vampigraine.nomAlteration,
      AlterationInformation.Vampigraine.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
