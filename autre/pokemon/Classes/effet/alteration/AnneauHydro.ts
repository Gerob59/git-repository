import Pokemon from "../../pokemon/Pokemon";
import EffetAbstrait from "../EffetAbstrait";
import AlterationInformation from "./AlterationInformation";

export default class AnneauHydro extends EffetAbstrait {
  constructor() {
    super(
      AlterationInformation.AnneauHydro.nomAlteration,
      AlterationInformation.AnneauHydro.descriptionAlteration
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
