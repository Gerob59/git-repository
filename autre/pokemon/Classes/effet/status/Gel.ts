import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../pokemon/Pokemon";
import StatutInformation from "./StatutInformation";

export default class Gel extends EffetAbstrait {
  constructor() {
    super(
      StatutInformation.GEL.nomStatut,
      StatutInformation.GEL.descriptionStatut
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
