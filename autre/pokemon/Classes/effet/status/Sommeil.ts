import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../pokemon/Pokemon";
import StatutInformation from "./StatutInformation";

export default class Sommeil extends EffetAbstrait {
  constructor() {
    super(
      StatutInformation.SOMMEIL.nomStatut,
      StatutInformation.SOMMEIL.descriptionStatut
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
