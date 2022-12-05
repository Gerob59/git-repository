import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class AntiSoin extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.AntiSoin.nomAlteration,
      AlterationInformation.AntiSoin.descriptionAlteration
    );
  }
  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
