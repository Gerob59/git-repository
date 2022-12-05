import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class Attraction extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.Attraction.nomAlteration,
      AlterationInformation.Attraction.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
