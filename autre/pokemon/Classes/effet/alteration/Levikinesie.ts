import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Levikinesie extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Levikinesie.nomAlteration,
      AlterationInformation.Levikinesie.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
