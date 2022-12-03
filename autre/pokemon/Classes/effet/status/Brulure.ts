import EffetAbstrait from "../EffetAbstrait";
import Pokemon from "../../pokemon/Pokemon";
import StatutInformation from "./StatutInformation";

export default class Brulure extends EffetAbstrait {
  constructor() {
    super(
      StatutInformation.BRULURE.nomStatut,
      StatutInformation.BRULURE.descriptionStatut
    );
  }

  appliquerEffet(pokemon: Pokemon): void {
    throw new Error("Method not implemented.");
  }
}
